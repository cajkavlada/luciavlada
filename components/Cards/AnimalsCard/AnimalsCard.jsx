import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    height: "100px",
    //borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginLeft: "0.5rem",
    height: "4em",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "transparent",
  },
  blockText: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
  paragraph: {
    paddingTop: '16px',
  }
});

const AnimalsCard = ({ content }) => {
  const styles = useStyles();
  return (
    <>
      <Typography color="primary" variant="h6">
        {content.title}
      </Typography>
      <Typography display="block" align="justify" variant="h8">
        Nevěsta prosí o vyjádření ohledně velkých psů. Její rodina má tři krásné chlupáče (afgánský chrt). V den svatby pro ně nebudeme mít hlídání, a tak budou slavit s námi. Pokud by se někdo bál, poznamenejte to prosím do přihlašovacího formuláře. Uděláme vše, co bude v našich silách, abyste s našimi čtyřnohými miláčky přišli do kontaktu co nejméně.
      </Typography>
    </>
  );
};

export default AnimalsCard;
