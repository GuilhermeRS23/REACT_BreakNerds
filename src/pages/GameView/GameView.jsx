import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentGame, deleteCommentGame, getGameById, likeGame } from "../../services/gamesServices";
import { HomeHearder } from "../Home/HomeStyled";
import { CardFooter } from "../../components/Card/CardStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentsConatinerStyle, InputSpaceStyle } from "./GameViewStyled";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { commentSchema } from "../../schemas/gameSchema";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Comments from "../../components/Comments/Comments";

const GameView = () => {
    const [game, setGame] = useState([]);
    const [gameComments, setGameComments] = useState([]);
    const [atualizar, setAtualizar] = useState([" "]);
    const { gameId } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(commentSchema)
    });

    async function findGame(gameId) {
        try {
            const responseGame = await getGameById(gameId);
            const resGame = responseGame.data;
            const resComments = resGame.comments;

            const allCommentsData = resComments.map(comment => ({
                userName: comment.userName,
                userAvatar: comment.userAvatar,
                idComment: comment.idComment,
                userId: comment.userId,
                message: comment.message,
                createdAt: comment.createdAt
            }));

            setGame(resGame);
            setGameComments(allCommentsData);
        } catch (error) {
            alert(error)
        }
    };

    let update = Math.random();

    async function deleteComment(idComment) {
        try {
            await deleteCommentGame(gameId, idComment);
            setAtualizar(update)
            console.log(update);
        } catch (error) {
            console.log(error)
        }
    };

    async function curtir(data) {
        try {
            await likeGame(data, gameId);
            setAtualizar(update)
        } catch (error) {
            console.error(error)
            alert(error);
        }
    };

    async function addComment(data) {
        try {
            await addCommentGame(data, gameId);
            setAtualizar(update)
            reset();
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        findGame(gameId)
    }, [atualizar]);

    return (
        <HomeHearder>
            <Card top="true"
                key={game.id}
                {...game} text={`Criado por: ${game.username}`} />

            <CardFooter>
                <section onClick={() => curtir(game)}>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>Gostei</span>
                </section>
                <section>
                    <i className="bi bi-chat-right-text"></i>
                    <span>Comentar</span>
                </section>
            </CardFooter>

            <form onSubmit={handleSubmit(addComment)}>
                <InputSpaceStyle>
                    <Input type="textarea" placeholder="Deixe seu comentário..."
                        name="message" register={register} />
                    <Button type="Submit" text="Comentar"></Button>
                    <span>
                        {errors.message && <ErrorSpan>{errors.message.message}</ErrorSpan>}
                    </span>
                </InputSpaceStyle>
            </form>
            {gameComments.length !== 0 ? (
                <CommentsConatinerStyle>
                    {gameComments.map((item) => (
                        <Comments key={item.idComment} userComment={item.message}
                            userAvatar={item.userAvatar} userName={item.userName}
                            userId={item.userId} onClick={() => deleteComment(item.idComment)} />
                    ))}
                </CommentsConatinerStyle>
            ) : <h1>Sem comentários --- a melhorar</h1>}

        </HomeHearder>
    )
};

export default GameView;
