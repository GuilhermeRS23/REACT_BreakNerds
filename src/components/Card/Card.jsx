const Card = ({ title, description, cover, likes, comments }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={cover} alt={title} />
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{likes}</span>
            <i className="bi bi-chat-right-text"></i>
            <span>{comments}</span>
        </section>
    )
}

export default Card;
