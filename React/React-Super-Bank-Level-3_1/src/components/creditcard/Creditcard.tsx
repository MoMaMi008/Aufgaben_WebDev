import { CreditCard } from "react-kawaii";
import "./Creditcard.css"

interface CreditcardProps{
    mood: "sad"| "shocked"| "happy"| "blissful"| "lovestruck"| "excited"| "ko"
}

const Creditcard:React.FC<CreditcardProps> = (props) => {
    return ( 
        <div className="creditcard">
            <CreditCard size={200} mood={props.mood} color="#add2ff" />
        </div>
     );
}
 
export default Creditcard;