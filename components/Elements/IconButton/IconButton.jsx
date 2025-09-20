import './IconButton.css'
function IconButton({icon,name}) {
  return (
    <>
      {icon ? (
        <button className="icon-button">
          <img src={icon} alt={name} />
        </button>
      ) : (
        <button className={name}>{name}</button>
      )}
    </>
  )
}

export default IconButton