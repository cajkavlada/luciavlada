import Headline from "../components/Headline/Headline";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from 'react-responsive'
import MyImage from "next/image";
import { Hidden, Container } from "@material-ui/core";

const path = "/images/10.png";
const names = "/images/names.png"
const width = 4640;
const height = 3472;


const useStyles = makeStyles(theme => ({
  background: {
    position: "absolute",
    zIndex: "-10",
    width: '100%',
    height: "calc(100vh - 64px)",
  },
  image: {
    height: '100vh',
    position: "absolute",
    width: '100%',
  },
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
    [theme.breakpoints.up('xs')]: {
      paddingTop: '64px',
    }
  },
  headline: {
    position: 'absolute',
    top: '25%',
    left: '70%',
    transform: 'translate(-50%, -50%)'
  }
}));

export default function Home() {
  const styles = useStyles();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  return (
    <Container className={styles.container}>
      <MyImage
        className={styles.image}
        src={path}
        alt="Picture of the author"
        layout="fill"
        objectFit="scale-down"
        objectPosition="center 80%"
      />
      { /*<div className={styles.background}>
        <MyImage
          className={styles.image}
          src={path}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center 80%"
        />
      </div>
      <div className={styles.headline}>
        <MyImage
          className={styles.names}
          src={names}
          alt="Picture of the author"
          width={1050}
          height={550}
        />
      </div>
      */}
    </Container>
  );
}
