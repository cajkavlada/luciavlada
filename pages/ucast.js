import React from "react";
import { Container, Typography } from "@material-ui/core";

import Headline from "../components/Headline/Headline";
import AttendForm from "../components/AttendForm/AttendForm";

import attendance from "../assets/content/attendance.json";

const potvrzeni = () => {
  return (
    <Container maxWidth="sm">
      <Headline>{attendance.title}</Headline>
      <Typography>{attendance.text}</Typography>
      <AttendForm />
    </Container>
  );
};

export default potvrzeni;
