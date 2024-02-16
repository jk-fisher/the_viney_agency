import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import { config } from "react-spring";
import Image from "next/image";
import styles from "../../styles/ImageCarousel.module.css";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

const ImageCarousel = ({ data }) => {
    const timer = useRef();

    const [state, setState] = useState({
            goToSlide: 0,
            offsetRadius: 3,
            showNavigation: false,
            config: config.gentle, 
            autoPlay: true
    });

    const imageArray = data.map((image, index) => {
        const current_slide = state.goToSlide % data.length;
        if(index == current_slide){
              return {
                key: index,
                content: 
                <Link 
                  href={{
                  pathname: '/authors/[authorID]/[bookID]',
                  query: {
                              authorID: image.authorID,
                              bookID: image.bookID
                                }
                          }}
                  as={`/authors/${image.authorID}/${image.bookID}`}>
                  <a>
                    <Image className={styles.image} src={`/images/carousel_images/${image.bookID}.jpg`} alt={index} width={250}
                  height={350}/>
                  </a>
                </Link>}
        }else{
              return {
                      key: index,
                      content: <Image className={styles.image} src={`/images/carousel_images/${image.bookID}.jpg`} alt={index} width={500}
                      height={500} onClick={() => {
                        setState({ goToSlide: index, offsetRadius: state.offsetRadius }); 
                        // clearInterval(timer.current)  
                      }}/>
            }
            }
    })
    imageArray.map((slide, index) => {
      return slide
    })

            //stops the automatic slide when clicked
            // clearInterval(timer.current)


    // const onChangeInput = (e) => {
    //     setState({
    //     [e.target.name]: parseInt(e.target.value, 10) || 0
    //     });
    // };

    let xDown = null;
    let yDown = null;

    const getTouches = (evt) => {
        return (
        evt.touches || evt.originalEvent.touches // browser API
        ); 
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