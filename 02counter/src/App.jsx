import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setcounter]=useState(15)
  // const counter=15 
  const addvalue=()=>{
    counter=counter+1
    setcounter(counter)
    console.log('clicked!',counter)
  }
  const removevalue=()=>{
    counter=counter-1 
    setcounter(counter)
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2> Counter value:{counter}</h2>

     <button  onClick={addvalue}> add value</button>
     <br/>
     <button  onClick={removevalue}> remove value</button>
    </>
  )
}

export default App
