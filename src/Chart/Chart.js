import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
} from "recharts";
import { Container, Typography, Grid } from "@mui/material";

const lineChartData = [
    { time: "00:00", value: 0.05 },
    { time: "04:00", value: 1.1 },
    { time: "08:00", value: 1.5 },
    { time: "12:00", value: 0.1 },
    { time: "16:00", value: 0.02 },
    { time: "20:00", value: 2 },
    { time: "22:00", value: 1.8 },
    { time: "24:00", value: 1.2 },
];

const barChartData = [
    { tram: "Tram 1", value: 16 },
    { tram: "Tram 2", value: 9 },
    { tram: "Tram 3", value: 25 },
    { tram: "Tram 4", value: 19 },
    { tram: "Tram 5", value: 20 },
];

const Chart = () => {
    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Typography variant="h5" gutterBottom align="center">
                Chart
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <LineChart
                        width={500}
                        height={300}
                        data={lineChartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="time" />
                        <YAxis
                            domain={[0, 2]}
                            tickFormatter={(value) => `${value}m`}
                        />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#8884d8"
                            strokeWidth={2}
                            dot={{ fill: "#8884d8", strokeWidth: 0 }}
                            activeDot={{ r: 5 }}
                        />
                    </LineChart>
                </Grid>
                <Grid item xs={12} md={6}>
                    <BarChart
                        width={500}
                        height={300}
                        data={barChartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="tram" />
                        <YAxis domain={[0, 32]} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" barSize={30} />
                    </BarChart>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chart;