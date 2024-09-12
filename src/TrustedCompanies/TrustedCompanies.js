import React from "react";
import { Typography, Container, Grid} from "@mui/material";
import googleLogo from "../assets/google-logo.png";
import netflixLogo from "../assets/netflix-logo.png";
import airbnbLogo from "../assets/airbnb-logo.png";
import amazonLogo from "../assets/amazon-logo.png";
import facebookLogo from "../assets/facebook-logo.png";
import grabLogo from "../assets/grab-logo.png";

const TrustedCompanies = () => {
    return (
        <Container maxWidth="xl" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
            <Typography variant="h5" gutterBottom align="center">
                Trusted by 5,000+ Companies Worldwide
            </Typography>
            <Grid container spacing={4} justifyContent="center" mt={4}>
                <Grid item>
                    <img
                        src={googleLogo}
                        alt="Google Logo"
                        style={{ height: 40 }}
                    />
                </Grid>
                <Grid item>
                    <img
                        src={netflixLogo}
                        alt="Netflix Logo"
                        style={{ height: 40 }}
                    />
                </Grid>
                <Grid item>
                    <img
                        src={airbnbLogo}
                        alt="Airbnb Logo"
                        style={{ height: 40 }}
                    />
                </Grid>
                <Grid item>
                    <img
                        src={amazonLogo}
                        alt="Amazon Logo"
                        style={{ height: 40 }}
                    />
                </Grid>
                <Grid item>
                    <img
                        src={facebookLogo}
                        alt="Facebook Logo"
                        style={{ height: 40 }}
                    />
                </Grid>
                <Grid item>
                    <img
                        src={grabLogo}
                        alt="Grab Logo"
                        style={{ height: 40 }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
export default TrustedCompanies;