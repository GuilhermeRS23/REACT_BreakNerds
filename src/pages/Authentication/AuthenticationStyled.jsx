import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    margin: 0 auto;

    form{
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: space-evenly;
        width: 75%;
        height: ${(props) => (props.type === "login" ? "100%" : "100%")};
        gap: 1rem;
    }
`

export const SectionForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 25%;
    height: ${(props) => (props.type === "login" ? "50%" : "60%")};
    padding: 2rem;
    gap: 1rem;
    background-color: ${(props) => (props.type === "login" ? "white" : "var(--cor-terciaria)")};
    color: ${(props) => (props.type === "register" ? "white" : "var(--cor-terciaria)")};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 1rem;

    h2{
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }
`
export const ImgDelogin = styled.img`
    height: 100%;
    width: 40%;
    object-fit: cover;
`