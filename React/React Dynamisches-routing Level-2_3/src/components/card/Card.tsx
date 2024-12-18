import { Link } from "react-router-dom";
import "./Card.css";

interface CardProps {
    carModel?: string;
    CarMake: string;
    CarYear?: number;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <>
            {props.CarYear && props.carModel ? (
                <article className="card">
                    <h2>{props.carModel}</h2>
                    <p>{props.CarMake}</p>
                    <p>{props.CarYear}</p>
                </article>
            ) : (
                <article className="card">
                    <h2>{props.CarMake}</h2>
                    <Link to={props.CarMake.toLowerCase()}>Read More</Link>
                </article>
            )}
        </>
    );
};

export default Card;
