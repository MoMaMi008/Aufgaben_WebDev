import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { ICarData } from "../../interfaces/ICarData";
import "./Home.css";

interface HomeProps {
    data: ICarData[];
}

const Home: React.FC<HomeProps> = (props) => {
    const setOfCarMakes = new Set(props.data.map((car) => car.CarMake));
    const uniqueCarMakes = Array.from(setOfCarMakes);

    return (
        <>
            <Header />
            <p className="heading">Brand List</p>
            <section className="grid">
                {uniqueCarMakes.map((carMake, index) => (
                    <Card key={index} CarMake={carMake} />
                ))}
            </section>
        </>
    );
};

export default Home;
