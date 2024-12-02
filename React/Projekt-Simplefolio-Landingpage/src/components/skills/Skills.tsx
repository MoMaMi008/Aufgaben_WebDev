import Button from "../button/Button";
import "./skills.css"

const Skills = () => {
    return ( 
        <section className="skills">
            <h2>SKILLS</h2>
            <article>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>SASS</p>
                <p>Tailwind CSS</p>
                <p>Git</p>
                <p>UX/UI</p>
            </article>
            <Button text="resume" />
        </section>
     );
}
 
export default Skills;