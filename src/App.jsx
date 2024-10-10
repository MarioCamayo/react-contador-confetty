import { useEffect, useState } from 'react'
import Button from './components/Button'
import './App.css'
import './Button.css'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('Counter App') // Estado para el título


  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  // useEffect para cambiar el título cuando el contador llegue a 10
  useEffect(() => {
    if (count === 10) {
      setTitle('Bienvenido a Inglaterra')
    } else {
      setTitle('Counter App') // Restablecer el título si no está en 10
    }
  }, [count]) // Ejecutar efecto cada vez que 'count' cambie


  return (
    <div className="container">
      <h1>{title}</h1> {/* Mostrar el título dinámico */}
      {/* <h1>Counter App</h1> */}
      <div className="counter-display">
        <span>{count}</span>
      </div>
      <div className="button-container">
        <Button onClick={increment}>Incrementar</Button>
        <Button onClick={reset} className="reset-button">Reset</Button>
        <Button onClick={decrement}>Decrementar</Button>
      </div>
    </div>
  )
}

export default App