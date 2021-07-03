import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";

import MyImage from "next/image";

const path = "/images/32.jpg";

const useStyles = makeStyles({
  background: {
    position: "absolute",
    zIndex: "-10",
  },
});

const BackgroundTransition = ({ route }) => {
  const styles = useStyles();

  const variant = {
    pageInitial: {
      translateX: 0,
      opacity: 0,
    },
    pageAnimate: {
      translateX: 0,
      opacity: 1,
    },
    pageExit: {
      translateX: 0,
      opacity: 0,
    },
  };

  return (
    <motion.div
      key={`${route}aaa`}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={variant}
      transition={{
        duration: 0.35,
      }}
    >
      <div className={styles.background}>
        <MyImage
          src={path}
          alt="Picture of the author"
          width={1200}
          height={1080}
        />
      </div>
    </motion.div>
  );
};

export default BackgroundTransition;
