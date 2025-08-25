import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { getTiffinMenu } from "../../api/customerApi";

const defaultTiffinImage = "/assets/images/tiffin-default.jpg";

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
            <Header />

            <Box sx={{ py: 5, px: 2 }}>
                <Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 4 }}>
                    Our Tiffin Menu
                </Typography>

                {loading ? (
                    <Typography textAlign="center">Loading...</Typography>
                ) : (
                    <Grid container spacing={4} justifyContent="center">
                        {tiffins.map((tiffin) => (
                            <Grid item key={tiffin._id} xs={12} sm={6} md={6}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", sm: "row" },
                                        alignItems: "center",
                                        boxShadow: 3,
                                        borderRadius: 2,
                                        overflow: "hidden",
                                        transition: "transform 0.3s",
                                        "&:hover": { transform: "scale(1.02)" },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: { xs: "100%", sm: 180 }, height: 180 }}
                                        image={tiffin.image || defaultTiffinImage}
                                        alt={tiffin.name}
                                    />
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography variant="h6">{tiffin.name}</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                            {tiffin.description}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
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
                        ))}
                    </Grid>
                )}
            </Box>

            <Footer />
        </Box>
    );
}
