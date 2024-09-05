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

    i {
    position: absolute;
    top: 1;
    right: .2rem;
    z-index: 10;
    border: none;
    background-color:  #EBF2FA;
    color: #000;
    border-radius: .3rem;
    padding: .5rem;
    }

    input{
    outline: none;
    font-size: 1rem;
    padding: .6rem;
    background-color: #EBF2FA;
    border: none;
    width: 100%;
    border-radius: .3rem;

    :focus{
        border: 1px solid #064789
    }
    }
`;

export const Button = styled.button`
    background-color: #2667ff;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: .5rem 1rem;
    color: #FFF;
    transition: all .4s ease-in-out;
    cursor: pointer;
    border-radius: .3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    letter-spacing: .1rem;

    :hover{
        background-color: #064789;
    }

`;
