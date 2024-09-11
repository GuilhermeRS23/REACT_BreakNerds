import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { getAllGames } from "../../services/gamesServices.js";

import { HomeContainer } from "./HomeStyled.jsx";

const Home = () => {
    const [games, setGames] = useState([]);

    async function findAllGames() {
        const response = await getAllGames();
        const res = response.data.results;
        setGames(res);
    }

    useEffect(() => {
        findAllGames();
    }, []);

    return (
        <>
            <Navbar />
            <HomeContainer>
                {games.map((item) => (
                    <Card {...item} key={item.id} />
                ))}
            </HomeContainer>
        </>
    );
}

export default Home;
