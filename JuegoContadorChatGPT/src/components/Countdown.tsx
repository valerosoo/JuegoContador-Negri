type Props = {
  text: string
}

function Countdown({ text }: Props) {

  return (
    <h2 className="countdown">
      {text}
    </h2>
  )

}

export default Countdown