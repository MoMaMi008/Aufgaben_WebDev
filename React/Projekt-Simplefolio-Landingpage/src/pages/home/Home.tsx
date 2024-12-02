import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Intro from "../../components/introduction/Into";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills"

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </> 
     );
}
 
export default Home;