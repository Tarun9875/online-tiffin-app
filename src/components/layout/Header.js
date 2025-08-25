// src/components/layout/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import logo from "../../assets/images/logoe.png";

export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        logout();
        handleClose();
        navigate("/");
    };

    return (
        <AppBar>
            <Toolbar>
                {/* Logo */}
                <Box>
                    <Box component={Link} to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#fff" }}>
                        <Box component="img" src={logo} alt="Logo" style={{ height: 50, width: 50, marginRight: 8 }} />
                        <Typography variant="h6">Online Tiffin Delivery</Typography>
                    </Box>
                </Box>

                {/* Navigation */}
                <Box style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/customer-tiffin-menu">Menu</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>

                    {user ? (
                        <>
                            <Button color="inherit" component={Link} to="/orders">My Orders</Button>
                            <Button color="inherit" component={Link} to="/about-us">About Us</Button>

                            <IconButton onClick={handleMenu}>
                                <Avatar alt={user.name} src={user.avatar || ""} />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => { navigate("/my-account"); handleClose(); }}>My Account</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/about-us">About Us</Button>
                            <Button color="inherit" component={Link} to="/customer-login">Login</Button>
                            <Button color="inherit" component={Link} to="/customer-register">Sign Up</Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
