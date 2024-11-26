import PropTypes from "prop-types";

function Button({ label, backgroundColor = "red", size = "md", handleClick }) {
    let scale = 1;
    if (size === "sm") scale = 0.75;
    if (size === "lg") scale = 1.5;
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
        borderRadius: `0.5rem`,
        boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
        width: "fit-content",
        color: "black",
    };
    return (
        <div onClick={handleClick} style={style}>
            {label}
        </div>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    handleClick: PropTypes.func,
};

export default Button;
