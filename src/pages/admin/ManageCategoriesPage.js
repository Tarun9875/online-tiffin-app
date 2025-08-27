// src/pages/admin/ManageCategoriesPage.js
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import AddCategoryForm from "../../features/admin/ManageCategories/AddCategoryForm";

const ManageCategoriesPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Manage Categories
      </Typography>
      <Paper sx={{ p: 2 }}>
        <AddCategoryForm />
      </Paper>
    </Box>
  );
};

export default ManageCategoriesPage;
