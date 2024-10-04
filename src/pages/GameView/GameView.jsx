import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentGame, getGameById, likeGame } from "../../services/gamesServices";
import { HomeHearder } from "../Home/HomeStyled";
import { CardFooter } from "../../components/Card/CardStyled";
import { UserContext } from "../../Context/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputSpaceStyle } from "./GameViewStyled";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { commentSchema } from "../../schemas/gameSchema";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const GameView = () => {
    const [game, setGame] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const { gameId } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(commentSchema)
    });

    async function findGame(gameId) {
        try {
            const responseGame = await getGameById(gameId);
            const resGame = responseGame.data;
            setGame(resGame);
        } catch (error) {
            alert(error)
        }
    };

    async function curtir(data) {
        try {
            await likeGame(data, gameId);
        } catch (error) {
            console.error(error)
            alert(error);
        }
    };

    async function addComment(data) {
        try {
            const response = await addCommentGame(data, gameId);
            console.log(response);
            reset();
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        findGame(gameId)
    }, []);

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

        </HomeHearder>
    )
};

export default GameView;
