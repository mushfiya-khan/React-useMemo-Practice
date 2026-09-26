import { useMemo, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)

  const multiply = useMemo(function multiply()
   {
    console.log("Multiplication involked");
    return add * 10;
  },
  [add]
);

  

  return (
    <>
      <button onClick={()=>setAdd(add+1)}>Click to add : {add}</button>
      <br />
      <hr />
      {multiply}
      <hr />
      <br />
      <button onClick={()=>setMinus(minus-1)}>Click to substract : {minus}</button>
    </>
  )
}

export default App
