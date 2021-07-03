import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Headline from "../components/Headline/Headline";


const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0px',
    }
  },
}));

const galerie = () => {
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <Headline>Galerie</Headline>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      
    </Container>
  );
};

export default galerie;
