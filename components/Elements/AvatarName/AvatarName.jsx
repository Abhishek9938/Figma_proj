import Avatar from '@mui/joy/Avatar';
import { COLORS } from '../../../styles/colors';
import './AvatarName.css'

const AvatarName = ({ name, img }) => {
  return (
    <div className='contact-item'>
      <Avatar className='contact-avatar' size="sm" alt={name} src={img} />
      <span className='contact-name' style={{color:`var(${COLORS.BLACK100})`}}>{name}</span>
    </div>
  );
}

export default AvatarName