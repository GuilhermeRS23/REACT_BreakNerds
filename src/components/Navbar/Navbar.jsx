import logo from "../../images/logo.png"
import { Form, Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, ImagemLogo, InputSpace, Nav } from "./NavbarStyled"

const Navbar = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    function onSearch(data) {
        const { title } = data;
        navigate(`/search/${title}`);
        reset();
    }

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
                <Button>Entrar</Button>
            </Nav>
            <Outlet />
        </>
    )
}

export default Navbar;
