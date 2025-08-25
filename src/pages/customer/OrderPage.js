import React, { useState } from "react";
import { Box, Typography, TextField, Button, Card, CardMedia, CardContent } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const defaultTiffinImage = "/assets/images/tiffin-default.jpg";

export default function OrderPage() {
    const location = useLocation();
    const tiffin = location.state?.tiffin; // get tiffin from navigation

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Order placed!\nTiffin: ${tiffin?.name || "N/A"}\nName: ${name}\nAddress: ${address}\nPhone: ${phone}`
        );
        setName("");
        setAddress("");
        setPhone("");
    };

    return (
        <Box>
            <Header />

            <Box sx={{ py: 5, px: 2, maxWidth: 700, mx: "auto" }}>
                <Typography variant="h4" gutterBottom textAlign="center">
                    Place Your Order
                </Typography>

                {tiffin && (
                    <Card sx={{ display: "flex", mb: 3, boxShadow: 3, borderRadius: 2 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 180, height: 180 }}
                            image={tiffin.image || defaultTiffinImage}
                            alt={tiffin.name}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="h6">{tiffin.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {tiffin.description}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                ₹{tiffin.price}
                            </Typography>
                        </CardContent>
                    </Card>
                )}

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Address"
                        fullWidth
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Phone Number"
                        fullWidth
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        sx={{ mb: 2 }}
                    />

                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Place Order
                    </Button>
                </form>
            </Box>

            <Footer />
        </Box>
    );
}
