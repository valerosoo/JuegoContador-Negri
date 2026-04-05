type Props = {
  startGame: () => void
  disabled: boolean
}

function StartButton({ startGame, disabled }: Props) {

  return (
    <button
      className="startButton"
      onClick={startGame}
      disabled={disabled}
    >
      Iniciar
    </button>
  )

}

export default StartButton