import Avatar from '@mui/joy/Avatar';
import './AvatarName.css'
import { useDarkMode } from '../../../contexts/DarkModeContext';
const AvatarName = ({ name, img }) => {
  const { isDarkMode } = useDarkMode()
  return (
    <div className='AvatarName'>
      <div className={`contact-item ${isDarkMode ? 'dark-mode' : ''}`}>
        <Avatar className='contact-avatar' size="sm" alt={name} src={img} />
        <span className='contact-name'>{name}</span>
      </div>
    </div>
  );
}

export default AvatarName