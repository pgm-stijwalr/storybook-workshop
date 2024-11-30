/** @type { import('@storybook/react').Preview } */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import path from "path"; // Import the 'path' module

const preview = {
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: "ipad",
        },
        backgrounds: {
            values: [
                // 👇 Default values
                { name: "Dark", value: "#333" },
                { name: "Light", value: "#F7F9F2" },
                // 👇 Add your own
                { name: "Maroon", value: "#400" },
            ],
            // 👇 Specify which background is shown by default
            default: "Light",
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        addons: [
            {
                name: "@storybook/addon-storysource",
                options: {
                    rule: {
                        // test: [/\.stories\.jsx?$/], This is default
                        include: [
                            path.resolve(
                                __dirname,
                                "../src/stories/**/*.stories.js"
                            ),
                        ],
                    },
                    loaderOptions: {
                        prettierConfig: { printWidth: 80, singleQuote: false },
                    },
                },
            },
        ],
    },
};

export default preview;
