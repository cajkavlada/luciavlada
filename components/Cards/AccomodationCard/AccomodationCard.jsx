import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
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
  },
  link: {
    cursor: 'pointer',
  }
}));

const AccomodationCard = ({ content }) => {
  const styles = useStyles();
  return (
    <>
      <Typography color="primary" variant="h6">
        {content.title}
      </Typography>
      <Typography display="block" align="justify" variant="h8">
        Předpokládáme, že nás svatební den nebude končit s půlnocí. Z tohoto důvodu ubytování nezajišťujeme. Nicméně máte možnost postavit si vedle areálu Gardenparku stan nebo spát přímo pod hvězdami. Rádi bychom doplnili, že i přesto bude k dispozici pár pokojů s tím, že kdo dřív přijde, ten spí na posteli. Kdo nepotřebuje ani stan, ani postel, může spát v témže pokoji na zemi. Přibalte tedy s sebou alespoň spacák nebo deku. 
      </Typography>
      <Typography display="block" align="justify" variant="h8" className={styles.paragraph}>
        Pokud Vám žádná z výše uvedených variant nevyhovuje, ozvěte se nám a my Vám můžeme zajistit ubytování v nedalekém hotelu Hesperia. Ale pozor, zde si musíte zaplatit nocleh sami. 
      </Typography>   
      <Typography display="block" align="center" variant="h8" className={styles.paragraph}>
        Hotel Hesperia 
      </Typography>     
      <Typography display="block" align="center" variant="h8">
        Brněnská 55
      </Typography>     
      <Typography display="block" align="center" variant="h8">
        779 00, Olomouc
      </Typography>     
      <Link href="https://hotel-hesperia.cz/" >
        <Typography display="block" align="center" variant="h8" color="primary" className={styles.link}>
          Hotel Hesperia ***
        </Typography>   
      </Link>  
    </>
  );
};

export default AccomodationCard;
