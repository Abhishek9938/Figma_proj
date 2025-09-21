import './IconButton.css'
function IconButton({icon, name, onClick}) {
  return (
    <>
    <div className='IconButton'>
      {icon ? (
        <button className="icon-button" onClick={onClick}>
          <img src={icon} alt={name} />
        </button>
      ) : (
        <button className={name} onClick={onClick}>{name}</button>
      )}
      </div>
    </>

  )
}

export default IconButton