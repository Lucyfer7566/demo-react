import React from "react";
import { Typography, Button, Container, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <Box sx={{ pt: 40 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            sx={{ fontWeight: "bold", color: "#282c34" }}
                        >
                            Studying Online is now much easier
                        </Typography>
                        <Typography
                            variant="body1"
                            gutterBottom
                            color="text.secondary"
                            sx={{ fontSize: 20 }}
                        >
                            Skilline is an interesting platform that will teach
                            you in a more interactive way.
                        </Typography>
                        <Box mt={4} sx={{ display: "flex" }}>
                            <Button
                                component={Link}
                                to="/join"
                                variant="contained"
                                sx={{
                                    mr: 2,
                                    backgroundColor: "#f26a2e",
                                    borderRadius: 20,
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: 20
                                }}
                            >
                                Join for free
                            </Button>
                            <Box
                                sx={{
                                    backgroundColor: "#2196f3",
                                    borderRadius: "50%",
                                    width: 50,
                                    height: 50,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    ml: 2,
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </Box>
                            <Button
                                component={Link}
                                to="/how-it-works"
                                sx={{
                                    ml: 2,
                                    color: "#282c34",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: 20
                                }}
                            >
                                Watch how it works
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
