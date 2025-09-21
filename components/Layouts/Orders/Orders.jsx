import React from "react";
import AddIcon from "@/assets/icons/main/AddIcon.svg";
import ArrowIncDec from "@/assets/icons/main/ArrowIncDec.svg";
import Filter from "@/assets/icons/main/Filter.svg";
import orders from "./ordersData";

import EachOrder from "./EachOrder";
import { useDarkMode } from '../../../contexts/DarkModeContext';
import './Orders.css';

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
  Paper,
} from "@mui/material";


export default function OrderList() {
  const { isDarkMode } = useDarkMode();
  
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
            <img src={ArrowIncDec} alt="Sort Order" />
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
            {orders.map((order) => (
              <EachOrder key={order.id} order={order} />
            ))}
            {/* <EachOrder */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
