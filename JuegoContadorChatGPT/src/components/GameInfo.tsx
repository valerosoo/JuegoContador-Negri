type Props = {
  timeLeft: number
  count: number
}

function GameInfo({ timeLeft, count }: Props) {

  return (
    <>
      <h2>Tiempo restante: {timeLeft}s</h2>
      <h2>Clicks: {count}</h2>
    </>
  )

}

export default GameInfo