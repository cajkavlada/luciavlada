import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({}));

const PlaceCard = ({ contactInfo }) => {
  const styles = useStyles();
  return (
    <>
      <Typography>{contactInfo.name}</Typography>
      <Link href={`tel://${contactInfo.phone}`}>
        <Typography>{contactInfo.phone}</Typography>
      </Link>
      <Link href={`mailto:${contactInfo.mail}`}>
        <Typography>{contactInfo.mail}</Typography>
      </Link>
    </>
  );
};

export default PlaceCard;
