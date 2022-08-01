import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "../utility/axios";

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightGreen',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  question: {
    padding: '16px',
  },
  answer: {
    padding: '16px',
    backgroundColor: 'lightBlue'
  },
  hidden: {
    visibility: 'hidden',
  }
}));

const karticky = () => {
  const styles = useStyles();

  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0)
  const [answerHidden, setAnswerHidden] = useState(true);

  useEffect(() => {
    loadCards();
  }, []);

  useEffect(() => {
    if(cards) {
      getRandomCard();
    }
  }, [cards])

  const loadCards = () => {
    axios
      .get("/cards.json")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => console.log(error));
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const getRandomCard = () => {
    console.log(cards.length);
    setCurrentCard(getRandomInt(0, Object.values(cards).length));
  };

  const handleClick = () => {
    if (answerHidden) {
      setAnswerHidden(false);
    } else {
      setAnswerHidden(true);
      getRandomCard();
    }
  }

  if (!cards || cards.length === 0) {
    return (
      <Typography variant="h2">
          Nemáme žádné vaše kartičky. 
      </Typography>
    );
  }

  console.log(cards);
  console.log(currentCard);

  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={styles.question}>
        <Typography variant="h2">
          {Object.values(cards)[currentCard].question}
        </Typography>
      </div>
      <div className={`${styles.answer} ${answerHidden ? styles.hidden : null}`}>
        <Typography variant="h2">
          {Object.values(cards)[currentCard].answer}
        </Typography>
      </div>
    </div>
  );
};

export default karticky;
