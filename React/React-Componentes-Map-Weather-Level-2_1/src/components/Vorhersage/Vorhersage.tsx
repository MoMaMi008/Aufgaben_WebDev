import { data } from "../../assets/data";
import AnzeigeTag from "../AnzeigeTag/AnzeigeTag";
import "./Vorhersage.css"

const Vorhersage = () => {
    return ( 
        <section className="vorhersage">
            {data.map((tag, index)=>(
                <AnzeigeTag data={tag} key={index} />
            ))}
        </section>
     );
}
 
export default Vorhersage;