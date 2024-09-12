import React from "react";
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SkillineLogo from "../assets/SkillineLogo.png";

const Header = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                top: 0, 
                left: 0,
                width: "100%",
                zIndex: 10,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box>
                        <img
                            src={SkillineLogo}
                            alt="Skilline Logo"
                            style={{ height: 100 }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button
                            component={Link}
                            to="/home"
                            color="inherit"
                            sx={{ mr: 2, color: "#282c34", fontWeight: "bold", fontSize: 20 }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/careers"
                            color="inherit"
                            sx={{ mr: 2, color: "#282c34", fontWeight: "bold", fontSize: 20 }}
                        >
                            Careers
                        </Button>
                        <Button
                            component={Link}
                            to="/blog"
                            color="inherit"
                            sx={{ mr: 2, color: "#282c34", fontWeight: "bold", fontSize: 20 }}
                        >
                            Blog
                        </Button>
                        <Button
                            component={Link}
                            to="/about-us"
                            color="inherit"
                            sx={{ mr: 2, color: "#282c34", fontWeight: "bold", fontSize: 20 }}
                        >
                            About Us
                        </Button>
                        <Button
                            component={Link}
                            to="/login"
                            color="inherit"
                            sx={{
                                mr: 2,
                                color: "#282c34",
                                fontWeight: "bold",
                                border: "1px solid #282c34",
                                borderRadius: 20,
                                fontSize: 20
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            component={Link}
                            to="/signup"
                            variant="contained"
                            sx={{
                                backgroundColor: "#f26a2e",
                                borderRadius: 20,
                                fontWeight: "bold",
                                fontSize: 20
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
