import React from "react";
import { Card as MuiCard, CardContent, Typography } from "@material-ui/core";
import TimeCard from "./TimeCard/TimeCard";
import PlaceCard from "./PlaceCard/PlaceCard";

const Card = ({ content }) => {
  let cardContent;
  switch (content.title) {
    case "Datum a čas":
      cardContent = <TimeCard content={content} />;
      break;
    case "Místo":
      cardContent = <PlaceCard content={content} />;
      break;
    default:
      cardContent = (
        <>
          <Typography variant="h5">{content.title}</Typography>
          <Typography>{content.text}</Typography>
        </>
      );
  }
  return (
    <MuiCard>
      <CardContent>{cardContent}</CardContent>
    </MuiCard>
  );
};

export default Card;
