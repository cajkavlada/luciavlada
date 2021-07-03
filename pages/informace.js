import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyImage from "next/image";
import Headline from "../components/Headline/Headline";
import FlipLayout from "../components/Layout/FlipLayout/FlipLayout";
import Card from "../components/Cards/Card";
import { useMediaQuery } from 'react-responsive'

import informations from "../assets/content/information.json";

const path = "/images/flower.jpg";
const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '0px',
    paddingRight: '0px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0px',
    }
  },
  card: {
    marginTop: '15px',
  },
  background: {
    position: "fixed",
    zIndex: "-10",
    width: '100%',
    height: "100vh",
    opacity: 0.15,
  },
}));

const informace = () => {
  const styles = useStyles();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  
  return (
    <Container className={styles.container}>
      <div className={styles.background}>
        <MyImage
          className={styles.image}
          src={path}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center 50%"
        />
      </div>
      <Headline>{informations.title}</Headline>
      {isDesktopOrLaptop &&
        <FlipLayout cardsWidth="60%">
          {Object.values(informations.cards).map((info) => (
            <Card key={info.title} content={info} />
          ))}
        </FlipLayout>
      }
      {isTabletOrMobileDevice &&
        <div>
          {Object.values(informations.cards).map((info) => (
              <div className={styles.card}>
                <Card key={info.title} content={info} />
              </div>
          ))}
        </div>
      }
    </Container>
  );
};

export default informace;
