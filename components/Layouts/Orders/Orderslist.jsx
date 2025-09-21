import React from 'react'
import { useState } from 'react';
import AddIcon from "@/assets/icons/main/AddIcon.svg";
import ArrowIncDec from "@/assets/icons/main/ArrowIncDec.svg";
import Filter from "@/assets/icons/main/Filter.svg";
import ordersData from "./ordersData";
// console.log(orders);
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material";
import EachOrder from './EachOrder';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import './Orders.css';
// import orders from './ordersData';

function SortOrder({toggleSort}){
    return (
      <img
        src={ArrowIncDec}
        alt="Sort Order"
        onClick={toggleSort}
        className="orders-sort-icon"
      />
    );
}
// let orders = orders;

function Orderslist() {
    const [orders, setOrders] = useState(ordersData);
    const [sortAsc, setSortAsc] = useState(true);
    const { isDarkMode } = useDarkMode();

    const toggleSort = () => {
      const sortedOrders = [...orders].sort((a, b) => {
        if (sortAsc) {
          return a.user.localeCompare(b.user);
        } else {
          return b.user.localeCompare(a.user); 
        }
      });
      // console.log(sortAsc, orders);
      setOrders(sortedOrders);
      setSortAsc(!sortAsc);
    };

  return (
    <Paper 
      sx={{ p: 2 }} 
      className={`orders-paper ${isDarkMode ? 'dark-mode' : ''}`}
    >
      {/* Top controls */}
      <div className="orders-controls">
        <div className="orders-controls-left">
          <IconButton className="orders-icon-button">
            <img src={AddIcon} alt="Add Icon" />
          </IconButton>
          <IconButton className="orders-icon-button">
            <img src={Filter} alt="Filter" />
          </IconButton>
          <IconButton className="orders-icon-button">
            <SortOrder toggleSort={toggleSort} /> 
          </IconButton>
        </div>
        <div className="orders-controls-right">
          <input
            type="text"
            placeholder="Search"
            className="orders-search-field"
          />
        </div>
      </div>

      {/* Table */}
      <TableContainer className="orders-table-container">
        <Table className="orders-table">
          <TableHead className="orders-table-head">
            <TableRow className="orders-table-row">
              <TableCell className="orders-table-head-cell">Order ID</TableCell>
              <TableCell className="orders-table-head-cell">User</TableCell>
              <TableCell className="orders-table-head-cell">Project</TableCell>
              <TableCell className="orders-table-head-cell">Address</TableCell>
              <TableCell className="orders-table-head-cell">Date</TableCell>
              <TableCell className="orders-table-head-cell">Status</TableCell>
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




