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
            <Input placeholder="E-mail" type="email" name="email" register={register} />
            <Input placeholder="Senha" type="password" name="password" register={register}/>
            <Button type="submit" text="Entrar" />
        </form>
    )
};

export default LoginForm;
