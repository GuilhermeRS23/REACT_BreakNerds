import { useContext, useEffect } from "react";
import { AvatarIcon, CommentSpace, CommentsSectionStyle, MessageCommentStyle, NomeUsuarioStyle } from "./CommentsStyled";
import { UserContext } from "../../Context/UserContext";

const Comments = ({ userName, userComment, userAvatar, userId, onClick }) => {
    const { user } = useContext(UserContext);

    return (
        <CommentsSectionStyle>
            <CommentSpace>
                <AvatarIcon src={userAvatar} alt="Foto do perfil" />
                <span>
                    <NomeUsuarioStyle>{userName}</NomeUsuarioStyle>
                    <MessageCommentStyle>{userComment}</MessageCommentStyle>
                </span>
            </CommentSpace>
            {userId === user._id && (
                <i className="bi bi-trash" onClick={onClick}></i>
            )}
        </CommentsSectionStyle>
    )
};

export default Comments;
