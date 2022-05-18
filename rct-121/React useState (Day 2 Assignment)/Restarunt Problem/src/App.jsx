import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Product } from './componant/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Product/>
    </div>
  )
}

export default App
