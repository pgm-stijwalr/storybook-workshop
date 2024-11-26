import Card from "../components/Card";

export default {
    title: "Components/Card",
    component: Card,
    argTypes: { handleClick: { action: "handleClick" } },
};

export const CardStory = {
    args: {
        backgroundColor: "#ffffff",
        title: "Title",
        description: "Description",
        filter: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
        image: "https://via.placeholder.com/150",
    },
};
