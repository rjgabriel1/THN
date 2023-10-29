import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import { useNavigate } from "react-router-dom";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import { Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { PrimaryColor, AccentColor, SecondaryColor } from "../utils/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//Menu Items
const menuItems = [
  {
    icon: <NewspaperIcon />,
    primary: "Headlines",
    path: "/",
  },

  {
    icon: <LightbulbOutlinedIcon />,
    primary: "Technology",
    path: "/technology",
  },
  {
    icon: <PaidOutlinedIcon />,
    primary: "Crypto",
    path: "/crypto",
  },

  {
    icon: <FlightTakeoffOutlinedIcon />,
    primary: "Travel",
    path: "/travel",
  },
  {
    icon: <HealthAndSafetyOutlinedIcon />,
    primary: "Health",
    path: "/health",
  },
  {
    icon: <SportsFootballOutlinedIcon />,
    primary: "Sport",
    path: "/sport",
  },
  {
    icon: <MovieCreationOutlinedIcon />,
    primary: "Cinema",
    path: "/cinema",
  },
  {
    icon: <SportsEsportsOutlinedIcon />,
    primary: "Gaming",
    path: "/game",
  },
];

const Otheroptions = [
  {
    icon: <InfoOutlinedIcon />,
    primary: "Info",
    path: "/about",
  },
];
export default function Sidenav() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader padding={2}>
          <Typography
            component={"h3"}
            variant="h5"
            mr={6}
            mt={2}
            mb={2}
            color="text.secondary"
          >
            <b>Tekhub</b>
          </Typography>
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <ChevronLeftIcon /> : <MenuOutlinedIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />
        {open && (
          <Typography
            component={"h6"}
            variant="p"
            ml={2}
            mt={2}
            mb={1}
            color="text.secondary"
          >
            <b>Categories</b>
          </Typography>
        )}

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              disablePadding
              sx={{
                display: "block",
              }}
              onClick={() => {
                handleClick(item.path);
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ":hover": {
                    backgroundColor: AccentColor,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: PrimaryColor,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.primary}
                  sx={{ opacity: open ? 1 : 0, color: SecondaryColor }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {open && (
          <Typography
            component={"h6"}
            variant="p"
            ml={2}
            mt={2}
            mb={1}
            color="text.secondary"
          >
            <b>Subscription & Other</b>
          </Typography>
        )}

        <List>
          {Otheroptions.map((item) => (
            <ListItem
              key={item.path}
              disablePadding
              sx={{
                display: "block",
              }}
              onClick={() => {
                handleClick(item.path);
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ":hover": {
                    backgroundColor: AccentColor,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: PrimaryColor,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.primary}
                  sx={{ opacity: open ? 1 : 0, color: SecondaryColor }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
