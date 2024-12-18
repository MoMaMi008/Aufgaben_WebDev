import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import { ICarData } from "../../interfaces/ICarData";
import Header from "../../components/header/Header";
import NotFound from "../notFound/NotFound";

interface BrandOverviewProps {
    data: ICarData[];
}

const BrandOverview: React.FC<BrandOverviewProps> = (props) => {
    const params = useParams<{ brand: string }>();
    const setOfCarMakes = new Set(props.data.map((car) => car.CarMake.toLowerCase()));
    const uniqueCarMakes = Array.from(setOfCarMakes);

    return (
        <>
            <Header />
            {uniqueCarMakes.includes(params.brand!) ? (
                <>
                    <p className="heading">Model List</p>
                    <section className="grid">
                        {props.data
                            .filter((car) => car.CarMake.toLowerCase() === params.brand?.toLowerCase())
                            .map((filteredCars, index) => (
                                <Card key={index} CarMake={filteredCars.CarMake} carModel={filteredCars.carModel} CarYear={filteredCars.CarYear} />
                            ))}
                    </section>
                </>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default BrandOverview;
