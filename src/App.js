import "./output.css";
import Button from "./components/Button";
import Card from "./components/Card";
import games from "./data/games.json";

function App() {
    const buttonSM = {
        backgroundColor: "#ffffff",
        label: "Press Me",
        size: "sm",
    };

    const buttonMD = {
        backgroundColor: "#ffffff",
        label: "Press Me",
        size: "md",
    };
    const buttonLG = {
        backgroundColor: "#ffffff",
        label: "Press Me",
        size: "lg",
    };

    const card = {
        title: "Card Title",
        description: "This is a card description",
        backgroundColor: "#ffffff",
        handleClick: () => alert("You clicked me!"),
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
            <div className=" mt-5">
                <div className="flex gap-2">
                    <div>
                        <h2 className="text-2xl font-semibold">Buttons</h2>
                        <h3 className="text-xl">Small</h3>
                        <Button {...buttonSM} />
                        <h3>Medium</h3>
                        <Button {...buttonMD} />
                        <h3>Large</h3>
                        <Button {...buttonLG} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Cards</h2>
                        <Card {...card} />
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-2xl font-semibold">
                        Card render with Data
                    </h2>
                    <div className="flex gap-2">
                        {games.map((game, index) => (
                            <Card
                                key={index}
                                title={game.title}
                                description={game.description}
                                backgroundColor="#ffffff"
                                image={game.image}
                                handleClick={() =>
                                    alert(`You clicked on ${game.title}`)
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
