function BotonClickear({ sumarClick, disabled }: { sumarClick: () => void, disabled: boolean }) {
  return (
    <button onClick={sumarClick} disabled={disabled}>
      Clickear
    </button>
  )
}

export default BotonClickear