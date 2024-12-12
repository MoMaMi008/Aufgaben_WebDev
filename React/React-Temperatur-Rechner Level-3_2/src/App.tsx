import { useState } from 'react'
import './App.css'
import Input from './components/input/Input';

function App() {

  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(32);

  function handleInputCelsius(e:React.ChangeEvent<HTMLInputElement>){
    const newCelsius = Number(e.target.value);
    setCelsius(newCelsius)
    setFahrenheit((newCelsius*9/5)+32)
  }
  
  function handleInputFahrenheit(e:React.ChangeEvent<HTMLInputElement>){
    const newFahrenheit = Number(e.target.value)
    setFahrenheit(newFahrenheit)
    setCelsius((newFahrenheit-32)*5/9)
  }
  return (
    <section className='app'>
      <Input einheit="Celsius" setInput={handleInputCelsius} temp={celsius}/>
      <Input einheit="Fahrenheit" setInput={handleInputFahrenheit} temp={fahrenheit}/>
      <p>Das Wasser {celsius >= 100 ? "kocht." : "kocht nicht."}</p>
    </section>
  )
}

export default App
