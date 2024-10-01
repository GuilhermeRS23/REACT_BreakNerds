import { InputStyled, TextArea } from "./InputStyled";

const Input = ({ type, placeholder, name, register, isInput = true, value }) => {
    let inputProps = { type, placeholder, ...register(name) };
    if (value) inputProps.value = value;
    
    return (
        <>
            {isInput ? (
                <InputStyled {...inputProps} />
            ) : (
                <TextArea {...inputProps} />
            )}
        </>
    )
};

export default Input;
