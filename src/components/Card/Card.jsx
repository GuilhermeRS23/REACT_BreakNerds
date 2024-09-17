import TextLimit from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";

const Card = ({ id, title, description, cover, likes, comments, limit, top }) => {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <CardHeader top={top}>
                        <h2>{title}</h2>
                        <TextLimit description={description} limit={300} />
                    </CardHeader>

                    <CardFooter>
                        <section>
                            <i className="bi bi-hand-thumbs-up"></i>
                            <span>{likes?.length}</span>
                        </section>
                        <section>
                            <i className="bi bi-chat-right-text"></i>
                            <span>{comments?.length}</span>
                        </section>
                    </CardFooter>
                </div>
                <img src={cover} alt={title} />
            </CardBody>
        </CardContainer>
    );
}

export default Card;
