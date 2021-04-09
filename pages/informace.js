import React from "react";
import Headline from "../components/Headline/Headline";
import FlipLayout from "../components/FlipLayout/FlipLayout";
import informations from '../assets/content/information.json';
import Card from '../components/Cards/Card';
const informace = () => {
  return (
    <>
      <Headline>{informations.title}</Headline>
      <FlipLayout cardsWidth="60%">
        {Object.values(informations.cards).map((info) => <Card key={info.title} content={info}/>)}
      </FlipLayout>
    </>
  );
};

export default informace;
