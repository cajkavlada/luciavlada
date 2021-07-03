import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginBottom: '32px',
    zIndex: 200,
    fontFamily: "aw-conqueror-didot, serif",
    fontWeight: 700,
    fontStyle: "normal",
    paddingTop: "60px"
  },
});

const Headline = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const styles = useStyles();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.1,
          },
        },
      }}
    >
      <Typography variant={isDesktopOrLaptop ? "h3" : "h4"} className={styles.title}>{children}</Typography>
    </motion.div>
  );
};

export default Headline;
