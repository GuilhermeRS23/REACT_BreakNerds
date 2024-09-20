import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: .5rem;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 400px;
    padding: 2rem;
    gap: 1rem;
    background-color: ${(props) => (props.type === "login" ? "white" : "var(--cor-terciaria)")};
    color: ${(props) => (props.type === "register" ? "white" : "var(--cor-terciaria)")};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius:${(props) => (props.type === "login" ? "1rem 0 0 1rem" : "0 1rem 1rem 0")};

    h2{
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }
`