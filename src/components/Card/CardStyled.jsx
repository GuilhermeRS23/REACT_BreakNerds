import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
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
