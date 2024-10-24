import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getAllGames, getTopGame } from "../../services/gamesServices.js";
import { HomeContainer, HomeHearder } from "./HomeStyled.jsx";

const Home = () => {
    const [games, setGames] = useState([]);
    const [topGame, setTopGame] = useState({});

    async function findAllGames() {
        const responseGames = await getAllGames();
        const resGames = responseGames.data.results;
        setGames(resGames);

        const responseTop = await getTopGame();
        const resTop = responseTop.data.game;
        setTopGame(resTop);
    }

    useEffect(() => {
        findAllGames();
    }, []);

    return (
        <>
            <HomeHearder>
                <Card icons="true" top="true"
                    key={topGame.id}
                    {...topGame}
                />
            </HomeHearder>
            <HomeContainer>
                {games.map((item) => (
                    <Card icons="true" key={item.id}
                        {...item} />
                ))}
            </HomeContainer>
        </>
    );
}

export default Home;
