import "./intro.css"
import Button from '../button/Button';

const Intro = () => {
    return ( 
        <>
            <section className="intro">
                <h1>Hi, I am <span>Moritz Reinhold</span></h1>
                <h3>A Front End Developer.</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at eaque quos beatae quaerat aliquam, laborum fuga, voluptate ut necessitatibus sequi dolorem iure voluptatibus asperiores, alias minima et repudiandae esse eligendi suscipit unde. Eligendi numquam praesentium pariatur laudantium quam, unde ipsam ducimus distinctio quidem consequuntur sed, dignissimos, rerum laborum officiis.</p>
                <Button text="resume" />
            </section>
        </>
     );
}
 
export default Intro;