import React from "react";
import AddIcon from "@/assets/icons/main/AddIcon.svg";
import ArrowIncDec from "@/assets/icons/main/ArrowIncDec.svg";
import Filter from "@/assets/icons/main/Filter.svg";
import orders from "./ordersData";
import { Search } from "@mui/icons-material";

import EachOrder from "./EachOrder";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  IconButton,
  TextField,
  Paper,
} from "@mui/material";


export default function OrderList() {
  return (
    <Paper sx={{ p: 2 }}>
      {/* Top controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div>
          <IconButton>
            <img src={AddIcon} alt="Add Icon" />
          </IconButton>
          <IconButton>
            <img src={Filter} alt="Filter" />
          </IconButton>
          <IconButton>
            <img src={ArrowIncDec} alt="Sort Order" />
          </IconButton>
        </div>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          InputProps={{
            startAdornment: <Search sx={{ color: "gray", marginRight: 1 }} />,
          }}
        />
      </div>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <EachOrder porps={order} />
            ))}
            {/* <EachOrder */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
