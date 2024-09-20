import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: var(--cor-primaria);
    border: none;
    outline: none;
    font-size: 1rem;
    padding: .5rem 1rem;
    color: #FFF;
    transition: all .4s ease-in-out;
    cursor: pointer;
    border-radius: .3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    letter-spacing: .1rem;
    &:hover{
        background-color: #064789;
    }
`