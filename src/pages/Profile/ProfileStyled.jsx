import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 80%;
    margin-top: 1rem;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    border-radius: .3rem;
    background-color:#FFF;
    z-index: 0;
`;

export const ProfileEditIcon = styled.i`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: var(--cor-principal);
    background-color: #FFF;
    padding: .5rem;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        color: var(--cor-terciaria);
        background-color: #FFF;
        font-size: 2rem;
    }
`;

export const ProfileBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 60%;
    z-index: -1;
    border-radius: .3rem .3rem 0 0;
`;

export const ProfileUser = styled.div`
    padding: 2rem;
`;

export const ProfileAvatar = styled.img`
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    border: solid 5px #FFF;
    object-fit: cover;
    object-position: center;
`;

export const ProfileAction = styled.div`
    padding: 2rem;
`;

export const ProfileAddIcon = styled.i`
    background-color: transparent;
    border-radius: 50%;
    color: var(--cor-principal);
    outline: none;
    border: none;
    cursor: pointer !important;
    font-weight: bold;
    font-size: 2rem;
    transition: all .3s ease-in-out;

    &:hover{
        color: var(--cor-terciaria);
        font-size: 2.1rem;
    }
`;

export const ProfileGames = styled.main`
    display:  grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin: 1rem auto;
    width: 80%;

    h3{
        grid-column: 1 / -1;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--cor-principal);
        margin-top: 1rem;
    }
`