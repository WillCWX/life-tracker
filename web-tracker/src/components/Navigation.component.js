import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

/**
 * Navigation Icons
 */
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const menu = [
    {
      text: "Dashboard",
      Icon: DashboardIcon,
      onClick: () => {},
    },
    {
      text: "Health tracker",
      Icon: MonitorHeartIcon,
      onClick: () => {},
    },
    {
      text: "Meal tracker",
      Icon: RestaurantIcon,
      onClick: () => {},
    },
    {
      text: "Fitness Tracker",
      Icon: FitnessCenterIcon,
      onClick: () => {},
    },
  ];

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuOpen(isOpen);
  };

  const listItem = (text, Icon, onClick = undefined) => {
    return (
      <ListItem key={text} disablePadding>
        <ListItemButton onClick={onClick}>
          <ListItemIcon>{<Icon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    );
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menu.map(({ text, Icon, onClick }) => {
          return listItem(text, Icon, onClick);
        })}
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon />
          </Button>
          <Drawer anchor={"left"} open={menuOpen} onClose={toggleDrawer(false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
