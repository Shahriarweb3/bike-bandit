import React from "react";
import "./Vlogs.css"
import YoutubeEmbed from "./Vlogs";
import { Container, Grid } from "@mui/material";

export default function App() {
    return (
        <Container className="App">
            <h1 style={{ marginTop: '50px', marginBottom: '50px' }}>Vidoes for Bikers</h1>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} md={4}>
                    <YoutubeEmbed embedId="z_9e-EWA8Kg" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <YoutubeEmbed embedId="lVYThFQPPL8" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <YoutubeEmbed embedId="QQ-RR7Y4dJo" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <YoutubeEmbed embedId="E0YVSZClAuw" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <YoutubeEmbed embedId="xoTw7YQSZK4" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <YoutubeEmbed embedId="b2xl2-5nF9Y" />
                </Grid>
            </Grid>


            {/* <YoutubeEmbed embedId="rokGy0huYEA" />
            <YoutubeEmbed embedId="rokGy0huYEA" /> */}
        </Container >
    );
}
