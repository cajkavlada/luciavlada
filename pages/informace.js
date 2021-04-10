import React from "react";
import { Container } from "@material-ui/core";

import Headline from "../components/Headline/Headline";
import FlipLayout from "../components/Layout/FlipLayout/FlipLayout";
import Card from "../components/Cards/Card";

import informations from "../assets/content/information.json";

const informace = () => {
  return (
    <Container>
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
