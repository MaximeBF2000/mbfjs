export const notification = {
  placement: "top",
  duration: 3000,
  setPlacement: newPlacement => notification.placement = newPlacement,
  setDuration: newDuration => notification.duration = newDuration,
  customColor: undefined,
  setCustomColor: newColor => notification.customColor = newColor,
  push: (text, type) => {
    const div = document.createElement("div")
    div.style.cssText = `
      z-index: 3;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      padding: .5rem 1rem;
      border-radius: .3rem;
      color: #fff;
    `
    if(notification.placement === "bottom") div.style.bottom = "1rem"
    else div.style.top = "1rem"

    switch(type) {
      case "info":
        div.style.backgroundColor = "rgba(33, 150, 243)"
        break
      case "warning":
        div.style.backgroundColor = "rgba(255, 152, 0)"
        break
      case "error":
        div.style.backgroundColor = "rgba(244, 67, 54)"
        break
      case "success":
        div.style.backgroundColor = "rgba(56, 219, 61)"
        break
      default:
        div.style.backgroundColor = notification.customColor ?? "rgba(56, 219, 61)"
    }

    div.textContent = text
    document.body.appendChild(div)
    setTimeout(() => document.body.removeChild(div), notification.duration)
  }
}