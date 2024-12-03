import "./Productcards.css"
interface ProductcardProps {
    imgUrl: string,
    name:string,
    price: number
}
 
const Productcard: React.FC<ProductcardProps> = (props) => {
    return ( 
        <article className="card">
            <img src={props.imgUrl} alt="product picture" />
            <p>{props.name}</p>
            <p>${props.price}</p>
            <button>BUY NOW</button>
        </article>
     );
}
 
export default Productcard;