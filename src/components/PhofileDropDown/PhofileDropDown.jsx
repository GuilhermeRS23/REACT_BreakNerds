import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { AvatarIconMini, MenuDrop, UserLoggedSpace } from "./PhofileDropDownStyled";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const PhofileDropDown = ({ onClick }) => {
    const { user } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <>
            {user.name ? (
                <UserLoggedSpace>
                    <span onClick={toggleDropdown}>
                        <AvatarIconMini src={user.avatar} alt="Foto do perfil" />
                        <i className="bi bi-caret-down-fill"></i>
                    </span>
                    {isOpen && (
                        <MenuDrop>
                            <Link to="/profile" style={{ textDecoration: 'none' }}>
                                <h2>Perfil</h2>
                            </Link>
                            <i className="bi bi-box-arrow-in-left" onClick={onClick}> Sair</i>
                        </MenuDrop>
                    )}
                </UserLoggedSpace>) :
                <Link to="/auth">
                    <Button text="Entrar" type="button" />
                </Link>
            }
        </>
    );
};

export default PhofileDropDown;
