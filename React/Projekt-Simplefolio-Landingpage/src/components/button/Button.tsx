import "./button.css"

const Button:React.FC<{text:string}> = ({text}) => {
    return ( 
        <button>{text}</button>
     );
}
 
export default Button;