import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <article>
                <div>
                    <img src="./public/logo.svg" alt="Woodies Logo" />
                    <h2>Woodies</h2>
                </div>
                <p>(012) 8967453</p>
                <p>woodies@gmail.com</p>
                <p>Jakarta, Indonesia</p>
            </article>
            <img src="./public/footer.png" alt="desk with chair" />
        </footer>
    );
};

export default Footer;
