import styled from "styled-components";

export const CommentsSectionStyle = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    gap: 1rem;

    i{
        color: red;
        cursor: pointer;
    }
`

export const CommentSpace = styled.div`
    display: flex;
    gap: 1rem;
`

export const AvatarIcon = styled.img`
    width: 2rem;
    border-radius: 50%;
    border: solid 1px var(--cor-principal);
`

export const NomeUsuarioStyle = styled.p`
    font-weight: 700;
    font-size: .75rem;
`

export const MessageCommentStyle = styled.p`
    font-family: var(--font-secundaria);
`
