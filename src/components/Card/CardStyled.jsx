import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: .3rem;
    padding: 1rem;
    background-color: #FFF;
`
export const CardCabecalho = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2{
        margin-bottom: 1.5rem;
    }

    img{
        width: 30%;
        object-fit: cover;
        object-position: center;
    }
`

export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    div{
        display: flex;
        align-items: center;
        gap: .3rem;
    }
`
