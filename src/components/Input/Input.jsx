import { InputStyled } from "./InputStyled";

const Input = ({type, placeholder, name}) => {
    return (
        <InputStyled type={type} placeholder={placeholder}/>
    )
};

export default Input;
