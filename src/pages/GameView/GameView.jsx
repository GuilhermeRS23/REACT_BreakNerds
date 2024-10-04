import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById, likeGame } from "../../services/gamesServices";
import { HomeHearder } from "../Home/HomeStyled";
import { CardFooter } from "../../components/Card/CardStyled";
import Card from "../../components/Card/Card";
import { UserContext } from "../../Context/UserContext";

const GameView = () => {
    const [game, setGame] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const { gameId } = useParams();

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
    
    useEffect(() => {
        findGame(gameId)
    }, [game.like]);

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
        </HomeHearder>
    )
};

export default GameView;
