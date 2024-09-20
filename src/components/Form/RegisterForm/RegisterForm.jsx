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
            <Input type="text" placeholder="Nome" name="name" register={register} />
            <Input type="email" placeholder="E-mail" name="email" register={register} />
            <Input type="password" placeholder="Senha" name="password" register={register} />
            <Input type="password" placeholder="Confirme sua senha" name="password" register={register} />
            <Button type="submit" text="Cadastrar-se" />
        </form >
    )
};

export default RegisterForm;
