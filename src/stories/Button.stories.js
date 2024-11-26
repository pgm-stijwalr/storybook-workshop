import Button from "../components/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } },
};

// Each story now directly exports an object with args in CSF3 syntax
export const Card = {
    args: {
        backgroundColor: "#ffffff",
        label: "Press Me",
        size: "md",
    },
};

export const Green = {
    args: {
        backgroundColor: "green",
        label: "Press Me",
        size: "md",
    },
};

export const Small = {
    args: {
        backgroundColor: "red",
        label: "Press Me",
        size: "sm",
    },
};

export const Large = {
    args: {
        backgroundColor: "red",
        label: "Press Me",
        size: "lg",
    },
};

export const LongLabel = {
    args: {
        backgroundColor: "red",
        label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
        size: "md",
    },
};
