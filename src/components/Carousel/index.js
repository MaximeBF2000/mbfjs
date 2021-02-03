import React, { useState, useEffect, Fragment } from "react"
import style from "./index.module.css"
import { ArrowBackIos, ArrowForwardIos, PowerSettingsNew } from "@material-ui/icons"

const Carousel = props => {
  const { children, width, height, transition, autoslide } = props
  const [pos, setPos] = useState(0)
  const [slideNb, setSlideNb] = useState(0)

  const goToPreviousSlide = () => {
    if(slideNb > 0) {
      setPos(ps => ps + parseFloat(width))
      setSlideNb(ps => ps - 1)
    } else {
      setPos(-parseFloat(width) * (children.length - 1))
      setSlideNb(children.length - 1)
    }
  }

  const goToNextSlide = () => {
    if(slideNb < children.length - 1) {
      setPos(ps => ps - parseFloat(width))
      setSlideNb(ps => ps + 1)
    } else {
      setPos(0)
      setSlideNb(0)
    }
  }

  // TO FIX
  useEffect(() => {
    if(autoslide) {
      const interval = setInterval(() => goToNextSlide(), autoslide)
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div className={style.carouselContainer} style={{ width: width, height: height }}>
      {children.length > 1 && (
        <Fragment>
          <ArrowBackIos 
            className={`${style.carouselArrow} ${style.ca_left}`}
            onClick={goToPreviousSlide}
          />
          <ArrowForwardIos 
            className={`${style.carouselArrow} ${style.ca_right}`}
            onClick={goToNextSlide}
          />
        </Fragment>
      )}
      <div 
        className={style.carouselSlides} 
        style={{ 
          transform: `translateX(${pos}${width.replace(/[0-9]/g, "")})`,
          transition: transition
        }}
      >
        {children}
      </div>
      {children.length > 1 && (
        <div className={style.carouselTilesRow}>
          {Array(children.length).fill().map((_, i) => (
            <div 
              className={`${style.carouselTile} ${i === slideNb ? style.carouselTileActive : ""}`}
              key={i}
              onClick={() => {
                setPos(-i * parseFloat(width))
                setSlideNb(i)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

Carousel.Slide = ({ img, title, text, color, placement }) => {
  return (
    <div className={style.carouselSlide}>
      <div className={style.carouselImgContainer}>
        <img src={img} alt={title} className={style.carouselImg} />
      </div>
      {(title || text) && (
        <div 
          className={style.carouselTextblock} 
          style={{ 
            color: color, 
            bottom: placement === "center" ? "50%" : "20%",
            transform: `translateX(-50%) ${placement === "center" ? "translateY(50%)" : ""}`
          }}
        >
          {title && <h3 className={style.carouselTitle}>{title}</h3>}
          {text && <p className={style.carouselText}>{text}</p>}
        </div>
      )}
    </div>
  )
}

Carousel.defaultProps = {
  width: "540px",
  height: "360px",
  transition: "all .5s"
}

Carousel.Slide.defaultProps = {
  color: "#fff",
  placement: "center"
}

export default Carousel
