import './IconButton.css'
function IconButton({icon,name}) {
  return (
    <>
    <div className='IconButton'>
      {icon ? (
        <button className="icon-button">
          <img src={icon} alt={name} />
        </button>
      ) : (
        <button className={name}>{name}</button>
      )}
      </div>
    </>

  )
}

export default IconButton