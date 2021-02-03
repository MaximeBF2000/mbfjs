import React from "react"

import { LoadingSpinner, VideoPlayer, Carousel, notification } from "mbfjs"
import "mbfjs/dist/index.css"

import youtubeSubscribeAnimationVideo from "./assets/youtube_subscribe_animation.mp4"
import basketballgymVideo from "./assets/basketballgym.mp4"

const App = () => {
  // TODO : Finir VideoPlayer Component

  const notif = () => {
    notification.setDuration(2000)
    notification.setPlacement("top")
    notification.setCustomColor("#ff5733")
    notification.push("I am a test !")
  }

  return (
    <>
      <button onClick={notif}>Notification</button>
      <LoadingSpinner title="Chargement..." />
      <VideoPlayer 
        video={{
          // url: "https://www.youtube.com/watch?v=dlee0ESZvlc",
          url: youtubeSubscribeAnimationVideo,
          title: "Youtube subscribe animation"
        }}
        controls={true}
      />
      <Carousel width="100%" height="450px" transition=".5s">
        <Carousel.Slide
          img="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Mon titre"
          text="Mon texte"
        />
        <Carousel.Slide
          img="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Mon titre 2"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum molestias magni, velit iure dolorem voluptas repudiandae vel unde eius dolores eveniet eos cupiditate, repellat voluptatum dolor ullam sunt, nobis itaque odit eligendi? Odit, eaque nobis eligendi beatae dolorem molestias asperiores!"
        />
        <Carousel.Slide
          img="https://images.unsplash.com/photo-1612202437538-69202772348a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80"
          title="Mon titre 3"
          text="Mon texte 3"
        />
        <Carousel.Slide
          img="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Mon titre 4"
          text="Mon texte 5"
          color="#000"
        />
      </Carousel>
    </>
  )
}

export default App
