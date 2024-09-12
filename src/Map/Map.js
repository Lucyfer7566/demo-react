import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container, Typography, Box } from "@mui/material";
import "leaflet/dist/leaflet.css";
import "react-leaflet-fullscreen/styles.css";
import "leaflet-fullscreen";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import { FullscreenControl } from "react-leaflet-fullscreen";
const Map = () => {
    const position = [10.0427, 105.7672];
    const stationData = {
        name: "81db70/TRAM_SAT_LO_06",
        type: "Cảnh báo sạt lở",
        status: false,
        longitude: 105.7672,
        latitude: 10.0427,
        tension: -1.22,
        vibration: 0.0,
        vibrationIntensity: 0.0,
    };

    useEffect(() => {
        const map = document.querySelector(".leaflet-container")._leaflet_map;
        // L.control.fullscreen().addTo(map); // Thêm nút fullscreen
    }, []);

    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Typography variant="h5" gutterBottom align="center">
                Map
            </Typography>
            <MapContainer
                center={position}
                zoom={12}
                style={{ height: 400 }}
                className="map-container"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant="subtitle1" gutterBottom>
                                Tên trạm: {stationData.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Loại trạm: {stationData.type}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Trạng thái kết nối:{" "}
                                {stationData.status.toString()}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Kinh độ: {stationData.longitude}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Vĩ độ: {stationData.latitude}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Độ căng: {stationData.tension}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Giá trị rung chấn: {stationData.vibration}
                            </Typography>
                            <Typography variant="body2">
                                Cường độ rung chấn:{" "}
                                {stationData.vibrationIntensity}
                            </Typography>
                        </Box>
                    </Popup>
                </Marker>

                <FullscreenControl
                    forceSeparateButton={true}
                    position="topright"
                />
            </MapContainer>
        </Container>
    );
};

export default Map;
