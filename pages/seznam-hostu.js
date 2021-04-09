import React, { useState, useEffect } from "react";
import axios from "../utility/axios";

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import styles from "../styles/seznam-hostu.module.css";
import Headline from "../components/Headline/Headline";
import guestListInfo from "../assets/content/guest-list.json";

const seznam = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    loadGuests();
  }, []);

  const loadGuests = () => {
    axios
      .get("/guests.json")
      .then((response) => {
        setGuests(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Headline>{guestListInfo.title}</Headline>
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.values(guestListInfo.columns).map((column, index) => (
                <TableCell key={index}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(guests).map((guest, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {guest.name}
                </TableCell>
                <TableCell>{guest.surname}</TableCell>
                <TableCell>
                  {guest.mindTents === "true"
                    ? "Nechci"
                    : "Může být"}
                </TableCell>
                <TableCell>
                  {guest.wantAccomodation === "true"
                    ? "5* prosím"
                    : "K čemu"}
                </TableCell>
                <TableCell>
                  {guest.mindDogs === "true" ? "Bojím" : "K noze"}
                </TableCell>
                <TableCell>
                  {guest.diet === "normal"
                    ? "Zvířátka"
                    : guest.diet === "vegetarian"
                    ? "Kytičky"
                    : "Kameny"}
                </TableCell>
                <TableCell>{guest.dietDetails}</TableCell>
                <TableCell>{guest.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default seznam;
