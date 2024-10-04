import styled from "styled-components";

export const UserLoggedSpace = styled.div`
    position: relative;
    display: inline-block;

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
    width: 3rem;
    border-radius: 50%;
    border: solid 2px black;
    cursor: pointer;
`

export const MenuDrop = styled.div`
    position: absolute;
    top: 100%;
    right: 0.25px;
    width: 10rem;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 1;
    display: flex;
    flex-direction: column;
`