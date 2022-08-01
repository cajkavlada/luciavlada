import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio,
  IconButton,
  Typography,
  Modal,
  Snackbar,
} from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';

import MuiAlert from '@material-ui/lab/Alert';

import { makeStyles } from "@material-ui/core/styles";

import axios from "../../utility/axios";

const useStyles = makeStyles({
  formControl: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    marginBottom: '16px',
  },
  textfield: {
    flex: 1,
  }
});

const NewCardForm = ({loadCards}) => {
  const styles = useStyles();
  const [question, setQuestion] = useState({
    value: "",
    error: false,
    label: "Otázka",
  });
  const [answer, setAnswer] = useState({
    value: "",
    error: false,
    label: "Odpověď",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleQuestionEdit = (event) => {
    setQuestion({ label: "Otázka", error: false, value: event.target.value });
  };

  const handleAnswerEdit = (event) => {
    setAnswer({ label: "Odpověď", error: false, value: event.target.value });
  };

  const handleCloseSnackbar = () => {
    console.log('asdasd');
    setModalOpen(false);
  }

  const clearForm = () => {
    setQuestion(prevQuestion => ({ ...prevQuestion, value: "" }));
    setAnswer(prevAnswer => ({ ...prevAnswer, value: "" }));
  };

  const handleSubmitForm = () => {
    if (!question.value) {
      setQuestion(prevQuestion => ({ ...prevQuestion, error: true, label: "Vyplňte prosím otázku." }));
    }
    if (!answer.value) {
      setAnswer(prevAnswer => ({ ...prevAnswer, error: true, label: "Vyplňte prosím odpověď." }));
    }
    if (question.value && answer.value) {
      const cartInfo = {
        question: question.value,
        answer: answer.value,
      };

      axios
        .post("/cards.json", cartInfo)
        .then((response) => {
          setModalOpen(true);
          clearForm();
          loadCards();
        })
        .catch((error) => console.log(error));
    }
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <>
      <FormControl className={styles.formControl}>
        <TextField
          className={styles.textfield}
          id="question"
          label={question.label}
          multiline
          required
          error={question.error}
          value={question.value}
          onChange={handleQuestionEdit}
        />
        <TextField
          className={styles.textfield}
          id="answer"
          label={answer.label}
          multiline
          required
          error={answer.error}
          value={answer.value}
          onChange={handleAnswerEdit}
        />
        <IconButton
          type="submit"
          color="primary"
          onClick={handleSubmitForm}
        >
          <AddIcon />
        </IconButton>
      </FormControl>
      <Snackbar
        open={modalOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity="success">
          Nová kartička vytvořena.
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewCardForm;
