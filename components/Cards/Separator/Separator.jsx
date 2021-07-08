import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

const Separator = ({ content }) => {
  const styles = useStyles();
  return (
    <div className={styles.iconDiv}>
      <img src="/separator.svg" alt="Luciavlada Logo" className={styles.logo} />
    </div>
  );
};

export default Separator;
