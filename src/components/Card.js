import PropTypes from "prop-types";

function Card({
    title,
    backgroundColor = "red",
    handleClick,
    image,
    description,
}) {
    const style = {
        backgroundColor,
        border: "none",
        borderRadius: `0.5rem`,
        filter: `drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))`, // box-shadow
        width: "fit-content",
        color: "black",
        cursor: "pointer",
    };
    return (
        <div onClick={handleClick} style={style}>
            <img src={image} alt={title} />
            <div className="p-2">
                <h1 className="font-bold">{title}</h1>
                <p className="italic">{description}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    backgroundColor: PropTypes.string,
    handleClick: PropTypes.func,
    filter: PropTypes.string,
    image: PropTypes.string,
};

export default Card;
