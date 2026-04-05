type Props = {
  maxScore: number
}

function ScoreBoard({ maxScore }: Props) {

  return (
    <h2>
      Puntaje máximo: {maxScore}
    </h2>
  )

}

export default ScoreBoard