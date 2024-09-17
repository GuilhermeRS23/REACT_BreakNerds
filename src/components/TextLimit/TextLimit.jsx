const TextLimit = ({ description, limit }) => {
    const descriptionLimited =
        description?.length > limit ? `${description.substring(0, limit)}...` : description;

    return (<p>{descriptionLimited}</p>);
}

export default TextLimit;
