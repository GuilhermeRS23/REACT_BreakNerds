import { AvatarIcon, CommentsSectionStyle, MessageCommentStyle, NomeUsuarioStyle } from "./CommentsStyled";

const Comments = ({userName, userComment, userAvatar}) => {

    return (
        <CommentsSectionStyle>
            <AvatarIcon src={userAvatar} alt="Foto do perfil" />
            <span>
                <NomeUsuarioStyle>{userName}</NomeUsuarioStyle>
                <MessageCommentStyle>{userComment}</MessageCommentStyle>
            </span>
        </CommentsSectionStyle>
    )
};

export default Comments;
