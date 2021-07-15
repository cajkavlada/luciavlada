import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

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
  },
  paragraphBottom: {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  link: {
    cursor: 'pointer',
  }
});

const CovidCard = ({ content }) => {
  const styles = useStyles();
  return (
    <>
      <Typography color="primary" variant="h6">
        {content.title}
      </Typography>
      <Typography display="block" align="justify" variant="h8">
        Jelikož žijeme v nelehké době, dbejte prosím na preventivní covidová opatření. V našem případě prosíme svatebčany, aby si připravili čestné prohlášení, kterým stvrdí jednu z následujících variant: 
      </Typography>
      <ListItem>Negativní RT-PCR test starý nejvýše sedm dní</ListItem>
      <ListItem>Negativní POC (tzv. antigenní) test nejvýše 72 hodin (lze prokázat potvrzením zaměstnavatele o provedení samotestu či čestným prohlášením)</ListItem>
      <ListItem>Prodělání laboratorně potvrzeného onemocnění covidem-19 v době ne delší než 180 dnů přede dnem konání svatby</ListItem>
      <ListItem>Aplikační očkování proti covidu-19, přičemž od poslední dávky vakcíny (druhé u dvoudávkových vakcín, první u jednodávkových vakcín), musí uplynout nejméně čtrnáct dní</ListItem>
      <Typography display="block" align="justify" variant="h8" className={styles.paragraphBottom}>
        Po příjezdu na svatbu předejte podepsané čestné prohlášení pověřené osobě, která jej v případě potřeby předloží kontrole. Pokud na prohlášení zapomenete-nezoufejte, můžete jej podepsat i na místě. K dispozici bude rovněž několik samotestů. 
      </Typography>
      <Typography align="justify" variant="h8">Více informací o covidu a svatbách zde: </Typography>
      <Link href="https://covid.gov.cz/situace/zivotni-udalosti/svatba" >
        <Typography align="justify" variant="h8" color="primary" className={styles.link}>
          Svatba · Covid Portál (gov.cz) 
        </Typography>   
      </Link>  
    </>
  );
};

export default CovidCard;
