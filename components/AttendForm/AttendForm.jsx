import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio,
  Button,
  Typography,
  Modal,
} from "@material-ui/core";

import axios from "../../utility/axios";

const AttendForm = () => {
  const [name, setName] = useState({
    value: "",
    error: false,
    label: "Jméno",
  });
  const [surname, setSurname] = useState({
    value: "",
    error: false,
    label: "Přijmení",
  });
  const [mindTents, setMindTents] = useState("false");
  const [wantAccomodation, setWantAccomodation] = useState("false");
  const [mindDogs, setMindDogs] = useState("false");
  const [diet, setDiet] = useState("normal");
  const [dietDetails, setDietDetails] = useState("");
  const [details, setDetails] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleNameEdit = (event) => {
    setName({ label: "Jméno", error: false, value: event.target.value });
  };

  const handleSurnameEdit = (event) => {
    setSurname({ label: "Přijmení", error: false, value: event.target.value });
  };

  const handleTentChange = (event) => {
    setMindTents(event.target.value);
  };

  const handleHotelChange = (event) => {
    setWantAccomodation(event.target.value);
  };

  const handleDogsChange = (event) => {
    setMindDogs(event.target.value);
  };

  const handleDietChange = (event) => {
    setDiet(event.target.value);
  };

  const handleDietDetailsEdit = (event) => {
    setDietDetails(event.target.value);
  };

  const handleDetailsEdit = (event) => {
    setDetails(event.target.value);
  };

  const clearForm = () => {
    setName({ ...name, value: "" });
    setSurname({ ...surname, value: "" });
    setMindTents("false");
    setWantAccomodation("false");
    setMindDogs("false");
    setDiet("normal");
    setDietDetails("");
    setDetails("");
  };

  const handleSubmitForm = () => {
    if (!name.value) {
      setName({ ...name, error: true, label: "Vyplňte prosím jméno" });
    }
    if (!surname.value) {
      setSurname({ ...surname, error: true, label: "Vyplňte prosím přijmení" });
    }
    if (name.value && surname.value) {
      const guest = {
        name: name.value,
        surname: surname.value,
        mindTents: mindTents,
        wantAccomodation: wantAccomodation,
        mindDogs: mindDogs,
        diet: diet,
        dietDetails: dietDetails,
        details: details,
        date: new Date(),
      };

      axios
        .post("/guests.json", guest)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      setModalOpen(true);
    }
  };

  return (
    <>
      <FormControl>
        <TextField
          id="first-name"
          label={name.label}
          required
          error={name.error}
          value={name.value}
          onChange={handleNameEdit}
        />
        <TextField
          id="surname"
          label={surname.label}
          required
          error={surname.error}
          value={surname.value}
          onChange={handleSurnameEdit}
        />
        <FormGroup className="">
          <FormControlLabel
            label="Spaní ve stanu / sdílených pokojích mi vadí?"
            labelPlacement="start"
            control={
              <RadioGroup
                row
                aria-label="tent"
                name="tent"
                value={mindTents}
                onChange={handleTentChange}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="nevadí"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="vadí"
                />
              </RadioGroup>
            }
          />
          <FormControlLabel
            labelPlacement="start"
            label="Chci zařídit ubytování na hotelu? (viz. základní informace)"
            control={
              <RadioGroup
                row
                aria-label="hotel"
                name="hotel"
                value={wantAccomodation}
                onChange={handleHotelChange}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="ne"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="ano"
                />
              </RadioGroup>
            }
          />
          <FormControlLabel
            labelPlacement="start"
            label="Mám problém s velkými psy?"
            control={
              <RadioGroup
                row
                aria-label="dogs"
                name="dogs"
                value={mindDogs}
                onChange={handleDogsChange}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="ne"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="ano"
                />
              </RadioGroup>
            }
          />
        </FormGroup>
        <FormGroup>
          <Typography variant="h6" component="h6">
            Baštím:
          </Typography>
          <RadioGroup
            aria-label="diet"
            name="diet"
            value={diet}
            onChange={handleDietChange}
          >
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label="Zvířátka (Všežravec)"
            />
            <FormControlLabel
              value="vegetarian"
              control={<Radio />}
              label="Rostlinky (Vegetarián)"
            />
            <FormControlLabel
              value="vegan"
              control={<Radio />}
              label="Kamínky (Vegan)"
            />
          </RadioGroup>
          <TextField
            id="diet details"
            multiline
            rowsMax={5}
            placeholder="Doplňující info: Intolerance, diety, speciální přání"
            value={dietDetails}
            onChange={handleDietDetailsEdit}
          />
        </FormGroup>
        <TextField
          id="details"
          multiline
          rowsMax={5}
          placeholder="Doplňující vzkaz pro snoubence:"
          value={details}
          onChange={handleDetailsEdit}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmitForm}
        >
          Odeslat
        </Button>
        <FormHelperText id="my-helper-text">Těšíme se na vás.</FormHelperText>
      </FormControl>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          clearForm();
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {<p>Děkujeme za potvrzení</p>}
      </Modal>{" "}
    </>
  );
};

export default AttendForm;
