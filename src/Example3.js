import React, { useState, useEffect } from "react"

export default function Example3() {
  //   const [isLoading, setIsLoading] = useState(true)

  const random_boolean = Math.random() >= 0.5
  console.log(random_boolean === true)
  const [isLoading, setIsLoading] = useState(random_boolean === true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <input placeholder="Enter some text" />
      )}
    </div>
  )
}
