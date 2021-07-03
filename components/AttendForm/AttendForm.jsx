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
  Snackbar, 
} from "@material-ui/core";

import MuiAlert from '@material-ui/lab/Alert';

import { makeStyles } from "@material-ui/core/styles";
import DoubleRadioWithLabel from "./DoubleRadioWithLabel/DoubleRadioWithLabel";

import axios from "../../utility/axios";

const useStyles = makeStyles({
  formControl: {
    width: '100%'
  },
  formGroup: {
    marginTop: '8px'
  },
  formElement: {
    marginTop: '16px'
  },
  radioGroup: {
    paddingLeft: '16px'
  }
});

const AttendForm = () => {
  const styles = useStyles();
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

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

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
      <FormControl className={styles.formControl}>
        <FormGroup className={styles.formGroup}>
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
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <DoubleRadioWithLabel 
            label={"Spaní ve stanu / sdílených pokojích mi vadí?"}
            ariaLabel={"tent"}
            value={mindTents}
            onChange={handleTentChange}
            positiveRadioLabel={"vadí"}
            negativeRadioLabel={"nevadí"}
          />
          <DoubleRadioWithLabel 
            label={"Chci zařídit ubytování na hotelu? (viz. základní informace)"}
            ariaLabel={"hotel"}
            value={wantAccomodation}
            onChange={handleHotelChange}
            positiveRadioLabel={"ano"}
            negativeRadioLabel={"ne"}
          />
          <DoubleRadioWithLabel 
            label={"Mám problém s velkými psy?"}
            ariaLabel={"dogs"}
            value={mindDogs}
            onChange={handleDogsChange}
            positiveRadioLabel={"ano"}
            negativeRadioLabel={"ne"}
          />
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <Typography variant="h6" component="h6">
            Baštím:
          </Typography>
          <RadioGroup
            className={styles.radioGroup}
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
          className={styles.formElement}
          id="details"
          multiline
          rowsMax={5}
          placeholder="Doplňující vzkaz pro snoubence:"
          value={details}
          onChange={handleDetailsEdit}
        />
        <Button
          className={styles.formElement}
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmitForm}
        >
          Odeslat
        </Button>
        <FormHelperText id="my-helper-text">Těšíme se na vás.</FormHelperText>
      </FormControl>
      <Snackbar
        open={modalOpen}
        autoHideDuration={3000}
        onClose={() => {
          setModalOpen(false);
          clearForm();
        }}>
        <Alert
          onClose={() => {
            setModalOpen(false);
            clearForm();
          }}
          severity="success">
          Děkujeme za potvrzení!
        </Alert>
      </Snackbar>
      {/*<Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          clearForm();
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {<p>Děkujeme za potvrzení</p>}
      </Modal>{"Děkujeme za potvrzení!"}*/}
    </>
  );
};

export default AttendForm;
