import { useState } from "react";
import "./Faq.css"

const FAQ = () => {
    const [open, setOpen] = useState(false);

    function toggleOpen(){
        setOpen(!open)
        console.log(open);
        
    }

    return ( 
        <article className="faq">
            <div>
                <p>Warum ist Raect toll?</p>
                <button onClick={toggleOpen}>open</button>
            </div>
            <p className={`${open ? "close":"open"}`}>Weil es eine steile Lernkurve hat.</p>
        </article>
     );
}
 
export default FAQ;