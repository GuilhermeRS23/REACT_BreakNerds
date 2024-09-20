import { InputStyled } from "./InputStyled";

const Input = ({ type, placeholder, name, register }) => {
    return (
        <InputStyled type={type} placeholder={placeholder} {...register(name)} />
    )
};

export default Input;
