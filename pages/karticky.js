import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
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
  },
}));

const karticky = () => {
  const styles = useStyles();

  const [cards, setCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0)
  const [answerHidden, setAnswerHidden] = useState(true);

  useEffect(() => {
    loadCards();
  }, []);

  useEffect(() => {
    if(cards && cards.length > 0) {
      shuffleCards();
    }
  }, [cards]);

  const shuffleCards = () => {
    let newCards = [];
    axios
    .get("/learned.json")
    .then((response) => {
      const res = response.data;
      let learned = [];
      if(res) {
        learned = Object.values(response.data).map(e => e.index)
      }
      cards.forEach((e) => {
        if(learned.length === 0 || !learned.includes(e.question)){
          newCards.push(e)
        };
      });
      let currentIndex = newCards.length,  randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * newCards.length);
      currentIndex--;
  
      // And swap it with the current element.
      [newCards[currentIndex], newCards[randomIndex]] = [
        newCards[randomIndex], newCards[currentIndex]];
      }
      setShuffledCards(newCards);
    })
    .catch((error) => console.log(error));  
  }

  const loadCards = () => {
    axios
      .get("/cards.json")
      .then((response) => {
        setCards(Object.values(response.data));
      })
      .catch((error) => console.log(error));
  };

  const handleLearnedClick = (event) => {
    event.stopPropagation();
    axios.post("/learned.json", {index: shuffledCards[currentCard].question})
      .then((response) => {
        console.log('learned card saved');
        nextCard();
      })
      .catch((error) => console.log(error));
  }

  const handleClick = () => {
    if (answerHidden) {
      setAnswerHidden(false);
    } else {
      setAnswerHidden(true);
      nextCard();
    }
  }

  const nextCard = () => {
    if (currentCard === shuffledCards.length - 1) {
      shuffleCards();
      setCurrentCard(0);
    } else {
      setCurrentCard(prev => prev + 1);
    }
  }

  if (!shuffledCards || shuffledCards.length === 0) {
    return (
      <Typography variant="h2">
          Nemáme žádné vaše kartičky. 
      </Typography>
    );
  }

  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={styles.question}>
        <Typography variant="h2">
          {shuffledCards[currentCard].question}
        </Typography>
      </div>
      <div className={`${styles.answer} ${answerHidden ? styles.hidden : null}`}>
        <Typography variant="h2">
          {shuffledCards[currentCard].answer}
        </Typography>
      </div>
      <Button className={styles.learnedButton} color="secondary" onClick={handleLearnedClick} variant="contained">Už strašlivě umím!</Button>
    </div>
  );
};

export default karticky;
