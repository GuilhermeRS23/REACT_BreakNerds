import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { ProfileAction, ProfileAddIcon, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileEditIcon, ProfileGames, ProfileHeader, ProfileUser } from "./ProfileStyled";
import { getAllGamesByUser } from "../../services/gamesServices";
import Card from "../../components/Card/Card";

const Profile = () => {
    const { user } = useContext(UserContext);
    const [gamesUser, setGamesUser] = useState([]);


    async function findAllGamesByUser() {
        const responseGamesByUser = await getAllGamesByUser();
        setGamesUser(responseGamesByUser.data.gamesByUser);
    };

    useEffect(() => {
        findAllGamesByUser();
    }, []);

    return (
        <>
            {user.name ? (
                <ProfileContainer>
                    <ProfileHeader>
                        <ProfileEditIcon>
                            <i className="bi bi-pencil-square"></i>
                        </ProfileEditIcon>
                        <ProfileBackground src={user.background} alt="Background do Perfil" />
                        <ProfileUser>
                            <ProfileAvatar src={user.avatar} alt={`Foto de ${user.name}`} />
                            <h2>{user.name}</h2>
                            <h3>@{user.username}</h3>
                        </ProfileUser>
                        <ProfileAction>
                            <ProfileAddIcon>
                                <i className="bi bi-plus-square"></i>
                            </ProfileAddIcon>
                        </ProfileAction>
                    </ProfileHeader>

                    <ProfileGames>
                        {gamesUser.length === 0 && <h3>Você ainda não cadastrou nenhum Game...</h3>}
                        {gamesUser.map((item) => (
                            <Card key={item.id}
                                {...item} />
                        ))}
                    </ProfileGames>
                </ProfileContainer >
            ) : <h1>Acesso Negado Será feito uma tela melhor</h1>}
        </>
    )
};

export default Profile;
