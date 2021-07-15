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

const DressCard = ({ content }) => {
  const styles = useStyles();
  return (
    <>
      <Typography color="primary" variant="h6">
        {content.title}
      </Typography>
      <Typography display="block" align="justify" variant="h8">
        Svatba se ponese v odstínech světle modré a meruňkové. Pokud se v nich necítíte, barvy nejsou pro Váš outfit povinné. Pouze Vás prosíme, oblékněte si něco pohodlného a slavnostnějšího. Stejná pravidla platí i pro ty nejmenší.
      </Typography>
      <Typography display="block" align="justify" variant="h8" className={styles.paragraph}>
        <Box fontWeight='fontWeightBold' display='inline'>Pánové, </Box> 
        jestliže nemáte k dispozici oblek-nevadí, spokojíme se i s černými riflemi a košilí. Svatba proběhne v létě, myslete na tom abyste se nám „neuvařili“.
      </Typography>
      <Typography display="block" align="justify" variant="h8" className={styles.paragraph}>
        <Box fontWeight='fontWeightBold' display='inline'>Dámy, </Box> 
        černá barva krásně zeštíhluje a tvaruje postavu, přesto Vás však prosíme abyste pro náš Velký den zvolily jinou barvu šatů/sukně. Rovněž se vyvarujte bílé barvě, tu přenechte v tento den nevěstě.
      </Typography>
      <Typography display="block" align="justify" variant="h8" className={styles.paragraph}>
        Důležitou součástí outfitu bývá 
        <Box fontWeight='fontWeightBold' display='inline'> obuv</Box> 
        . Snad zavčasu Vás upozorňujeme, že se celá akce bude odehrávat na zahradě. Střevíčky na jehlovém podpatku nechtě raději ve skříni, mohly by den značně znepříjemnit. 
      </Typography>
      <Typography display="block" align="justify" variant="h8" className={styles.paragraph}>
        Pokud za námi vážíte dlouhou cestu a nechcete si během jízdy pomačkat šaty/oblek, můžete se převléknout až na místě. 
      </Typography>
    </>
  );
};

export default DressCard;
