import logo from "../../images/logo.png"
import { Form, Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorSpan, ImagemLogo, InputSpace, Nav } from "./NavbarStyled"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button/Button";

const searchSchema = z.object({
    title: z.string()
        .nonempty({ message: "Informe algum caractere para pesquisa!" })
        .refine((value) => !/^\s*$/.test(value),
            { message: "Apenas espaço não é aceito para pesquisa!" })
});

const Navbar = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema)
    });

    const navigate = useNavigate();

    function onSearch(data) {
        const { title } = data;
        navigate(`/search/${title}`);
        reset();
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
                <Link to="/auth">
                    <Button text="Entrar" type="button" />
                </Link>
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
}

export default Navbar;
