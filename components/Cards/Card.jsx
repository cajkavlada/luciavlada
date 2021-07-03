import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card as MuiCard, Box, Paper, CardContent, Typography } from "@material-ui/core";
import TimeCard from "./TimeCard/TimeCard";
import PlaceCard from "./PlaceCard/PlaceCard";
import ContactCard from "./ContactCard/ContactCard";

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
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: 'transparent',
  }
});

const Card = ({ content }) => {
  const styles = useStyles();
  let cardContent;
  switch (content.title) {
    case "Datum a čas":
      cardContent = <TimeCard content={content} />;
      break;
    case "Místo":
      cardContent = <PlaceCard content={content} />;
      break;
    case "Kontakty":
      cardContent = <ContactCard content={content} />;
      break;
    case "Dary":
      cardContent = (
        <>
          <Typography color="primary" variant="h6">{content.title}</Typography>
          <Typography variant="h8">{content.text}</Typography>
          
          <Typography variant="h8">
            <Box fontStyle="italic" m={1}>
              {content.quote}
            </Box>
            </Typography>
        </>
      );
      break;
    default:
      cardContent = (
        <>
          <Typography color="primary" variant="h6">{content.title}</Typography>
          <Typography variant="h8">{content.text}</Typography>
        </>
      );
  }
  return (
    <MuiCard elevation={0} color="inherit" className={styles.card}>
      <div className={styles.iconDiv}>
        <img src="/separator.svg" alt="Luciavlada Logo" className={styles.logo} />
      </div>
      <CardContent className={styles.card}>{cardContent}</CardContent>
    </MuiCard>
  );
};

export default Card;
