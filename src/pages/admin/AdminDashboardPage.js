import React from "react";
import AdminHeader from "../../components/layout/AdminHeader";

import { Box, Typography } from "@mui/material";

const AdminDashboardPage = () => {
  return (
    <>
      <AdminHeader />
      <Box sx={{ mt: 10, p: 3 }}>
        <Typography variant="h4">Welcome to Admin Dashboard</Typography>
        <Typography sx={{ mt: 2 }}>
          Manage tiffins, categories, and view orders here.
        </Typography>
      </Box>
     
    </>
  );
};

export default AdminDashboardPage;
