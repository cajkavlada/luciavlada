import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";
import Headline from "../components/Headline/Headline";
import NewCardForm from "../components/LearningCards/NewCardForm";
import CardList from "../components/LearningCards/CardList";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import axios from "../utility/axios";

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
  button: {
    marginTop: '24px',
  }
}));

const seznamKarticek = (backgroundImg) => {
  const [cards, setCards] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const styles = useStyles();

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = () => {
    axios
      .get("/cards.json")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteLearned = () => {
    axios
      .delete("/learned.json")
      .then((response) => {
        setModalOpen(true);
      })
      .catch((error) => console.log(error));
  };

  const handleCloseSnackbar = () => {
    setModalOpen(false);
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <BackgroundImage path={"/images/flower.jpg"}>
      <Container className={styles.container} maxWidth="sm">
        <Headline>Lucinčiny kartičky</Headline>
        <NewCardForm loadCards={loadCards}/>
        <CardList cards={cards}/>
        <Button
          className={styles.button}
          color="secondary"
          onClick={handleDeleteLearned}
          variant="contained"
        >
          Obnovit naučené kartičky
        </Button>
        <Snackbar
          open={modalOpen}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}>
          <Alert
            onClose={handleCloseSnackbar}
            severity="info">
            Obnoveny naučené kartičky.
          </Alert>
        </Snackbar>
      </Container>
    </BackgroundImage>
  );
};

export default seznamKarticek;
