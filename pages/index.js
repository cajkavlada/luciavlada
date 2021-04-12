import Headline from "../components/Headline/Headline";

import { makeStyles } from "@material-ui/core/styles";

import MyImage from "next/image";

const path = "/images/32.jpg";

const useStyles = makeStyles({
  body: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "25vh",
    width: "calc(20vw * 0.54 - 2%)",
    borderRadius: 8,
    display: "flex",
    marginLeft: "10px",
    marginTop: "10px",
  },
});

export default function Home() {
  const styles = useStyles();
  return (
    <div>
      <MyImage
        src={path}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <Headline>Lucinka a Vláďa</Headline>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
