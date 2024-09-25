import { ButtonStyled } from "./ButtonStyled";

const Button = ({ type, text, onClick }) => {
    return (
        <ButtonStyled type={type} onClick={onClick}>{text}</ButtonStyled>
    )
};

export default Button;
