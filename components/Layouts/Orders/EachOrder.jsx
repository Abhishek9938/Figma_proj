import {
  TableCell,
  TableRow,
  Avatar,
  Chip
} from "@mui/material";
import { useDarkMode } from '../../../contexts/DarkModeContext';
import './Orders.css';

const statusColor = {
  "In Progress": "primary",
  Complete: "success",
  Pending: "info",
  Approved: "warning",
  Rejected: "error",
};

export default function EachOrder({ order }) {
    // console.log(order);
    const {id, avatar, user, project, address, date, status } = order;
    const { isDarkMode } = useDarkMode();
    
    return (
        <TableRow 
          key={id} 
          className={`orders-table-row ${isDarkMode ? 'dark-mode' : ''}`}
        >
        <TableCell className={`orders-table-cell ${isDarkMode ? 'dark-mode' : ''}`}>
          {id}
        </TableCell>
        <TableCell className={`orders-table-cell ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="orders-user-cell">
            <Avatar src={avatar} />
            {user}
            </div>
        </TableCell>
        <TableCell className={`orders-table-cell ${isDarkMode ? 'dark-mode' : ''}`}>
          {project}
        </TableCell>
        <TableCell className={`orders-table-cell ${isDarkMode ? 'dark-mode' : ''}`}>
          {address}
        </TableCell>
        <TableCell className={`orders-table-cell ${isDarkMode ? 'dark-mode' : ''}`}>
          {date}
        </TableCell>
        <TableCell className={`orders-table-cell ${isDarkMode ? 'dark-mode' : ''}`}>
            <Chip label={status} color={statusColor[status]} variant="outlined" />
        </TableCell>
        </TableRow>
    );
}
