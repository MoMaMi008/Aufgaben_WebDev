import "./button.css"

const Button:React.FC<{text:string}> = (props) => {
    return ( 
        <button>{props.text}</button>
     );
}

// interface ItemProps{
//     text: string
// }

// const Button:React.FC<ItemProps> = (pizza) => {
//     return ( 
//         <button>{pizza.text}</button>
//      );
// }
 
export default Button;

