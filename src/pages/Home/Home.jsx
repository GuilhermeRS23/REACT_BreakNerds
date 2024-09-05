import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { games } from '../../Data.js'

import { HomeContainer } from "./HomeStyled.jsx";

const Home = () => {
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
