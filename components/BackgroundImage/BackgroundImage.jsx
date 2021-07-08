import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MyImage from "next/image";

const useStyles = makeStyles(theme => ({
  background: {
    position: "fixed",
    zIndex: "-10",
    width: '100%',
    height: "100vh",
    opacity: 0.15,
  },
}));

const BackgroundImage = ({ children, path }) => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.background}>
        <MyImage
          className={styles.image}
          src={path}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center 50%"
        />
      </div>
      {children}
    </>
  );
};

export default BackgroundImage;