import React from "react"
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver"

export default function Example1() {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/salma.jpg"
        secondaryImg="/j-lo.jpg"
        alt="salma"
      />
    </div>
  )
}
