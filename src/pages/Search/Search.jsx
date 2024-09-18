import { useParams } from "react-router-dom";
import "./SearchStyled";

const Search = () => {
    const { title } = useParams();
    return <h1>{title}</h1>
}

export default Search;
