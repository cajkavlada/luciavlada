import React from "react";
import { Typography } from "@material-ui/core";
import Map from "../../Map/Map";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  map: {
    paddingTop: '16px'
  },
}));

const PlaceCard = ({content}) => {
  const styles = useStyles();
  return (
    <>
      <Typography color={"primary"} variant="h6">{content.title}</Typography>
      <Typography>{content.text}</Typography>
      <Typography variant="h6">{content.info}</Typography>
      <div className={styles.map}>
        <Map/>
      </div>
      
    </>
  );
};

export default PlaceCard;
