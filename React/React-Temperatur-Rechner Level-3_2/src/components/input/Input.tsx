import "./Input.css"

interface InputProps{
    einheit: string,
    temp: number,
    setInput: (e:React.ChangeEvent<HTMLInputElement>)=> void;
}

const Input: React.FC<InputProps> = (props) => {
    return ( 
        <article className="input">
            <p>Schreibe die temperatur in {props.einheit}</p>
            <input type="number" onChange={props.setInput} value={props.temp} />
        </article>
     );
}
 
export default Input;