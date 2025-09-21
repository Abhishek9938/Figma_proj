import './TableRow.css'
import { useDarkMode } from '../../../contexts/DarkModeContext';
function TableRow({fullname,price,quantity,amount}) {
  const { isDarkMode } = useDarkMode();
  return ( 
     
      <tr style={{fontSize:"1em"}} className={`TableRow ${isDarkMode ? 'dark-mode' : ''}`}>
        <td>{fullname}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>${amount}</td>
      </tr>
  );
}

export default TableRow