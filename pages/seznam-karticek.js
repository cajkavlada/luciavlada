import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
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
}));

const seznamKarticek = (backgroundImg) => {
  const [cards, setCards] = useState([]);
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

  return (
    <BackgroundImage path={"/images/flower.jpg"}>
      <Container className={styles.container} maxWidth="sm">
        <Headline>Lucinčiny kartičky</Headline>
        <NewCardForm loadCards={loadCards}/>
        <CardList cards={cards}/>
      </Container>
    </BackgroundImage>
  );
};

export default seznamKarticek;
