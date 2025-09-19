import ArrowFallIcon from '@/assets/icons/main/ArrowFall.svg';
import ArrowRiseIcon from '@/assets/icons/main/ArrowRise.svg';
import './Card.css'
const Card = ({title,value,change,bgcolor}) => {

  const isPositive = parseFloat(change) > 0;  
  return (
    <>
      <div className="card gap-2" style={{ backgroundColor: `var(${bgcolor})` }}> 
        {/* Title */}
        <h3 className="title">{title}</h3>

        {/* Value + Change */}
        <div className="card-inline d-flex">
          <p className="">{value}</p>
          <div className='stats-inline'>
            {change}% 
            {isPositive ? (
              <img src={ArrowRiseIcon} alt="ArrowRiseIcon" />
            ) : (
              <img src={ArrowFallIcon} alt="ArrowFallIcon" />
            )}
            </div>
        </div>
      </div>
    </>
  )
}

export default Card