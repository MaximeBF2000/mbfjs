import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import style from "../index.module.css"
import { motion, AnimatePresence } from "framer-motion"
import screenfull from "screenfull"
import { 
  PlayArrow, 
  Pause, 
  Forward10, 
  Replay10, 
  Fullscreen, 
  FullscreenExit,
  VolumeUp,
  VolumeOff
} from "@material-ui/icons"

export default function PlayerOverlay(props) {
  const { video, playerContainerRef, playerRef, playing, setPlaying, played, setPlayed, muted, setMuted, volume, setVolume } = props

  // STATES
  const [inFullscreen, setInFullscreen] = useState(false)
  const [playerBulletPos, setPlayerBulletPos] = useState(0)
  const [videoTimeLeft, setVideoTimeLeft] = useState(0)

  // CONDITIONNAL ICON BUTTONS
  const PlayButton = playing ? Pause : PlayArrow
  const FullscreenButton = inFullscreen ? FullscreenExit : Fullscreen
  const VolumeButton = muted ? VolumeOff: VolumeUp

  // LOGICS
  const toggleFullscreen = () => {
    if(screenfull.isFullscreen) screenfull.exit()
    else screenfull.request(ReactDOM.findDOMNode(playerContainerRef.current))
    setInFullscreen(ps => !ps)
  }

  const handleReplay10 = () => {
    playerRef.current.seekTo(played - 10 < 0 ? 0 : played - 10)
    setPlayed(ps => ps - 10 < 0 ? 0 : ps - 10)
  }

  const handleFastForward10 = () => {
    playerRef.current.seekTo(played + 10 > playerRef.current.getDuration() ? playerRef.current.getDuration() : played + 10)
    setPlayed(ps => ps + 10 > playerRef.current.getDuration() ? playerRef.current.getDuration() : ps + 10)
  }

  // USE EFFECTS
  useEffect(() => { 
    screenfull.onchange(() => setInFullscreen(screenfull.isFullscreen))
  }, [])

  useEffect(() => { playerRef && setVideoTimeLeft(playerRef.current.getDuration()) }, [playerRef])

  useEffect(() => { setPlayerBulletPos(`${played * 100 / playerRef.current.getDuration()}%`) }, [played])

  return (
    <div className={style.overlay} onClick={() => setPlaying(ps => !ps)}>
      <div className={style.overlayTop}></div>

      <AnimatePresence>
        {!playing && (
          <motion.div
            className={style.iconBtnCenterContainer}
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
            exit={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.1 }}
          >
            <PlayButton className={style.iconBtnCenter} />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={style.overlayBottom}
        onClick={() => setPlaying(ps => !ps)}
      >
        <div className={style.progressRow}>
          <div className={style.progressBar}>
            <div className={style.progressBarDone} style={{ width: playerBulletPos }}></div>
            <div className={style.progressBarBullet} style={{ left: playerBulletPos }} />
            <div className={style.progressBarLoaded}></div>
          </div>
          <div className={style.progressTimestamp}>12:15</div>
        </div>
        <div className={style.controlsRow}>
          <div className={style.controlsRowLeft}>
            <PlayButton
              className={`${style.iconBtn} ${style.playBtn}`}
              onClick={() => setPlaying(ps => !ps)}
            />
            <Replay10 
              className={style.iconBtn} 
              onClick={handleReplay10} 
            />
            <Forward10 
              className={`${style.iconBtn} ${style.iconBtnMargin}`}
              onClick={handleFastForward10}
            />
            <div className={style.videoTitle}>{video?.title}</div>
          </div>
          <div className={style.controlsRowRight}>
            <VolumeButton
              className={`${style.iconBtn} ${style.iconBtnMargin}`}
              onClick={() => setMuted(ps => !ps)}
            />
            <FullscreenButton
              className={style.iconBtn}
              onClick={toggleFullscreen}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
