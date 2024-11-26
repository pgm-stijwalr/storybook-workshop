import PropTypes from "prop-types";

function Card({ title, backgroundColor = "red", handleClick, description }) {
    const style = {
        backgroundColor,
        padding: `1rem`,
        border: "none",
        borderRadius: `0.5rem`,
        filter: `drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))`, // box-shadow
        width: "10rem",
        height: "10rem",
        color: "black",
        cursor: "pointer",
    };
    return (
        <div onClick={handleClick} style={style}>
            <h1 className="font-bold">{title}</h1>
            <p className="italic">{description}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    backgroundColor: PropTypes.string,
    handleClick: PropTypes.func,
    filter: PropTypes.string,
};

export default Card;
