import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <h1>{user.name}</h1>
    )
};

export default Profile;
