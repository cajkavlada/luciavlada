import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const backgroundVariant = {
    pageInitial: {
      translateX: 700,
      opacity: 0,
    },
    pageAnimate: {
      translateX: 0,
      opacity: 1,
    },
    pageExit: {
      translateX: -700,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={backgroundVariant}
        transition={{
          duration: 0.35,
        }}
      ></motion.div>
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
