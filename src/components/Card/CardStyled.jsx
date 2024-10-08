import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    gap: 1rem;
    max-width: 100%;
    box-shadow: rgba(26, 30, 34, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    border-radius: .3rem;
    background-color: #FFF;
`
export const CardBody = styled.article`
    display: flex;
    height: 100%;
    width: 100%;

    p{
        font-family: var(--font-principal);
    }

div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
}

img{
        width: 30%;
        //object-fit: cover;
        object-position: center;
        border-radius: 0 .3rem .3rem 0;
    }
`

export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    section{
        display: flex;
        align-items: center;
        gap: .3rem;
    }
`



export const CardHeader = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${(props) => (props.top ? "1.5rem" : "1rem")};
    font-family: var(--font-principal);

    h2{
        margin-bottom: 1rem;
        font-size: ${(props) => (props.top ? "3rem" : "1.5rem")};
        width: 100%;
    }

    span{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 1.5rem;
    }

    i{
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        color: var(--cor-secundaria);
        font-size: 1.1rem;
        text-decoration: none;
        border: none;
    }
`
export const Autor = styled.p`
    padding: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
`