import React from "react";
import {
  Grid, Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    marginBottom: '8px'
  },
  row: {
    borderTop: '1px solid black'
  }
});

const CardList = ({cards}) => {
  const styles = useStyles();

  if (!cards || cards.length === 0) {
    return (
      <Typography>
          Nemáme žádné vaše kartičky. 
      </Typography>
    );
  }

  return (
    <>
      <Grid className={styles.header} container spacing={1}>
        <Grid item xs={1}>Číslo</Grid>
        <Grid item xs={5}>Otázka</Grid>
        <Grid item xs={6}>Odpověď</Grid>
      </Grid>
      {Object.values(cards).map((card, index) => (
        <Grid className={styles.row} container key={index} spacing={1}>
          <Grid item xs={1}>
            {index + 1}
          </Grid>
          <Grid  item xs={5}>
            {card.question}
          </Grid>
          <Grid item xs={6}>{card.answer}</Grid>
        </Grid>
      ))}
    </>
  );
};

export default CardList;
