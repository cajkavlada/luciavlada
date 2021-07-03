import React from "react";

import { FormControlLabel, FormLabel, FormControl, Grid, RadioGroup, Radio } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formGrid: {
    marginTop: '16px',
  },
  labelGrid: {
    display: 'flex',
    alignItems: 'center',
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: '4px'
  },
  formLabel: {
    color: 'black',
    "&.Mui-focused": {
      color: 'black'
    }
  }
});

const DoubleRadioWithLabel = ({
  label,
  ariaLabel,
  value,
  onChange,
  positiveRadioLabel,
  negativeRadioLabel,
}) => {
  const styles = useStyles();
  return (
    <Grid container className={styles.formGrid}>
      <Grid item xs={9} className={styles.labelGrid}>
        <FormLabel className={styles.formLabel}>{label}</FormLabel>
      </Grid>
      <Grid item xs={3}>
        <RadioGroup
          className={styles.radioGroup}
          row
          aria-label={ariaLabel}
          name={ariaLabel}
          value={value}
          onChange={onChange}
        >
          <FormControlLabel
            value="false"
            control={<Radio />}
            label={negativeRadioLabel}
          />
          <FormControlLabel
            value="true"
            control={<Radio />}
            label={positiveRadioLabel}
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export default DoubleRadioWithLabel;
