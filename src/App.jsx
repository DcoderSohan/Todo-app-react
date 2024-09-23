import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Todo />
    </>
  )
}

export default App
