import { Link } from "react-router-dom";
import TextLimit from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";

const Card = ({ id, title, description, cover, likes, comments, limit, top, actions = false }) => {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <CardHeader top={top}>
                        {actions && (
                            <span>
                                <Link to={`/manage_games/update/${id}`}>
                                    <i className="bi bi-pencil"></i>
                                </Link>
                                <Link to={`/manage_games/delete/${id}`}>
                                <i className="bi bi-trash-fill" style={{ color: 'red' }}></i>
                                </Link>
                            </span>
                        )}

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
