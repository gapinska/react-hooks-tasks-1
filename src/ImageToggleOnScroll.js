import React, { useRef, useEffect, useState } from "react"

export default function ImageToggleOnScroll({ primaryImg, secondaryImg }) {
  const imageRef = useRef(null)

  const [isLoading, setIsLoading] = useState(true)

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect()
    return rect.top >= 0 && rect.bottom <= window.innerHeight
  }

  const [inView, setInView] = useState(false)

  useEffect(() => {
    setInView(isInView())
    setIsLoading(false)
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  const scrollHandler = () => {
    setInView(isInView())
  }
  return (
    <div>
      <img
        src={
          isLoading
            ? "https://iae.news/wp-content/uploads/2021/04/17aa40cc5530dfb653e172cbe086f6ee.gif"
            : inView
            ? secondaryImg
            : primaryImg
        }
        alt=""
        ref={imageRef}
      />
    </div>
  )
}
