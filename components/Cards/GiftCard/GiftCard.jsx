import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    height: "100px",
    //borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginLeft: "0.5rem",
    height: "4em",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "transparent",
  },
  blockText: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
});

const GiftCard = ({ content }) => {
  const styles = useStyles();
  return (
    <>
      <Typography color="primary" variant="h6">
        {content.title}
      </Typography>
      <Typography display="block" align="justify" variant="h8">
        {content.text}
      </Typography>
      <Typography display="block" align="justify" variant="h8">
        <Box fontStyle="italic" m={1}>
          {content.quote}
        </Box>
      </Typography>
    </>
  );
};

export default GiftCard;
