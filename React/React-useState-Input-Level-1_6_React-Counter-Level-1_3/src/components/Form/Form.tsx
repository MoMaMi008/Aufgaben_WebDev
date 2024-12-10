import { useState } from "react";

const Form = () => {
    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [email, setEmail] = useState("");

    function changeVorname(event:React.ChangeEvent<HTMLInputElement>){
        setVorname(event.target.value)
    }

    function changeNachname(event:React.ChangeEvent<HTMLInputElement>){
        setNachname(event.target.value)
    }

    function changeEmail(event:React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    return ( 
        <section>
            <input type="text" onChange={changeVorname} value={vorname} placeholder="vorname"/>
            <input type="text" onChange={changeNachname} value={nachname} placeholder="nachname"/>
            <input type="text" onChange={changeEmail} value={email} placeholder="e-mail"/>
            <p>Vorname: {vorname}</p>
            <p>Nachname: {nachname}</p>
            <p>E-Mail: {email}</p>
        </section>
     );
}
 
export default Form;