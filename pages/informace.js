import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Headline from "../components/Headline/Headline";
import FlipLayout from "../components/Layout/FlipLayout/FlipLayout";
import Card from "../components/Cards/Card";

import informations from "../assets/content/information.json";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
});
const informace = () => {
  const styles = useStyles();
  return (
    <Container className={styles.root}>
      <Headline>{informations.title}</Headline>
      <FlipLayout cardsWidth="60%">
        {Object.values(informations.cards).map((info) => (
          <Card key={info.title} content={info} />
        ))}
      </FlipLayout>
    </Container>
  );
};

export default informace;
