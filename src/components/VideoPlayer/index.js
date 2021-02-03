import React, { useState, useEffect, useRef } from 'react'
import style from "./index.module.css"
import ReactPlayer from "react-player"
import PlayerOverlay from "./Overlay"


const VideoPlayer = (props) => {
  const { video, color, controls } = props

  useEffect(() => {
    color && document.documentElement.style.setProperty("--player-color", color)
  }, [])
  
  const isYoutubeVideo = video?.url.includes("https://www.youtube.com/watch")

  // STATE
  const [playing, setPlaying] = useState(false)
  const [played, setPlayed] = useState(0)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.7)

  // REFS
  const playerContainerRef = useRef(null)
  const playerRef = useRef(null)

  // LOGICS
  const handleVideoEnd = () => {
    setPlaying(false)
    setPlayed(0)
  }

  const handleVideoProgress = progress => setPlayed(progress.playedSeconds)

  const handleKeyUp = e => {
    console.log({key: e.key})
    switch (e.key) {
      case "Space":
        console.log("play/pause")
        break
      default:
        return
    }
  }


  if(video?.url) return (
    <div className={style.playerContainer} ref={playerContainerRef} onKeyUp={handleKeyUp}>
      <ReactPlayer
        className={style.player}
        url={video?.url}
        ref={playerRef}
        controls={isYoutubeVideo ? true : false}
        playing={isYoutubeVideo ? undefined : playing}
        muted={muted}
        volume={volume}
        onProgress={handleVideoProgress}
        onEnded={handleVideoEnd}
      />

      {!(isYoutubeVideo || !controls) && (
        <PlayerOverlay
          video={video}
          playerContainerRef={playerContainerRef}
          playerRef={playerRef}
          playing={playing}
          setPlaying={setPlaying}
          played={played}
          setPlayed={setPlayed}
          muted={muted}
          setMuted={setMuted}
          volume={volume}
          setVolume={setVolume}
        />
      )}
    </div>
  )
  return null
}

VideoPlayer.defaultProps = {
  color: "#FF5733",
  controls: true
}

export default VideoPlayer