import "./output.css";
import Button from "./components/Button";
import Stack from "./components/Stack";

function App() {
    const cardSM = {
        backgroundColor: "#ffffff",
        label: "Press Me",
        size: "sm",
    };

    const cardMD = {
        backgroundColor: "#ffffff",
        label: "Press Me",
        size: "md",
    };
    const cardLG = {
        backgroundColor: "#ffffff",
        label: "Press Me",
        size: "lg",
    };

    const stackH = {
        spacing: 2,
        wrap: false,
        direction: "row",
        numberOfChildren: 4,
    };
    const stackV = {
        spacing: 2,
        wrap: false,
        direction: "column",
        numberOfChildren: 4,
    };
    return (
        <main className="bg-gray-800 text-gray-300 p-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold ">
                    Welcome to the storybook tutorial!
                </h1>
                <p>
                    This is a simple example of how to use storybook to document
                    your components.
                </p>
            </div>
            <div className="flex gap-2 flex-wrap card-list mt-5">
                <div>
                    <h2 className="text-2xl font-semibold">Buttons</h2>
                    <h3 className="text-xl">Small</h3>
                    <Button {...cardSM} />
                    <h3>Medium</h3>
                    <Button {...cardMD} />
                    <h3>Large</h3>
                    <Button {...cardLG} />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">Cards</h2>
                    <h3 className="text-xl">Horizontal Stack</h3>
                    <Stack {...stackH} />
                    <h3 className="text-xl">Vertical Stack</h3>
                    <Stack {...stackV} />
                </div>
            </div>
        </main>
    );
}

export default App;
