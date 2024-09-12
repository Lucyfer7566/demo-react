import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#007bff",
        },
        secondary: {
            main: "#f44336",
        },
    },
    typography: {
        fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(
            ","
        ),
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: "3rem",
        },
        h2: {
            fontSize: "2.5rem",
        },
        h3: {
            fontSize: "2rem",
        },
        h4: {
            fontSize: "1.5rem",
        },
        h5: {
            fontSize: "1.25rem",
        },
        h6: {
            fontSize: "1rem",
        },
    },
});

export default theme;
