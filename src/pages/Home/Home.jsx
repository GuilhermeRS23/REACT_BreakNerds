import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { games } from '../../Data.js'

const Home = () => {
    return (
        <>
            <Navbar />
            {games.map((game, index) => (
                <Card {...game} key={index} />
            ))}
        </>
    );
}

export default Home;
