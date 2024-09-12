import React from "react";
import { Typography, Container, Link } from "@mui/material";

const Footer = () => {
    return (
        <footer sx={{ backgroundColor: "#f5f5f5", py: 4 }}>
            <Container maxWidth="xl">
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                >
                    {"Copyright © "}
                    <Link color="inherit" href="#">
                        Skilline
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
