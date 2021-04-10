import "../styles/globals.css";
import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue, orange } from "@material-ui/core/colors";

import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps, router }) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: lightBlue[500],
      },
      secondary: {
        main: orange[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Layout route={router.route}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
