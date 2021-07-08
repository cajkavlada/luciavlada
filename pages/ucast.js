import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyImage from "next/image";
import Headline from "../components/Headline/Headline";
import AttendForm from "../components/AttendForm/AttendForm";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

import attendance from "../assets/content/attendance.json";
const path = "/images/flower.jpg";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "60px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0px",
    },
  },
}));

const potvrzeni = (backgroundImg) => {
  const styles = useStyles();
  return (
    <BackgroundImage path={"/images/flower.jpg"}>
      <Container className={styles.container} maxWidth="sm">
        <Headline>{attendance.title}</Headline>
        <Typography display="block" align="justify">
          {attendance.text}
        </Typography>
        <AttendForm />
      </Container>
    </BackgroundImage>
  );
};

export default potvrzeni;
