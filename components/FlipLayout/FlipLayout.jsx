import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./FlipLayout.module.css";

const FlipLayout = ({ children, cardsWidth }) => {
  const sections = children.map((child, index) => (
    <Grid
      key={index}
      direction={index % 2 ? "row-reverse" : "row"}
      justify="flex-start"
      container
      item
    >
      <Grid
        item
        style={{ width: cardsWidth, marginTop: "16px" }}
      >
        {child}
      </Grid>
    </Grid>
  ));
  console.log(children);
  return (
    <Grid container style={{ width: "80%", margin: "auto" }} direction="column">
      {sections}
    </Grid>
  );
};

export default FlipLayout;
