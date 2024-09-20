import { ButtonStyled } from "./ButtonStyled";

const Button = ({ type, text }) => {
    return (
        <ButtonStyled type={type}>{text}</ButtonStyled>
    )
};

export default Button;
