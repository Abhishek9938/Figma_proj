
function IconButton({icon,name}) {
  return (
    <button className={name}>{icon?<img src={icon} alt={name} />:<div>{name}</div>}</button>
  )
}

export default IconButton