import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Headline from "../components/Headline/Headline";
import CardLayout from "../components/Layout/CardLayout/CardLayout";
import Card from "../components/Cards/Card";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

import informations from "../assets/content/information.json";

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '0px',
    paddingRight: '0px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0px',
    }
  },
  card: {
    marginTop: '15px',
  },
}));

const informace = () => {
  const styles = useStyles();
  
  return (
    <BackgroundImage path={"/images/flower.jpg"}>   
      <Container className={styles.container}>
        <Headline>{informations.title}</Headline>
        <CardLayout>
          {Object.values(informations.cards).map((info) => (
            <div className={styles.card}>
              <Card key={info.title} content={info} />
            </div> 
          ))}
        </CardLayout>
      </Container>
    </BackgroundImage>
  );
};

export default informace;
