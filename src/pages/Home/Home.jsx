import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { getAllGames } from "../../services/gamesServices.js";

import { HomeContainer } from "./HomeStyled.jsx";

const Home = () => {

    let games;
    async function findAllGames() {
        const response = await getAllGames();
        games = response.data.results;
    }

    findAllGames();

    return (
        <>
            <Navbar />
            <HomeContainer>
                {games.map((game, index) => (
                    <Card {...game} key={index} />
                ))}
            </HomeContainer>
        </>
    );
}

export default Home;
