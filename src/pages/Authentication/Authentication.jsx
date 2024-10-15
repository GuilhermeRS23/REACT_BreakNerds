import { Link, useParams } from "react-router-dom";
import { AuthContainer, ImgDelogin, SectionForm } from "./AuthenticationStyled";
import telaDeLogin from "../../images/730_generated.png"
import telaDeRegistro from "../../images/729_generated.png";
import LoginForm from "../../components/Form/LoginForm/LoginForm";
import RegisterForm from "../../components/Form/RegisterForm/RegisterForm";

const Authentication = () => {
    const { action } = useParams();

    return (
        <AuthContainer>
            {action === "login" ? (
                <>
                    <SectionForm type="login">
                        <h2>Entrar</h2>
                        <LoginForm />
                        <Link to="/auth/register">
                            <p>Não tem login? Crie sua conta</p>
                        </Link>
                    </SectionForm>
                    <ImgDelogin src={telaDeLogin} alt="Login" />
                </>
            ) : (
                <>
                    <SectionForm type="register">
                        <h2>Cadastrar-se</h2>
                        <RegisterForm />
                    </SectionForm>
                    <ImgDelogin src={telaDeRegistro} alt="Register" />
                </>

            )}
        </AuthContainer>
    )
};

export default Authentication;
