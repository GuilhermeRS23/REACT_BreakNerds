import { Form, Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorSpan, ImagemLogo, InputSpace, Nav } from "./NavbarStyled"
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../../schemas/searchSchema";
import { loggedUser } from "../../services/userServices";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import Cookies from "js-cookie";
import PhofileDropDown from "../PhofileDropDown/PhofileDropDown";
import logo from "../../images/logo.png"
import Footer from "../Footer/Footer";

const Navbar = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema)
    });

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

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
            setUser(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (Cookies.get("token")) findUserLogged();
    }, []);

    function userLogout() {
        Cookies.remove("token");
        setUser({});
        navigate("/");
    };

    return (
        <>
            <Nav>
                <Link to="/">
                    <ImagemLogo src={logo} alt="Logo Breaking Nerds" />
                </Link>

                <Form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                        <button type="submit">
                            <i className="bi bi-search"></i>
                        </button>

                        <input {...register("title")} type="text" placeholder="Busque por um título..." />
                    </InputSpace>
                </Form>

                <PhofileDropDown onClick={userLogout} />
            </Nav >
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            < Outlet />
        </>
    )
}

export default Navbar;
