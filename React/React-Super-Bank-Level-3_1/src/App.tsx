import { useState } from 'react';
import './App.css'
import Bankaccount from './components/bankaccount/Bankaccount'
import Creditcard from './components/creditcard/Creditcard'

function App() {

    const [bank, setBank] = useState<number>(0);

  return (
    <>
      {bank > 0 ? (
        <Creditcard mood='blissful'/>
      ) : bank === 0 ? (
        <Creditcard mood='shocked' />
      ) : (
        <Creditcard mood="ko" />
      )
      } 
      <Bankaccount bank={bank} setBank={setBank}/>
    </>
  )
}

export default App
