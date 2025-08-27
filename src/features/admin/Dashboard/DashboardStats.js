// src/features/admin/Dashboard/DashboardStats.js
import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptIcon from "@mui/icons-material/Receipt";

const StatCard = ({ icon, label, value }) => (
  <Card sx={{ display: "flex", alignItems: "center", p: 1 }}>
    <CardContent sx={{ flex: 1 }}>
      <Typography variant="h6">{label}</Typography>
      <Typography variant="h4">{value}</Typography>
    </CardContent>
    <div style={{ padding: 16 }}>{icon}</div>
  </Card>
);

const DashboardStats = () => {
  // static placeholders — replace with real API data later
  const stats = [
    { label: "Customers", value: 124, icon: <PeopleIcon fontSize="large" /> },
    { label: "Tiffins", value: 32, icon: <FastfoodIcon fontSize="large" /> },
    { label: "Categories", value: 8, icon: <CategoryIcon fontSize="large" /> },
    { label: "Orders (today)", value: 14, icon: <ReceiptIcon fontSize="large" /> },
  ];

  return (
    <Grid container spacing={2}>
      {stats.map((s) => (
        <Grid item xs={12} sm={6} md={3} key={s.label}>
          <StatCard {...s} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardStats;
