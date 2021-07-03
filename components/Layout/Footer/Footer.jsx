import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    height: "100px",
    //borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginLeft: "0.5rem",
    height: "1em",
  },
});

const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={styles.footer}>
      © 2021 Luciavlada{" "}
      <img src="/wedding_icon.svg" alt="Luciavlada Logo" className={styles.logo} />
    </footer>
  );
};

export default Footer;
