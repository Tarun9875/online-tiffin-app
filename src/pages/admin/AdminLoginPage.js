// src/pages/admin/AdminLoginPage.js
import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useAuth } from "../../auth/authContext"; 
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/layout/AdminHeader"; // Import admin header

const AdminLoginPage = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    // Simple frontend simulation
    if (email === "admin@example.com" && password === "admin123") {
      setAuth({
        user: { id: 1, name: "Admin User", role: "admin" },
        token: "fake-jwt-token",
      });
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {/* Admin Header */}
      <AdminHeader />

      {/* Login Form */}
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper sx={{ p: 4, width: 400 }}>
          <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
            Admin Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default AdminLoginPage;
