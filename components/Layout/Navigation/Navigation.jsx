import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Hidden,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import styles from "./Navigation.module.css";
import List from "@material-ui/core/List";
import links from "../../../assets/content/navigation.json";

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Hidden smUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden xsDown>
            {Object.values(links).map((link) => (
              <Link key={link.path} href={link.path}>
                <a>
                  <Button color="inherit">{link.label}</Button>
                </a>
              </Link>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={"left"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={styles.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {Object.values(links).map((link) => (
              <Link key={link.path} href={link.path}>
                <ListItem button>
                  <ListItemText primary={link.label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default Navigation;
