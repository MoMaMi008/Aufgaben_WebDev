import TRating from "./TRating";

type TProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: TRating;
};

export default TProduct;