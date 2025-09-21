import React from 'react'
import { useState } from 'react';
import AddIcon from "@/assets/icons/main/AddIcon.svg";
import ArrowIncDec from "@/assets/icons/main/ArrowIncDec.svg";
import Filter from "@/assets/icons/main/Filter.svg";
import ordersData from "./ordersData";
// console.log(orders);
import { Search } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Paper,
} from "@mui/material";
import EachOrder from './EachOrder';
// import orders from './ordersData';

function SortOrder({toggleSort}){
    return (
      <img
        src={ArrowIncDec}
        alt="Sort Order"
        onClick={toggleSort}
        style={{ cursor: "pointer" }}
      />
    );
}
// let orders = orders;

function Orderslist() {
    const [orders, setOrders] = useState(ordersData);
    const [sortAsc, setSortAsc] = useState(true);

    const toggleSort = () => {
      const sortedOrders = [...orders].sort((a, b) => {
        if (sortAsc) {
          return a.user.localeCompare(b.user);
        } else {
          return b.user.localeCompare(a.user); 
        }
      });
      console.log(sortAsc, orders);
      setOrders(sortedOrders);
      setSortAsc(!sortAsc);
    };

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
            <SortOrder toggleSort={toggleSort} /> 
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
            {orders.map((order, index) => {
              return <EachOrder key={index} order={order} />; } 
            )}
            {/* <EachOrder */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Orderslist




