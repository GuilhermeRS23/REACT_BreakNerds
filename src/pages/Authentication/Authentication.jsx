import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyled";

const Authentication = () => {
    return (
        <AuthContainer>
            <Section type="login">
                <h2>Entrar</h2>
                <form>
                    <Input placeholder="E-mail" type="email" name="email" />
                    <Input placeholder="Senha" type="password" name="password" />
                    <Button type="submit" text="Entrar" />
                </form>
            </Section>
            <Section type="register">
                <h2>Cadastrar-se</h2>
                <form>
                    <Input type="text" placeholder="Nome" name="name" />
                    <Input type="email" placeholder="E-mail" name="email" />
                    <Input type="password" placeholder="Senha" name="password" />
                    <Input type="password" placeholder="Confirme sua senha" name="password" />
                    <Button type="submit" text="Cadastrar-se" />
                </form>
                <form>

                </form>
            </Section>
        </AuthContainer>
    )
};

export default Authentication;
