// src/features/admin/ManageCategories/AddCategoryForm.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Alert,
  Stack,
} from "@mui/material";
import axiosInstance from "../../../api/axiosInstance";

const AddCategoryForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setError(null);
    setSuccess(null);
    try {
      // POST to admin category endpoint — ensure backend implements this
      await axiosInstance.post("/admin/categories", data);
      setSuccess("Category added successfully");
      reset();
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Failed to add category");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        {success && <Alert severity="success">{success}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Category Name"
          {...register("name", { required: "Category name required" })}
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
        />

        <TextField
          label="Description"
          multiline
          rows={3}
          {...register("description")}
        />

        <Button type="submit" variant="contained" disabled={isSubmitting}>
          Add Category
        </Button>
      </Stack>
    </Box>
  );
};

export default AddCategoryForm;
