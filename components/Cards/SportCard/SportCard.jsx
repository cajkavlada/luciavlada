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
  paragraph: {
    paddingTop: '16px',
  }
});

const SportCard = ({ content }) => {
  const styles = useStyles();
  return (
    <>
      <Typography color="primary" variant="h6">
        {content.title}
      </Typography>
      <Typography display="block" align="justify" variant="h8">
        Nezbytnou součástí našeho velkého dne bude beachvolejbalové hřiště. Kdo si budete chtít zablbnou a rozhýbat své kosti před večerní party, budete si moci zahrát, zaházet apod. Hned u hřiště se nachází venkovní sprcha. Nezapomeňte si tedy přibalit i ručníky pro strýčka příhodu.
      </Typography>
    </>
  );
};

export default SportCard;
