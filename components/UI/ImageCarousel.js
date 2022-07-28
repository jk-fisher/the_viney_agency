import React, { useState, useEffect, useRef } from "react";
import { config } from "react-spring";
import Image from "next/image";
import styles from "../../styles/ImageCarousel.module.css";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-spring-3d-carousel-2"), {
  ssr: false,
});

const ImageCarousel = ({ images }) => {
    const timer = useRef();

    const [state, setState] = useState({
            goToSlide: 0,
            offsetRadius: 6,
            showNavigation: false,
            config: config.gentle
    });

    console.log('images', images)

    const imageArray = images.slice(1).map((imageId, index) => {
        return {
            key: imageId,
            content: <Image className={styles.image} src={`/images/carousel_images/${imageId}.jpg`} alt={index} width={1000}
            height={1000} onClick={() => setState({ goToSlide: index, offsetRadius: state.offsetRadius })}/>
        } 
    })
    imageArray.map((slide, index) => {
      return slide
    })

            //stops the automatic slide when clicked
            // clearInterval(timer.current)


    const onChangeInput = (e) => {
        setState({
        [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };

    let xDown = null;
    let yDown = null;

    const getTouches = (evt) => {
        return (
        evt.touches || evt.originalEvent.touches // browser API
        ); // jQuery
    };

    const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
        return;
        }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1, offsetRadius: state.offsetRadius });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1, offsetRadius: state.offsetRadius });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  const tick = () => {
    setState((prevIndex) => { 
        console.log('tick', prevIndex)
        return { ...prevIndex, goToSlide: prevIndex.goToSlide + 1 }
    })
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      tick()
    }, 3800);
    return () => clearInterval(timer.current);
  }, []);

  return (

      <div
        className={styles.carousel}
        // style={{ boxSizing: "content-box", width: "100%", margin: "0 auto" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Carousel 
          slides={imageArray}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
      </div>

  );
};

export { ImageCarousel as default, Carousel }