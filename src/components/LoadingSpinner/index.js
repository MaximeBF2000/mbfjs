import React from "react"
import style from "./index.module.css"

const LoadingSpinner = ({ title, color }) => {
  return (
    <div className={style.container}>
      <div
        className={style.spinner}
        style={{ borderTopColor: color }}
      />
      {title && <div className={style.title}>{title}</div>}
    </div>
  )
}

LoadingSpinner.defaultProps = {
  color: "#0062ff"
}

export default LoadingSpinner
