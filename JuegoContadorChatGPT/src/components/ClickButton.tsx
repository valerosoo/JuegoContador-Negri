type Props = {
  handleClick: () => void
  disabled: boolean
}

function ClickButton({ handleClick, disabled }: Props) {

  return (
    <button
      className="clickButton"
      onClick={handleClick}
      disabled={disabled}
    >
      CLICK
    </button>
  )

}

export default ClickButton