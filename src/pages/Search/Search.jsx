import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchGames } from "../../services/gamesServices.js";
import { ContainerResults, SearchGames, TextResults } from "./SearchStyled.jsx";
import Card from "../../components/Card/Card.jsx"

const Search = () => {
    const { title } = useParams();
    const [games, setGames] = useState([]);

    async function search() {
        try {
            const apiGames = await searchGames(title);
            setGames(apiGames.data.foundGames);

        } catch (error) {
            console.log(error);
            setGames([]);
        }
    };

    useEffect(() => {
        search();
    }, [title]);

    return (
        <ContainerResults>
            <TextResults>
                <span>
                    {games.length ? `Foi encontrado ${games.length} 
                    ${games.length > 1 ? "resultados" : "resultado"} para: ` :
                        "Não foi encontrado resultados para: "}
                </span>
                <h2>{title}</h2>
            </TextResults>

            <SearchGames>
                {games.map((item) => (
                    <Card key={item.id}
                        {...item} />
                ))}
            </SearchGames>
        </ContainerResults>
    )
};

export default Search;
