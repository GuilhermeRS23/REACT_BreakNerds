import { CardCabecalho, CardContainer, CardFooter } from "./CardStyled";

const Card = ({ id, title, description, cover, likes, comments }) => {
    return (
        <CardContainer>
            <CardCabecalho>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <img src={cover} alt={title} />
            </CardCabecalho>

            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{likes.length}</span>
                </div>
                <div>
                    <i className="bi bi-chat-right-text"></i>
                    <span>{comments.length}</span>
                </div>
            </CardFooter>
        </CardContainer>
    );
}

export default Card;
