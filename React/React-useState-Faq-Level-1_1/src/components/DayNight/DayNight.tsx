import { useState } from "react";
import "./DayNight.css"

const DayNight = () => {
    const [heading, setHeading] = useState("Day");
    const [light, setLight] = useState(true);
    const [buttonText, setButtonText] = useState("Night");

    function toggleDayNight(){
        console.log(heading);
        console.log(light);
        console.log(buttonText);
        
        if (light === true){
            setHeading("Night");
            setLight(false);
            setButtonText("Day");
        }else{
            setHeading("Day");
            setLight(true);
            setButtonText("Night")
        }
    }
    return ( 
        <section className={`${light?"light":"dark"}`}>
            <h1>{heading}</h1>
            <button onClick={toggleDayNight}>Change to {buttonText}</button>
        </section>
     );
}
 
export default DayNight;