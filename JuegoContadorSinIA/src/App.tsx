import { useState } from 'react'
import BotonInicio from './components/boton_inicio'
import BotonClickear from './components/boton_clickear'
import './App.css'

function App() {

  const [mensaje, setMensaje] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [contador, setContador] = useState(0)
  const [puedeClickear, setPuedeClickear] = useState(false)
  const [maximo, setMaximo] = useState(0)

  const iniciar = () => {

    setMaximo(m => Math.max(m, contador))
    setContador(0)
    setDisabled(true)
    setMensaje("Preparados")

    setTimeout(() => {
      setMensaje("Listos")

      setTimeout(() => {
        setMensaje("Ya!")
        setPuedeClickear(true)

        setTimeout(() => {
          setDisabled(false)
          setPuedeClickear(false)

        }, 5000)

      }, 1000)

    }, 1000)
  }

  const sumarClick = () => {
    setContador(c => c + 1)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , justifyContent: 'center', height: '100vh' }}>
      <h1>Juego del Contador</h1>
      <BotonInicio iniciar={iniciar} disabled={disabled} />
      <h1>{mensaje}</h1>
      <h2>Contador: {contador}</h2>
      <BotonClickear sumarClick={sumarClick}  disabled={!puedeClickear} />
      <h2>Máximo: {maximo}</h2>
    </div>
  )
}

export default App