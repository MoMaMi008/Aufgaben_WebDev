import { IWeatherData } from "../../assets/data";
import "./AnzeigeTag.css"

interface AnzeigeTagProps {
   data:IWeatherData,
}
 
const AnzeigeTag: React.FC<AnzeigeTagProps> = (props) => {
    return ( 
        <article className="anzeigeTag">
            <h2>{props.data.day}</h2>
            <img src={props.data.icon} alt="weather icon" />
            <div>
                <p>{props.data.tempMin}°C / {props.data.tempMax}°C</p>
                <p>Regen: {props.data.rain}%</p>
            </div>
        </article>
     );
}
 
export default AnzeigeTag;