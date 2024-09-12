import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./Hero/HeroSection";
import TrustedCompanies from "./TrustedCompanies/TrustedCompanies";
import ListPerson from "./ListPerson/ListPerson";
import Chart from "./Chart/Chart";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <HeroSection />
        <TrustedCompanies />
        <ListPerson />
        <Chart />
        <Map />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;