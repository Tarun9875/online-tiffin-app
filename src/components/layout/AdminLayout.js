// src/components/layout/AdminLayout.js
import React from "react";
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";

const drawerWidth = 240;

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Dashboard", "Manage Categories", "Manage Tiffins", "Manage Orders"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
