import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { ProfileAction, ProfileAddIcon, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileEditIcon, ProfileGames, ProfileHeader, ProfileUser } from "./ProfileStyled";
import { getAllGamesByUser } from "../../services/gamesServices";
import { Link } from "react-router-dom";
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
                            <Link to={`/manage_phofile/${user._id}`}>
                            <i className="bi bi-pencil-square"></i>
                            </Link>
                        </ProfileEditIcon>
                        <ProfileBackground src={user.background} alt="Background do Perfil" />
                        <ProfileUser>
                            <ProfileAvatar src={user.avatar} alt={`Foto de ${user.name}`} />
                            <h2>{user.name}</h2>
                            <h3>@{user.username}</h3>
                        </ProfileUser>
                        <ProfileAction>
                            <Link to={"/manage_games/add/game"}>
                                <ProfileAddIcon>
                                    <i className="bi bi-plus-square"></i>
                                </ProfileAddIcon>
                            </Link>
                        </ProfileAction>
                    </ProfileHeader>

                    <ProfileGames>
                        {gamesUser.length === 0 && <h3>Você ainda não cadastrou nenhum Game...</h3>}
                        {gamesUser.map((item) => (
                            <Card key={item.id}
                                actions={true}
                                {...item} />
                        ))}
                    </ProfileGames>
                </ProfileContainer >
            ) : <h1>Acesso Negado Será feito uma tela melhor</h1>}
        </>
    )
};

export default Profile;
