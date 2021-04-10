import React from "react";
import { Container, Typography } from "@material-ui/core";

import Headline from "../components/Headline/Headline";
import AttendForm from "../components/AttendForm/AttendForm";

import attendance from "../assets/content/attendance.json";

const potvrzeni = (backgroundImg) => {
  return (
    <Container maxWidth="sm" style={{backgrounImage: "url(../assets/images/32.jpg)"}}>
      <Headline>{attendance.title}</Headline>
      <Typography>{attendance.text}</Typography>
      <AttendForm />
    </Container>
  );
};

export default potvrzeni;
