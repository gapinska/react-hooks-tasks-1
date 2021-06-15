import React from "react"
import ImageToggleOnScroll from "./ImageToggleOnScroll"

export default function Example2() {
  const images = []

  for (let i = 0; i < 10; i++) {
    images.push(
      <ImageToggleOnScroll
        key={i}
        primaryImg="/salma.jpg"
        secondaryImg="/j-lo.jpg"
      />
    )
  }
  return <div>{images}</div>
}
