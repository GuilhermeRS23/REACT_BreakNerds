import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { ProfileAction, ProfileAddIcon, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileEditIcon, ProfileHeader, ProfileUser } from "./ProfileStyled";

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <ProfileContainer>
            {user.name ? (
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
            ) : <h1>Acesso Negado</h1>}

        </ProfileContainer >
    )
};

export default Profile;
