import logo from "../../images/logo.png"
import Button from "../Button/Button";
import Cookies from "js-cookie";
import { Form, Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorSpan, ImagemLogo, InputSpace, Nav, UserLoggedSpace } from "./NavbarStyled"
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../../schemas/searchSchema";
import { loggedUser } from "../../services/userServices";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema)
    });

    const navigate = useNavigate();
    const [userLogged, setUserLogged] = useState({});

    function onSearch(data) {
        const { title } = data;
        navigate(`/search/${title}`);
        reset();
    };

    async function findUserLogged() {
        try {
            const response = await loggedUser();
            //Meu código para nào aparecer a senha
            delete response.data.password;
            setUserLogged(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (Cookies.get("token")) findUserLogged();
    }, []);

    function userLogout() {
        Cookies.remove("token");
        setUserLogged(undefined);
        navigate("/");
    };

    return (
        <>
            <Nav>
                <Form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                        <button type="submit">
                            <i className="bi bi-search"></i>
                        </button>

                        <input {...register("title")} type="text" placeholder="Busque por um título..." />
                    </InputSpace>
                </Form>
                <Link to="/">
                    <ImagemLogo src={logo} alt="Logo Breaking Nerds" />
                </Link>

                {!userLogged ? (
                    <Link to="/auth">
                        <Button text="Entrar" type="button" />
                    </Link>
                ) :
                    <UserLoggedSpace>
                        <h2>{userLogged.name}</h2>
                        <Button text="Sair" type="button" onClick={userLogout}></Button>
                    </UserLoggedSpace>
                }
            </Nav >
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            < Outlet />
        </>
    )
}

export default Navbar;
