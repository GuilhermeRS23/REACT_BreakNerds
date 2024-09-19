import styled from "styled-components";

export const ContainerResults = styled.section`
    padding-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 35%;
    }
`

export const SearchGames = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 1rem auto;
    width: 90%;
`
export const TextResults = styled.div`
    padding: 4rem;
    background-color: #FFF;
    width: 90%;
    border-radius: .3rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    span{
        font-size: 1rem;
    }
`