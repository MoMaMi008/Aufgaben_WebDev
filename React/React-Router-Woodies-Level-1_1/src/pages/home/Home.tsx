import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/about");
    };

    return (
        <>
            <Header />

            <main className="home">
                <section>
                    <article>
                        <p>
                            Are you looking for <span>woodden furniture</span> for your place?
                        </p>
                        <p>
                            This is the
                            <br />
                            Right Place
                        </p>
                        <button onClick={handleButtonClick}>Explore Categories</button>
                    </article>
                    <article>
                        <img className="home-img" src="../../../public/table-home.png" alt="picture of table" />
                    </article>
                </section>
                <div className="background"></div>
            </main>
        </>
    );
};

export default Home;
