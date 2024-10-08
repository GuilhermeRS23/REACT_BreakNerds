import { useState } from "react";
import { InputStyled, TextArea } from "./InputStyled";

const Input = ({ type, placeholder, name, register, isInput = true, value: initialValue, disabled}) => {
    const [value, setValue] = useState(initialValue);

    let inputProps = {
        type, placeholder, ...register(name),
        onChange: (e) => setValue(e.target.value),
        disabled
    };

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
