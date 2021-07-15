import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  link: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    }
  }
}));

const PlaceCard = ({ contactInfo }) => {
  const styles = useStyles();
  return (
    <>
      <Typography>{contactInfo.name}</Typography>
      <Link href={`tel://${contactInfo.phone}`}>
        <Typography className={styles.link}>{contactInfo.phone}</Typography>
      </Link>
      <Link href={`mailto:${contactInfo.mail}`}>
        <Typography className={styles.link}>{contactInfo.mail}</Typography>
      </Link>
    </>
  );
};

export default PlaceCard;
