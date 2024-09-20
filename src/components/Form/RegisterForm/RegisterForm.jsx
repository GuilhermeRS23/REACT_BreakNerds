import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onRegister(data) {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onRegister)}>
            <label htmlFor="name">Nome</label>
            <Input type="text" placeholder="Digite seu nome" name="name" id="name" register={register} />
            <label htmlFor="email">E-mail</label>
            <Input type="email" placeholder="E-mail" name="email" id="email" register={register} />
            <label htmlFor="name">Senha</label>
            <Input type="password" placeholder="Senha" name="password" id="password" register={register} />
            <label htmlFor="name">Confirme sua senha</label>
            <Input type="password" placeholder="Confirme sua senha" name="password" id="password" register={register} />
            <Button type="submit" text="Cadastrar-se" />
        </form >
    )
};

export default RegisterForm;
