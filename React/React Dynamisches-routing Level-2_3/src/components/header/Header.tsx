import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Super Carlist</h1>
            <Link to={"/"}>Home</Link>
        </header>
    );
};

export default Header;
