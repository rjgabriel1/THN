import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import moment from "moment";

const ArticleCard = ({
  cover,
  title,
  description,
  source,
  published_at,
  linkTo,
}) => {
  const date = moment(published_at, "YYYY-MM-DDTHH:mm:ss").toDate();
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const handleClick = () => {
    window.open(linkTo, "_blank");
  };
  return (
    <Card sx={{ maxWidth: 345, mb: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={cover ? cover : "fallbackCover.png"}
          alt={source}
          loading="lazy"
          onClick={handleClick}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontWeight={"600"}
            lineHeight={"1.5"}
          >
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          <Typography
            gutterBottom
            variant="p"
            component="p"
            sx={{ mt: 6 }}
            color="#6C63FF"
          >
            {source.toUpperCase()}
          </Typography>

          <Typography
            gutterBottom
            variant="p"
            sx={{
              display: "flex",
              position: "absolute",
              bottom: 16,
              right: 16,
            }}
            color="text.secondary"
          >
            {formattedDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
