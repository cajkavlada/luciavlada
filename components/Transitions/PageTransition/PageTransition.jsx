import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundTransition from "./BackgroundTransition/BackgroundTransition";
import { makeStyles } from "@material-ui/core/styles";

const PageTransition = ({ children, route }) => {
  const variant = {
    pageInitial: {
      translateX: -700,
      opacity: 0,
    },
    pageAnimate: {
      translateX: 0,
      opacity: 1,
    },
    pageExit: {
      translateX: 700,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => console.log("exit")}
      initial={false}
    >
      <motion.div
        key={route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={variant}
        transition={{
          duration: 0.35,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
