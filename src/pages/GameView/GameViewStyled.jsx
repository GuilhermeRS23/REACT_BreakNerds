import styled from "styled-components";

export const InputSpaceStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    padding: 2rem;

    input{
        border: 2px solid var(--cor-terciaria);
        width: 100%;
    }
    span{
        position: absolute;
        width: 100%;
        top: 45px;
    }
    button{
        height: 3rem;
    }
`;
