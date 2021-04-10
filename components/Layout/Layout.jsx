import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import PageTransition from "./PageTransition/PageTransition";

const Layout = ({ children, route }) => {
  return (
    <>
      <Head>
        <title>Lucinka a Vláďa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navigation />
      <PageTransition route={route}>{children}</PageTransition>
      <Footer />
    </>
  );
};

export default Layout;
