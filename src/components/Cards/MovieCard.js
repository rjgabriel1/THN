import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Avatar from "@mui/material/Avatar";
import { AccentColor, PrimaryColor } from "../../utils/colors";
import moment from "moment";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard({ title, poster, overview, vote, year }) {
  const [expanded, setExpanded] = React.useState(false);
  const average = vote.toFixed(1);
  const date = moment(year, "YYYY-MM-DDTHH:mm:ss").toDate();
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: AccentColor, width: 40 }} aria-label="recipe">
            <ThumbUpOffAltIcon sx={{ color: PrimaryColor }} />
          </Avatar>
        }
        // title={formattedDate}
        subheader={average}
      />
      <CardMedia
        component="img"
        height="300"
        image={"https://image.tmdb.org/t/p/w342" + poster}
        alt={title}
      />
      <CardContent>
        <Typography component={"h2"} variant="h5" color={"#333"}>
          {title}
        </Typography>
        <Typography component={"h4"} variant="h6" color="text.secondary">
          {formattedDate}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color={PrimaryColor}>
            Overview:
          </Typography>
          <Typography paragraph>{overview}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
