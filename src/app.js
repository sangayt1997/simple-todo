import React from "react";
import { Button, ThemeProvider } from "@material-tailwind/react";
import { theme } from "./theme";

function App() {
    return (
        <React.StrictMode>
            <ThemeProvider value={theme}>
                <div className="flex justify-center items-center flex-col h-screen">
                    <p>Simple Todo app in react</p>
                    <p className="text-3xl font-bold underline">
                        Hello world!
                    </p>
                    <Button color="sky-500">Button</Button>
                    <Button variant="outlined">outlined</Button>
                </div>
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default App;
