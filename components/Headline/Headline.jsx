import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
});

const Headline = ({ children }) => {
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
      <h1 className={styles.title}>{children}</h1>
    </motion.div>
  );
};

export default Headline;
