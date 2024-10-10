import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { AvatarIconMini, IconSair, MenuDrop, UserLoggedSpace } from "./PhofileDropDownStyled";
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
                            <h2>{user.name}</h2>
                            <Link to="/profile" style={{ textDecoration: 'none' }}>
                                <h2>Meu Perfil</h2>
                            </Link>
                            <IconSair className="bi bi-box-arrow-in-left" onClick={onClick}> Sair</IconSair>
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
