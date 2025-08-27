import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../auth/authContext";

const AdminFooter = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  if (!isAdmin) return null; // Only show footer for admin users

  return (
    <Box sx={{ bgcolor: "#212121", color: "#fff", px: 2, py: 3, mt: 3 }}>
      <Grid container spacing={2} justifyContent="space-between">
        {/* Left Section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
            ADMIN PANEL
          </Typography>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Admin panel of Online Tiffin App. Manage orders, tiffins, and categories.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Link href="#" color="inherit"><Facebook fontSize="small" /></Link>
            <Link href="#" color="inherit"><Instagram fontSize="small" /></Link>
            <Link href="#" color="inherit"><Twitter fontSize="small" /></Link>
            <Link href="#" color="inherit"><YouTube fontSize="small" /></Link>
          </Box>
        </Grid>

        {/* Middle Section - Admin Links */}
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Admin Links
          </Typography>
          <Box sx={{ mt: 0.5, display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Link component={RouterLink} to="/admin/dashboard" color="inherit" underline="hover" variant="caption">
              Dashboard
            </Link>
            <Link component={RouterLink} to="/admin/manage-categories" color="inherit" underline="hover" variant="caption">
              Manage Categories
            </Link>
            <Link component={RouterLink} to="/admin/manage-tiffins" color="inherit" underline="hover" variant="caption">
              Manage Tiffins
            </Link>
            <Link component={RouterLink} to="/admin/orders" color="inherit" underline="hover" variant="caption">
              View Orders
            </Link>
          </Box>
        </Grid>

        {/* Right Section - Contact Info */}
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Contact Admin
          </Typography>
          <Typography variant="caption" sx={{ display: "block", mt: 0.5, lineHeight: 1.4 }}>
            +91-9875239438
            <br />
            admin@online-tiffin.com
            <br />
            Admin Office, Main Street, City
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom */}
      <Box sx={{ mt: 2, pt: 1, textAlign: "center", borderTop: "1px solid #616161" }}>
        <Typography variant="caption">
          © 2025 Online Tiffin App Admin. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default AdminFooter;
