import React from "react";
import { Container, Typography, Paper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
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

import Headline from "../components/Headline/Headline";

import schedule from "../assets/content/schedule.json";
import styles from "../styles/harmonogram.module.css";

const harmonogram = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Headline>{schedule.title}</Headline>
      <Timeline align="alternate">
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
                <Typography variant="h6" component="h1">
                  {event.name}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default harmonogram;
