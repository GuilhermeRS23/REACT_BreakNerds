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

export const LikeSpanStyled = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1rem 0 1rem;

    section{
        display: flex;
        align-items: center;
        gap: .3rem;
        cursor: pointer;
    }    
`;

export const CommentsConatinerStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-top: solid 2px var(--cor-secundaria);
    width: 95%;
    margin: auto;

    span{
        font-weight: 700;
        color: gray;
        padding: .2rem 1rem;
    }

    h2{
        padding: 1rem;
    }
`

export const EmptyComment = styled.div`
    text-align: center;
    padding: 2rem;
    color: gray;
`
