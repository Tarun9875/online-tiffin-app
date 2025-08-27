// src/features/admin/Dashboard/RecentOrders.js
import React from "react";
import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const RecentOrders = () => {
  // static example data
  const orders = [
    { id: "ORD001", customer: "Asha", total: "₹150", status: "Delivered" },
    { id: "ORD002", customer: "Rohit", total: "₹200", status: "Preparing" },
    { id: "ORD003", customer: "Priya", total: "₹120", status: "Out for delivery" },
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Recent Orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((o) => (
            <TableRow key={o.id}>
              <TableCell>{o.id}</TableCell>
              <TableCell>{o.customer}</TableCell>
              <TableCell>{o.total}</TableCell>
              <TableCell>{o.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default RecentOrders;
