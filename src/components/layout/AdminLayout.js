import React from "react";
import { Box, Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

const AdminLayout = () => {
  const menuItems = [
    { text: "Dashboard", to: "/admin/dashboard" },
    { text: "Manage Categories", to: "/admin/manage-categories" },
    { text: "Manage Tiffins", to: "/admin/manage-tiffins" },
    { text: "Manage Orders", to: "/admin/manage-orders" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem button component={Link} to={item.to} key={item.text}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet /> {/* This renders the admin pages like Dashboard */}
      </Box>
    </Box>
  );
};

export default AdminLayout;
