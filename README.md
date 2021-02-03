# mbfjs

> React.js and Javascript utilities by MBF

[![NPM](https://img.shields.io/npm/v/mbfjs.svg)](https://www.npmjs.com/package/mbfjs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i mbfjs
```

## Usage

```jsx
import React from 'react'

import { MyComponent } from 'mbfjs'
import 'mbfjs/dist/index.css'

const Example = () => {
  return <MyComponent />
}
```

## Components  


#### LoadingSpinner  

Prop | Description | Default
--- | --- | ---
color | Change the color of the spin in the loading | "#0062ff"
title | Insert a text below the spin in the loading | 


### Carousel / Carousel.Slide
```jsx
const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Slide img="image" title="title" text="text" />
      <Carousel.Slide img="image 2" title="title 2" text="text 2" />
    </Carousel.Slide>
  )
}
```

Prop | Description | Component | default
--- | --- | --- | ---
width | Set the carousel width | Carousel | "540px"
height | Set the carousel height | Carousel | "360px"
transition | Set the css transtion property between slides | Carousel | "all .3s"
||||
img | Set the image of a slide | Carousel.Slide | 
title | Set the title of a slide | Carousel.Slide | 
text | Set the text of a slide | Carousel.Slide | 
color | Set the color of title & text of a slide | Carousel.Slide | 


### notification
```jsx
notification.push("My message", "success")
// A success colored message will popup for some time on the screen
```

Properties | Description | default
--- | --- | ---
push | Display the message on the screen (accept a msg and a type ["success", "warning", "error", "info"]) | 
placement | "top" or "bottom" for the popup placmeent on the screen | "top"
duration | Duration for the popup to stay in miliseconds | 3000
customColor | Default popup color | undefined
setPlacement | Change placement value |
setDuration | Change duration value | 
setCustomColor | Change customColor value | 


## License

MIT © [MaximeBF2000](https://github.com/MaximeBF2000)
