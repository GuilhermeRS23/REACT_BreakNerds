import styled from "styled-components";

export const ProfileEditContainer = styled.section`
    width: 60%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: .3rem;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    
    h2{
        margin-top: 1rem;
        color: var(--cor-terciaria);
    }

    label{
        font-weight: 700;
        font-size: 1.2rem;
        padding: 0 .5rem;
        color: var(--cor-terciaria);
    }

    form{
        min-width: 80%;
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        gap: 1rem;
    }
`