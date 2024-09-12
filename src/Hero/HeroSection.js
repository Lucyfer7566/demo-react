import React from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import Hero from "./Hero";
import heroBackground from "../assets/hero-image.png";

const HeroSection = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${heroBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                minHeight: "100vh",
                backgroundSize: "1600px 900px"
            }}
        >
            <Header />
            <Hero />
        </Box>
    );
};

export default HeroSection;
