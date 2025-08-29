import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/authContext";

const AdminHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate("/admin/login");
  };

  // Dynamic page title
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes("/admin/dashboard")) return "Dashboard";
    if (path.includes("/admin/manage-categories")) return "Manage Categories";
    if (path.includes("/admin/manage-tiffins")) return "Manage Tiffins";
    if (path.includes("/admin/manage-orders")) return "Manage Orders";
    return "Admin Dashboard";
  };

  // Navigation links for header
  const navLinks = [
    { text: "Dashboard", path: "/admin/dashboard" },
    { text: "Manage Categories", path: "/admin/manage-categories" },
    { text: "Manage Tiffins", path: "/admin/manage-tiffins" },
    { text: "Manage Orders", path: "/admin/manage-orders" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "pink" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {getPageTitle()}
        </Typography>

        {/* Navigation Links */}
        {navLinks.map((link) => (
          <Button
            key={link.text}
            color="inherit"
            onClick={() => navigate(link.path)}
            sx={{
              fontWeight: location.pathname === link.path ? "bold" : "normal",
            }}
          >
            {link.text}
          </Button>
        ))}

        {/* Avatar */}
        {user?.role === "admin" && (
          <Box>
            <IconButton onClick={handleMenuOpen} sx={{ ml: 2 }}>
              <Avatar
                alt={user.name}
                src={user.avatar || ""}
                sx={{ bgcolor: "secondary.main" }}
              >
                {!user.avatar && user.name?.charAt(0)}
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/admin/profile");
                  handleMenuClose();
                }}
              >
                My Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
