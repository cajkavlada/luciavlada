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

const RefreshmentCard = ({ content }) => {
  const styles = useStyles();
  return (
    <>
      <Typography color="primary" variant="h6">
        {content.title}
      </Typography>
      <Typography display="block" align="justify" variant="h8">
        V Gardenparku se můžete těšit na čepované pivo, litry vína a několik druhů tvrdého alkoholu. Rádi bychom Vás upozornili, že máme stanovenou částku, kterou můžeme během akce utratit za tvrdý alkohol. Pokud se vyčerpá, chtěli bychom Vás poprosit, abyste si útratu po zbytek akce platili ze svého. Totéž platí i pro nápoje, jež nejsou uvedeny na nápojovém lístku novomanželů. Pokud budete mít zájem dát si něco „navíc“, bude to na Váš účet, samozřejmě pokud Vás nevěsta nebo ženich sami nepozvou. Myslíme rovněž na řidiče a ty, kteří potřebují ředit alkohol vodou nebo jiným nealkoholickým nápojem. 
      </Typography>
      <Typography display="block" align="justify" variant="h8" className={styles.paragraph}>
        Svačinku si s sebou vozit nemusíte. Oběd budeme mít všichni stejný (a nebojte, svíčková to nebude), večer nás bude čekat raut (nevěstu tatarák!), a pro statečné, jež s námi vydrží slavit až do rána, bude v neděli připravena snídaně. 
      </Typography>
      <Typography display="block" align="justify" variant="h8" className={styles.paragraph}>
        Pokud máte nějaký speciální požadavek (intolerance, alergie apod.), dejte nám prosím vědět pomocí přihlašovacího formuláře. Společně najdeme vhodnou alternativu. 
      </Typography>
    </>
  );
};

export default RefreshmentCard;
