import React from "react";
import Link from 'next/link'
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ContactInfo from "./ContactInfo/ContactInfo";

const useStyles = makeStyles(theme => ({
  contactsDiv: {
    paddingTop: '32px',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
  contactDiv: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '32px'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '16px',
    }
  },
  paragraph: {
    paddingTop: '16px',
  }
}));


const PlaceCard = ({content}) => {
  const styles = useStyles();
  return (
    <>
      <Typography color={"primary"}variant="h6">{content.title}</Typography>
      <Typography>{content.text}</Typography>
      <div className={styles.contactsDiv}>
        <div>
          <ContactInfo contactInfo={content.contactHer}/>
        </div>
        <div className={styles.contactDiv}>
          <ContactInfo contactInfo={content.contactHim}/>
        </div>
      </div>
      <Typography display="block" align="justify" variant="h8" className={styles.paragraph}>
        Adresa novomanželů: Dukelská 324, Ústí nad Orlicí 562 01
      </Typography>
    </>
  );
};

export default PlaceCard;
