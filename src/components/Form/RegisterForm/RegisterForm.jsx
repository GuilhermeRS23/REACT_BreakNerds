import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../../Navbar/NavbarStyled";
import { registerSchema } from "../../../schemas/registerSchema";

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    });

    function onRegister(data) {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onRegister)}>
            <label htmlFor="name">Nome</label>
            <Input type="text" placeholder="Digite seu nome" name="name" id="name" register={register} />
            {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
            <label htmlFor="email">E-mail</label>
            <Input type="email" placeholder="E-mail" name="email" id="email" register={register} />
            {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
            <label htmlFor="name">Senha</label>
            <Input type="password" placeholder="Senha" name="password" id="password" register={register} />
            {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
            <label htmlFor="name">Confirme sua senha</label>
            <Input type="password" placeholder="Confirme sua senha" name="confirmPassword" id="password" register={register} />
            {errors.confirmPassword && <ErrorSpan>{errors.confirmPassword.message}</ErrorSpan>}
            <Button type="submit" text="Cadastrar-se" />
        </form >
    )
};

export default RegisterForm;
