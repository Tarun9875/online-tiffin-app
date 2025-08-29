import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Alert,
  Stack,
  Typography,
} from "@mui/material";
import axiosInstance from "../../../api/axiosInstance";

const AddCategoryForm = ({ category = null, onClose, onRefresh }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // If editing, populate form
  useEffect(() => {
    if (category) {
      setValue("name", category.name);
      setValue("description", category.description || "");
      setImagePreview(category.image || null);
    }
  }, [category, setValue]);

  const onSubmit = async (data) => {
    setError(null);
    setSuccess(null);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description || "");
      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
      }

      if (category) {
        // Edit category
        await axiosInstance.put(`/admin/categories/${category._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSuccess("Category updated successfully");
      } else {
        // Add new category
        await axiosInstance.post("/admin/categories", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSuccess("Category added successfully");
        reset();
        setImagePreview(null);
      }

      if (onRefresh) onRefresh(); // Refresh table
      if (onClose) setTimeout(onClose, 1000); // Close popup after 1s
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Failed to save category");
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
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

        <Box>
          <Typography variant="subtitle1">Category Image</Typography>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={handleImageChange}
          />
          {imagePreview && (
            <Box mt={1}>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }}
              />
            </Box>
          )}
        </Box>

        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {category ? "Update Category" : "Add Category"}
        </Button>
      </Stack>
    </Box>
  );
};

export default AddCategoryForm;
