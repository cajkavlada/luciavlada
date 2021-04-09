import React from "react";
import Headline from "../components/Headline/Headline";
import AttendForm from "../components/AttendForm/AttendForm";
import attendance from "../assets/content/attendance.json";
import { Typography } from "@material-ui/core";

const potvrzeni = () => {
  return (
    <>
      <Headline>{attendance.title}</Headline>
      <Typography>{attendance.text}</Typography>
      <AttendForm />
    </>
  );
};

export default potvrzeni;
