import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onLogin(data) {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onLogin)}>
            <label htmlFor="email">E-mail</label>
            <Input placeholder="Digite seu e-mail" type="email" name="email" id="email" register={register} />
            <label htmlFor="password">Senha</label>
            <Input placeholder="Digite sua senha" type="password" name="password" id="password" register={register}/>
            <Button type="submit" text="Entrar" />
        </form>
    )
};

export default LoginForm;
