import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
    return (
        <div className="relative overflow-x-hidden min-h-screen w-screen">
            <Hero />
            <About />
        </div>
    );
};

export default App;
