import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card as MuiCard, CardContent, Typography } from "@material-ui/core";
import TimeCard from "./TimeCard/TimeCard";
import PlaceCard from "./PlaceCard/PlaceCard";
import DressCard from "./DressCard/DressCard";
import AccomodationCard from "./AccomodationCard/AccomodationCard";
import RefreshmentCard from "./RefreshmentCard/RefreshmentCard";
import GiftCard from "./GiftCard/GiftCard";
import AnimalsCard from "./AnimalsCard/AnimalsCard";
import ParkingCard from "./ParkingCard/ParkingCard";
import InstrumentsCard from "./InstrumentsCard/InstrumentsCard";
import SportCard from "./SportCard/SportCard";
import CovidCard from "./CovidCard/CovidCard";
import ContactCard from "./ContactCard/ContactCard";
import Separator from "./Separator/Separator";

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
  },
  blockText: {
    textAlign: 'justify',
    textJustify: 'inter-word',
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
    case "Dresscode":
      cardContent = <DressCard content={content} />;
      break;
    case "Ubytování":
      cardContent = <AccomodationCard content={content} />;
      break;
    case "Občerstvení":
      cardContent = <RefreshmentCard content={content} />;
      break;
    case "Dary":
      cardContent = <GiftCard content={content} />;
      break;
    case "Zvířátka":
      cardContent = <AnimalsCard content={content} />;
      break;
    case "Parkování":
      cardContent = <ParkingCard content={content} />;
      break;
    case "Hudební nástroje":
      cardContent = <InstrumentsCard content={content} />;
      break;
    case "Sport a hry":
      cardContent = <SportCard content={content} />;
      break;
    case "COVID-19":
      cardContent = <CovidCard content={content} />;
      break;
    case "Kontakty":
      cardContent = <ContactCard content={content} />;
      break;
    
    default:
      cardContent = (
        <>
          <Typography color="primary" variant="h6">{content.title}</Typography>
          <Typography display="block" align="justify" variant="h8">{content.text}</Typography>
        </>
      );
  }
  return (
    <MuiCard elevation={0} color="inherit" className={styles.card}>
      <Separator/>
      <CardContent>{cardContent}</CardContent>
    </MuiCard>
  );
};

export default Card;
