import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
}));


const PlaceCard = ({content}) => {
  const styles = useStyles();
  return (
    <>
      <Typography color={"primary"}variant="h6">{content.title}</Typography>
      <Typography>{content.text}</Typography>
      <div className={styles.contactsDiv}>
        <div>
          <Typography>{content.contactHer.name}</Typography>
          <Typography>{content.contactHer.phone}</Typography>
          <Typography>{content.contactHer.mail}</Typography>
        </div>
        <div className={styles.contactDiv}>
          <Typography>{content.contactHim.name}</Typography>
          <Typography>{content.contactHim.phone}</Typography>
          <Typography>{content.contactHim.mail}</Typography>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
