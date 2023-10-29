import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const InfoCard = ({ cardTitle, cardDesc }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          color="text.secondary"
          textAlign={"left"}
        >
          {cardTitle}
        </Typography>

        <Typography variant="body2" color="text.primary">
          {cardDesc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
