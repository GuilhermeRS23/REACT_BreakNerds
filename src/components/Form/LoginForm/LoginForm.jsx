import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../../Navbar/NavbarStyled";
import { loginSchema } from "../../../schemas/loginSchema";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });

    function onLogin(data) {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onLogin)}>
            <label htmlFor="email">E-mail</label>
            <Input placeholder="Digite seu e-mail" type="email" name="email" id="email" register={register} />
            {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
            <label htmlFor="password">Senha</label>
            <Input placeholder="Digite sua senha" type="password" name="password" id="password" register={register} />
            {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
            <Button type="submit" text="Entrar" />
        </form>
    )
};

export default LoginForm;
