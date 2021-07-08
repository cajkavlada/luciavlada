import React from "react";
import { Typography } from "@material-ui/core";

const TimeCard = ({ content }) => {
  return (
    <>
      <Typography color={"primary"} variant="h6">
        {content.title}
      </Typography>
      <Typography display="block" align="justify">
        {content.text}
      </Typography>
      <Typography display="block" align="justify" variant="h6">
        {content.info}
      </Typography>
    </>
  );
};

export default TimeCard;
