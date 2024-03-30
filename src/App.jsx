import React from "react";
import Home from "./components/Home";
import PhoneSvg from "./assets/phone.svg";

function App() {
    return (
        <div>
            <div className="app">
                <img src={PhoneSvg} alt="dou" />
                <p> coucou les gens !!</p>
            </div>
            <Home />
        </div>
    );
}

export default App;
