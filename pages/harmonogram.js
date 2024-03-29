import React from "react";
import { Container, Typography, Paper } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineSeparator,
  TimelineOppositeContent,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
import { ReactSVG } from "react-svg";
import { useMediaQuery } from 'react-responsive';
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";


import Headline from "../components/Headline/Headline";

import schedule from "../assets/content/schedule.json";

const path = "/images/flower.jpg";
const useStyles = makeStyles(theme => ({
  paper: {
    padding: "6px 16px",
  },
  secondarytail: {
    backgroundColor: "blue",
  },
  bugTypo: {
    visibility: "hidden",
  },
  icon: {
    width: "32px",
    height: "32px",
  },
  whiteIcon: {
    fill: "white",
  },
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0px',
    }
  },
  timeline: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const harmonogram = () => {
  const theme = useTheme();
  const styles = useStyles();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  return (
    <BackgroundImage path={"/images/flower.jpg"}>
      <Container className={styles.container} maxWidth="sm">
        <Headline>{schedule.title}</Headline>
        <Timeline align="alternate" className={styles.timeline}>
          {Object.values(schedule.events).map((event, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {event.time}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color={event.icon.background}
                  variant={event.icon.variant}
                >
                  <ReactSVG
                    src={`icons/${event.icon.name}.svg`}
                    style={{
                      width: "32px",
                      height: "32px",
                      padding: "2px",
                      fill: theme.palette[event.icon.colorType][event.icon.color],
                    }}
                  />
                </TimelineDot>
                {index !== Object.keys(schedule.events).length - 1 && (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={styles.paper}>
                  <Typography variant={isDesktopOrLaptop ? "h5" : "h8"} component={isDesktopOrLaptop ? "h6" : "h4"}>
                    {event.name}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </BackgroundImage>
  );
};

export default harmonogram;
