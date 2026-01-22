
import './App.css'

function Button({
    children,
    onClick,
    style,
    type
}) {
  

  return (
    <>
      <button type={type} onClick={onClick} style={style}>{children}</button>
    </>
  )
}

export default Button