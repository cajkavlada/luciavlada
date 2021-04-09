import React from "react";
import { Typography } from "@material-ui/core";

const TimeCard = ({content}) => {
  return (
    <>
      <Typography variant="h5">{content.title}</Typography>
      <Typography>{content.text}</Typography>
      <Typography variant="h5">{content.info}</Typography>
    </>
  );
};

export default TimeCard;
