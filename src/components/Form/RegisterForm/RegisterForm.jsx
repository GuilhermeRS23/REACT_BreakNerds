import Button from "../../Button/Button";
import Input from "../../Input/Input";

const RegisterForm = () => {
    return (
        <form>
            <Input type="text" placeholder="Nome" name="name" />
            <Input type="email" placeholder="E-mail" name="email" />
            <Input type="password" placeholder="Senha" name="password" />
            <Input type="password" placeholder="Confirme sua senha" name="password" />
            <Button type="submit" text="Cadastrar-se" />
        </form >
    )
};

export default RegisterForm;
