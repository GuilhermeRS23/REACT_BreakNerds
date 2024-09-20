import Button from "../../Button/Button";
import Input from "../../Input/Input";

const LoginForm = () => {
    return (
            <form>
                <Input placeholder="E-mail" type="email" name="email" />
                <Input placeholder="Senha" type="password" name="password" />
                <Button type="submit" text="Entrar" />
            </form>
    )
};

export default LoginForm;
