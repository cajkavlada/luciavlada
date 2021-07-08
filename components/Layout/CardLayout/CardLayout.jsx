import React from "react";
import { useMediaQuery } from 'react-responsive'
import FlipLayout from "../FlipLayout/FlipLayout";

const CardLayout = ({ children}) => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  return (
    <>
      {isDesktopOrLaptop &&
        <FlipLayout cardsWidth="60%">
          {children}
        </FlipLayout>
      }
      {isTabletOrMobileDevice && children}
    </>
  );
};

export default CardLayout;
