import React from "react";
import styles from "./Headline.module.css";
import { motion } from "framer-motion";

const Headline = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .1
          }
        },
      }}
    >
      <h1 className={styles.title}>{children}</h1>
    </motion.div>
  );
};

export default Headline;
