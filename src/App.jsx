import React from 'react';
import Home from './components/Home';
import PhoneSvg from "./assets/phone.svg";
import "./app.css";


function App() {
   
    return(
        <div>  
            <div>
                <img src={PhoneSvg} alt="dou" />
                <p> coucou les gens !!</p>
            </div>         
            <Home />
        </div>
    )
    
}

export default App;
