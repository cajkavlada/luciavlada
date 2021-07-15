import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

import Headline from "../components/Headline/Headline";
import axios from "../utility/axios";

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
    <Container>
      <Headline>{guestListInfo.title}</Headline>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Počet</TableCell>
              {Object.values(guestListInfo.columns).map((column, index) => (
                <TableCell key={index}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(guests).map((guest, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {guest.name}
                </TableCell>
                <TableCell>{guest.surname}</TableCell>
                <TableCell>
                  {guest.mindTents === "true" ? "Stan ne" : "Stan ano"}
                </TableCell>
                <TableCell>
                  {guest.wantAccomodation === "true" ? "Hotel ano" : "Hotel ne"}
                </TableCell>
                <TableCell>
                  {guest.mindDogs === "true" ? "Bojím se psů" : "Psi nevadí"}
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
    </Container>
  );
};

export default seznam;
