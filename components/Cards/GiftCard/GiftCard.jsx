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

const GiftCard = ({ content }) => {
  const styles = useStyles();
  return (
    <>
      <Typography color="primary" variant="h6">
        {content.title}
      </Typography>
      <Typography display="block" align="justify" variant="h8">
        Největším darem pro nás bude potvrzení Vaší účasti. Už nějaký pátek spolu žijeme v zařízeném bytečku a do domácnosti – kromě většího botníku – nic nepotřebujeme. Pokud byste i přesto nechtěli přijít s prázdnou, budeme rádi za jakýkoliv příspěvek na líbánky. Asi nejtrefněji vše vystihuje následující veršík:
      </Typography>
      <Typography display="block" align="center" variant="h8" className={styles.paragraph}>
        <Box fontStyle="italic" m={1}>
          Svatebčané naši milí, dovolte nám prosbičku,
        </Box>
      </Typography>
      <Typography display="block" align="center" variant="h8">
        <Box fontStyle="italic" m={1}>
          raději než věcné dary, naplňte nám kasičku. 
        </Box>
      </Typography>
      <Typography display="block" align="center" variant="h8">
        <Box fontStyle="italic" m={1}>
          Mnohokrát Vám děkujeme za každičký halíř, 
        </Box>
      </Typography>
      <Typography display="block" align="center" variant="h8">
        <Box fontStyle="italic" m={1}>
          stokrát lepší než nést domů sto desátý talíř.  😊
        </Box>
      </Typography>
    </>
  );
};

export default GiftCard;
