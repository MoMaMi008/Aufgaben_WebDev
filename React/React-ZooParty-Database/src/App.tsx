import './App.css'
import animals from './assets/data'
import AnimalCard from './components/AnimalCard/AnimalCard'

function App() {

  return (
    <section className='animalList'>
      {animals.map((animal)=>(
        <AnimalCard data={animal} />
      ))}
    </section>
  )
}

export default App
