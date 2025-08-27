// src/pages/customer/TiffinMenuPage.js
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import { getTiffinMenu } from "../../api/customerApi";

const defaultTiffinImage = "/assets/images/tiffin-default.jpg";
const bannerImage = "/assets/images/bg.jpg"; // same as HomePage

export default function TiffinMenuPage() {
    const [tiffins, setTiffins] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTiffinMenu();
                setTiffins(res.data);
            } catch (err) {
                console.error("Error fetching tiffins:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <Box>
            {/* Banner */}
            <Box
                sx={{
                    height: "40vh",
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textAlign: "center",
                    px: 2,
                    mt: "-64px", // overlap sticky header
                }}
            >
                <Box>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
                    >
                        Our Tiffin Menu
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ mb: 3, textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                    >
                        Fresh & Hygienic Meals Delivered to Your Doorstep
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => navigate("/customer-tiffin-menu")}
                    >
                        Explore Menu
                    </Button>
                </Box>
            </Box>

            {/* Page Description */}
            <Box sx={{ py: 5, px: 2, textAlign: "center" }}>
                <Typography variant="body1" color="text.secondary" maxWidth="700px" mx="auto">
                    Explore our fresh and hygienic tiffins, delivered right to your doorstep. 
                    Click "Order Now" to get started!
                </Typography>
            </Box>

            {/* Tiffin Cards */}
            <Box sx={{ py: 3, px: 2, display: "flex", justifyContent: "center" }}>
                <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1200 }}>
                    {loading ? (
                        <Typography textAlign="center">Loading...</Typography>
                    ) : (
                        tiffins.map((tiffin) => (
                            <Grid
                                item
                                key={tiffin._id}
                                xs={12}
                                sm={6}
                                md={4}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                <Card
                                    sx={{
                                        width: "100%",
                                        maxWidth: 350,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        boxShadow: 3,
                                        borderRadius: 2,
                                        overflow: "hidden",
                                        transition: "transform 0.3s",
                                        "&:hover": { transform: "scale(1.03)" },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: "100%",
                                            height: 220,
                                            objectFit: "cover",
                                            backgroundColor: "#f0f0f0",
                                        }}
                                        image={tiffin.image || defaultTiffinImage}
                                        alt={tiffin.name}
                                    />
                                    <CardContent sx={{ textAlign: "center", flex: 1 }}>
                                        <Typography variant="h6">{tiffin.name}</Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 1 }}
                                        >
                                            {tiffin.description}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            ₹{tiffin.price}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            color="primary"
                                            sx={{ mt: 1 }}
                                            onClick={() => navigate("/order", { state: { tiffin } })}
                                        >
                                            Order Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Box>

            <Footer />
        </Box>
    );
}
