import React from "react";
import { Box, Divider } from "@mui/material";
import Sidenav from "../components/Sidenav";
import Typography from "@mui/material/Typography";
import InfoCard from "../components/Cards/InfoCard";
import Grid from "@mui/material/Grid";
import { aboutText } from "../utils/aboutText";


const About = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
       
        <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center">
          <Typography
            variant="h4"
            color="text.secondary"
            fontWeight="600"
            textAlign="left"
            sx={{ mb: 3 }}
          >
            About us
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Grid container spacing={1}>
            {aboutText.map((txt) => {
              return (
                <Grid xs={4} md={4}>
                  <InfoCard
                    key={txt.id}
                    cardTitle={txt.title}
                    cardDesc={txt.description}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Typography
            paragraph
            sx={{ color: "text.secondary", position: "relative", mt: 50 }}
            textAlign={"center"}
          >
            Copyright © {new Date().getFullYear()} TEKHUB{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
