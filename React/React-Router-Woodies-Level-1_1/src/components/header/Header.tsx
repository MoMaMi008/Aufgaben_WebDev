import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div>
                <img src="../../../public/logo.svg" alt="Woodies Logo" />
                <h2>Woodies</h2>
            </div>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About Us</NavLink>
                <NavLink to={"/products"}>Products</NavLink>
            </nav>
        </header>
    );
};

export default Header;
