import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
//import Carousel from 'react-gallery-carousel';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Headline from "../components/Headline/Headline";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

import photos from "../assets/content/galleryUrls.json";


const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0px',
    }
  },
}));

const galerie = () => {
  const styles = useStyles();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <BackgroundImage path={"/images/flower.jpg"}>
      <Container className={styles.container}>
        <Headline>Galerie</Headline>
        <div>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    src: x.srcFull,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
                </ModalGateway>

        </div>
      </Container>
    </BackgroundImage>
  );
};

export default galerie;
