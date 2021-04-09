import React from "react";
import Link from "next/link";
import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <a>
              <Button color="inherit">Domů</Button>
            </a>
          </Link>
          <Link href="/informace">
            <a>
              <Button color="inherit">Základní informace</Button>
            </a>
          </Link>
          <Link href="/harmonogram">
            <a>
              <Button color="inherit">Harmonogram</Button>
            </a>
          </Link>
          <Link href="/galerie">
            <a>
              <Button color="inherit">Galerie</Button>
            </a>
          </Link>
          <Link href="/ucast">
            <a>
              <Button color="inherit">Potvrzení účasti</Button>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
