import {
  TableCell,
  TableRow,
  Avatar,
  Chip
} from "@mui/material";

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
    return (
        <TableRow key={id}>
        <TableCell>{id}</TableCell>
        <TableCell>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar src={avatar} />
            {user}
            </div>
        </TableCell>
        <TableCell>{project}</TableCell>
        <TableCell>{address}</TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>
            <Chip label={status} color={statusColor[status]} variant="outlined" />
        </TableCell>
        </TableRow>
    );
}
