import './App.css'
import { useState } from 'react'
import CookBody from './components/CookBody'
import Phrase from './data/Phrase.json'

function App() {
  
  const [index, setIndex] = useState(0)

  // cambiando frase dinamica como lo hicimos en clase
  // const randomNum = () =>{
  //   if(index < Phrase.length - 1){
  //     setIndex(index + 1)
  //   }else{
  //     setIndex(0)
  //   }
  // }

  // cambiando frase de manera aleatoria

  const randomPhrase = ()=>{
    let change = Math.floor(Math.random() * Phrase.length)
    setIndex(change)
  }

  return (
    <>
        <CookBody
        frase={Phrase[index]}/>

        <div className='divButtom'>
          <button className="clickButtom" onClick={randomPhrase}>Prueba tu Suerte</button>
        </div>
    </>
  )
}

export default App
