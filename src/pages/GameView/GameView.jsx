import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { useParams } from "react-router-dom";
import { addCommentGame, deleteCommentGame, getGameById, likeGame } from "../../services/gamesServices";
import { HomeHearder } from "../Home/HomeStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentsConatinerStyle, InputSpaceStyle, LikeSpanStyled } from "./GameViewStyled";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { commentSchema } from "../../schemas/gameSchema";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Comments from "../../components/Comments/Comments";

const GameView = () => {
    const [game, setGame] = useState(null);
    const [gameComments, setGameComments] = useState([]);
    const [gameLikes, setGameLikes] = useState([]);
    const { user } = useContext(UserContext);
    const { gameId } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(commentSchema)
    });

    const findGame = useCallback(async (gameId) => {
        try {
            const { data: resGame } = await getGameById(gameId);
            const isLike = resGame.likes.map(item => ({ userId: item.userId }));
            const allCommentsData = resGame.comments.map(comment => ({
                userName: comment.userName,
                userAvatar: comment.userAvatar,
                idComment: comment.idComment,
                userId: comment.userId,
                message: comment.message,
                createdAt: comment.createdAt
            }));

            setGame(resGame);
            setGameComments(allCommentsData);
            setGameLikes(isLike);

        } catch (error) {
            alert(error)
        }
    }, []);

    async function deleteComment(idComment) {
        try {
            await deleteCommentGame(gameId, idComment);
            findGame(gameId);
        } catch (error) {
            console.log(error)
        }
    };

    async function curtir() {
        try {
            await likeGame({ userId: user._id }, gameId);
            findGame(gameId);
        } catch (error) {
            console.error(error)
            alert(error);
        }
    };

    async function addComment(data) {
        try {
            await addCommentGame(data, gameId);
            reset()
            findGame(gameId)
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        findGame(gameId)
    }, [gameId, findGame]);

    const temCurtida = gameLikes.some((e) => e.userId === user._id);

    return (
        <HomeHearder>
            {game && (
                <>
                    <Card top="true" key={game.id} {...game} text={`Criado por: ${game.username}`} />
                    <LikeSpanStyled>
                        <section onClick={curtir}>
                            <i className={`bi ${temCurtida ? "bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up"}`}></i>
                            <span>Gostei</span>
                        </section>
                        <section>
                            <i className="bi bi-chat-right-text"></i>
                            <span>Comentar</span>
                        </section>
                    </LikeSpanStyled>
                </>
            )}

            <form onSubmit={handleSubmit(addComment)}>
                <InputSpaceStyle>
                    <Input type="textarea" placeholder="Deixe seu comentário..." name="message" register={register} />
                    <Button type="Submit" text="Comentar" />
                    {errors.message && <ErrorSpan>{errors.message.message}</ErrorSpan>}
                </InputSpaceStyle>
            </form>

            {gameComments.length > 0 ? (
                <CommentsConatinerStyle>
                    <h2><span>{gameComments.length}</span>
                        {gameComments.length > 1 ? "Comentários" : "Comentário"}</h2>
                    {gameComments.map((item) => (
                        <Comments key={item.idComment} userComment={item.message}
                            userAvatar={item.userAvatar} userName={item.userName}
                            userId={item.userId} onClick={() => deleteComment(item.idComment)} />
                    ))}
                </CommentsConatinerStyle>
            ) : (
                <h1>Sem comentários --- a melhorar</h1>
            )}
        </HomeHearder>
    );
};

export default GameView;
