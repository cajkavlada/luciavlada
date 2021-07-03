import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyImage from "next/image";
import Headline from "../components/Headline/Headline";
import AttendForm from "../components/AttendForm/AttendForm";

import attendance from "../assets/content/attendance.json";
const path = "/images/flower.jpg";
const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0px',
    }
  },
  background: {
    position: "fixed",
    zIndex: "-10",
    width: '100%',
    height: "100vh",
    opacity: 0.15,
  },
}));

const potvrzeni = (backgroundImg) => {
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
      <Container className={styles.container} maxWidth="sm" style={{backgrounImage: "url(../assets/images/32.jpg)"}}>
        <Headline>{attendance.title}</Headline>
        <Typography>{attendance.text}</Typography>
        <AttendForm />
      </Container>
    </>
  );
};

export default potvrzeni;
