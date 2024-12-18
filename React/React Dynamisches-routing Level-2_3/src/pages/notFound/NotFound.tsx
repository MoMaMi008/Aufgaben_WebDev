import { Link } from "react-router-dom";
import "./NotFound.css";
import "./NotFound.css";

const NotFound = () => {
    return (
        <section className="notFound">
            <p>Issue 404 - Page not Found!</p>
            <Link to={"/"}>Back to Home</Link>
        </section>
    );
};

export default NotFound;
