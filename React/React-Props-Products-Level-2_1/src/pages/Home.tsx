import "./Home.css"
import Productcard from "../components/productcard/Productcard";


const Home = () => {
    return (
        <section>
            <Productcard imgUrl=".\public\images\lotion.jpg" name="cocooil" price={30} />
            <Productcard imgUrl=".\public\images\camera.jpg" name="camera" price={50} />
            <Productcard imgUrl=".\public\images\shampo.jpg" name="shampoo" price={20} />
        </section>
     );
}
 
export default Home;