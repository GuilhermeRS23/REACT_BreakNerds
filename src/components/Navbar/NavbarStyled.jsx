import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    /* position: fixed;
    top: 0; */
    background-color: #FFF;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const ImagemLogo = styled.img`
    width: 8rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
`;

export const InputSpace = styled.div`
    position: relative;
    width: 300px;
    display: flex;
    align-items: center;
    margin-left: 1rem;

    button {
    position: absolute;
    top: 1;
    right: .2rem;
    z-index: 10;
    border: none;
    background-color:  #EBF2FA;
    color: #000;
    border-radius: .3rem;
    padding: .5rem;
    transition: .3s;
    cursor: pointer;
    &:hover{
        background-color: #435364;
        }
    }

    input{
    outline: none;
    font-size: 1rem;
    padding: .6rem;
    background-color: #EBF2FA;
    border: none;
    width: 100%;
    border-radius: .3rem;
    &:focus{
        border: 1px solid #064789
        }
    }
`;

export const ErrorSpan = styled.span`
    //background-color: #f7c7c7;
    color: #9E0000;
    padding: 0rem 0.5rem;
    margin-top: 0;
    border-radius: 0 0 .5rem .5rem;
    display: flex;
    font-size: 1rem;
    font-family: var(--font-secundaria);
`

export const UserLoggedSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    gap: 1rem;

    span{
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    i{
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--cor-terciaria);
        transition: all .3s ease-in-out;
        &:hover{
            font-size: 2rem;
            color: red;
        }
    }

    h2{
        font-size: 1.1rem;
        color:var(--cor--principal);
        cursor: pointer;

        &:hover{
        color: var(--cor-secundaria);
        }

    } 
`

export const AvatarIconMini = styled.img`
    width: 2rem;
    border-radius: 50%;
    border: solid 2px black;
`
