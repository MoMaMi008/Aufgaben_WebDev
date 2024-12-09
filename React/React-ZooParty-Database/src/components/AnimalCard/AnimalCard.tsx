import { Animal } from "../../assets/data";
import "./AnimalCard.css"

interface animalCardProps{
    data: Animal
}

 
const AnimalCard: React.FC<animalCardProps> = (props) => {
    return ( 
        <article className="animalCard">
            <div className="upperPart">
                <p className="emoji">{props.data.emoji}</p>
                <h2>{props.data.name}</h2>
                <p>{props.data.species}</p>
                <p>{props.data.habitat}</p>
                <p>{props.data.diet}</p>
                <p>{props.data.lifespan} years</p>
            </div>
            <ul>
                {
                    props.data.funFacts.map((fact)=>(
                        <li>{fact}</li>
                    ))
                }
            </ul>
        </article>
     );
}
 
export default AnimalCard;