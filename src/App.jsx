import { useState, useEffect } from 'react'
import Button from './components/Button'
import Confetti from 'react-confetti'
import './App.css'
import './Button.css'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('Counter App') // Estado para el título
  const [showConfetti, setShowConfetti] = useState(false)


  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => {
    setCount(0)
    setShowConfetti(false) // Ocultar confetti cuando se resetea

  } 

  // useEffect para cambiar el título cuando el contador llegue a 10
  useEffect(() => {
    if (count === 10) {
      setTitle('Bienvenido a Inglaterra')
      setShowConfetti(true)

    } else {
      setTitle('Counter App') // Restablecer el título si no está en 10
      setShowConfetti(false)

    }
  }, [count]) // Ejecutar efecto cada vez que 'count' cambie


  return (
    <div className="container">
       {/* El componente Confetti está siempre presente pero invisible si no está activo */}
       <div style={{ visibility: showConfetti ? 'visible' : 'hidden' }}>
        <Confetti />
      </div>
      {/* {showConfetti && <Confetti />}  */}
      {/* Mostrar confetti si el contador es 10 */}
      <h1>{title}</h1> {/* Mostrar el título dinámico */}
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