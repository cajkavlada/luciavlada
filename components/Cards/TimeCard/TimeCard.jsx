import React from "react";
import { Typography } from "@material-ui/core";

const TimeCard = ({content}) => {
  return (
    <>
      <Typography color={"primary"} variant="h6">{content.title}</Typography>
      <Typography>{content.text}</Typography>
      <Typography variant="h6">{content.info}</Typography>
    </>
  );
};

export default TimeCard;
