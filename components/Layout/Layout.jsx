import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import PageTransition from "../Transitions/PageTransition/PageTransition";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  body: {
    height: "100vh",
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: 'transparent'
  }
}));

const Layout = ({ children, route }) => {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>Lucinka a Vláďa</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/nxz8vuz.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/nxz8vuz.css"></link>
      </Head>
      <div className={styles.body}>
        <Navigation />
        <PageTransition route={route}>{children}</PageTransition>
        <div className={styles.footer}>
          <Footer />
        </div>
        
      </div>
    </>
  );
};

export default Layout;
