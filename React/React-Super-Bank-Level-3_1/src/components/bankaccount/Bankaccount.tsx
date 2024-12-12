import { useState } from "react";
import "./Bankaccount.css"

interface BankaccountProps{
    bank:number,
    setBank:React.Dispatch<React.SetStateAction<number>>
}

const Bankaccount:React.FC<BankaccountProps> = (props) => {

    const [inputValue, setInputValue] = useState<number>(0);

    function handleInput(e:React.ChangeEvent<HTMLInputElement>){
        setInputValue(Number(e.target.value))
    }

    function handlePlus(){
        props.setBank(props.bank+inputValue);
        setInputValue(0)
    }

    function handleMinus(){
        props.setBank(props.bank-inputValue);
        setInputValue(0)
    }

    return (
        <section className="bankaccount">
            <h2>Super Bank</h2>
            <article>
                <p>Dein Bankguthaben:</p>
                <p className="balance">{props.bank} €</p>
                <input type="number" placeholder="Gib einen Geldbetrag ein..." value={inputValue} onChange={handleInput}/>
                <div>
                    <button onClick={handlePlus}>Einzahlen</button>
                    <button onClick={handleMinus}>Auszahlen</button>
                </div>
            </article>
        </section> 

     );
}
 
export default Bankaccount;