import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    gap: 1rem;
    max-width: 100%;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    border-radius: .3rem;
    background-color: #FFF;
`
export const CardBody = styled.article`
    display: flex;
    height: 100%;
    width: 100%;

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

    h2{
        margin-bottom: 1rem;
        font-size: ${(props) => (props.top ? "3rem" : "1.5rem")};
        width: 100%;
    }
`