import LoginForm from "../../components/Form/LoginForm/LoginForm";
import RegisterForm from "../../components/Form/RegisterForm/RegisterForm";
import { AuthContainer, Section } from "./AuthenticationStyled";

const Authentication = () => {
    return (
        <AuthContainer>
            <Section type="login">
                <h2>Entrar</h2>
                <LoginForm />
            </Section>
            <Section type="register">
                <h2>Cadastrar-se</h2>
                <RegisterForm />
            </Section>
        </AuthContainer>
    )
};

export default Authentication;
