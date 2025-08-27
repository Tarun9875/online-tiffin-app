// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button
} from "@mui/material";
import { Link } from "react-router-dom"; // SPA navigation
import Footer from "../components/layout/Footer";
import { getTiffinMenu } from "../api/customerApi";

const bannerImage = "/assets/images/bg.jpg";
const defaultTiffinImage = "/assets/images/tiffin-default.jpg";

export default function HomePage() {
  const [tiffins, setTiffins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTiffins = async () => {
      try {
        const res = await getTiffinMenu();
        setTiffins(res.data);
      } catch (err) {
        console.error("Error fetching tiffins:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTiffins();
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
          mt: "-64px" // adjust for fixed header
        }}
      >
        <Box>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
          >
            Fresh & Hygienic Tiffins
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 3, textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            Delivered right to your doorstep
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/customer-tiffin-menu"
          >
            Explore Menu
          </Button>
        </Box>
      </Box>

      {/* Featured Tiffins */}
      <Box sx={{ py: 5, px: 2 }}>
        <Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 4 }}>
          Featured Tiffins
        </Typography>

        {loading ? (
          <Typography textAlign="center">Loading...</Typography>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {tiffins.map((tiffin) => (
              <Grid
                item
                key={tiffin._id}
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex", justifyContent: "center", padding: 1 }}
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
                    "&:hover": { transform: "scale(1.03)" }
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      backgroundColor: "#f0f0f0"
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
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      ₹{tiffin.price}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/customer-tiffin-menu"
                      sx={{ mt: 1 }}
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

      {/* About Section */}
      <Box sx={{ py: 5, px: 2, bgcolor: "#f5f5f5" }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          About Us
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          maxWidth="800px"
          mx="auto"
        >
          Online Tiffin App is dedicated to delivering fresh and hygienic meals
          right to your doorstep. Our mission is to make daily meals convenient,
          tasty, and healthy for everyone.
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
}
