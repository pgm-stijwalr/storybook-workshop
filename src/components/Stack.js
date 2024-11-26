import PropTypes from "prop-types";

function Stack({
    numberOfChildren = 0,
    spacing = 2,
    direction = "row",
    wrap = false,
}) {
    const style = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexDirection: direction,
    };

    const childrenArray = [...Array(numberOfChildren).keys()].map((n) => (
        <div
            key={n}
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {n + 1}
        </div>
    ));

    return <div style={style}>{childrenArray}</div>;
}

Stack.propTypes = {
    spacing: PropTypes.number,
    wrap: PropTypes.bool,
    direction: PropTypes.oneOf(["row", "column"]),
    numberOfChildren: PropTypes.number,
};

export default Stack;
