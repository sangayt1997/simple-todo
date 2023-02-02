import React from "react";
import { Button, ThemeProvider } from "@material-tailwind/react";

function App() {
    return (
        <React.StrictMode>
            <ThemeProvider>
                <div className="flex justify-center items-center flex-col h-screen">
                    <p>Simple Todo app in react</p>
                    <p className="text-3xl font-bold underline">
                        Hello world!
                    </p>
                    <Button>Button</Button>
                </div>
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default App;
