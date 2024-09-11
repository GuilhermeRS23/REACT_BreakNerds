import TextLimit from "../TextLimit/TextLimit";
import { CardCabecalho, CardContainer, CardFooter } from "./CardStyled";

const Card = ({ id, title, description, cover, likes, comments, limit }) => {
    return (
        <CardContainer>
            <CardCabecalho>
                <div>
                    <h2>{title}</h2>
                    <TextLimit description={description} limit={150} />
                </div>
                <img src={cover} alt={title} />
            </CardCabecalho>

            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{likes}</span>
                </div>
                <div>
                    <i className="bi bi-chat-right-text"></i>
                    <span>{comments}</span>
                </div>
            </CardFooter>
        </CardContainer>
    );
}

export default Card;
