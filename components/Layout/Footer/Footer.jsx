import React from "react";

import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      © 2021 Luciavlada{" "}
      <img src="/vercel.svg" alt="Luciavlada Logo" className={styles.logo} />
    </footer>
  );
};

export default Footer;
