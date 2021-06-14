import React, { useState, useRef, useEffect } from "react"

export default function Example() {
  const [name, setName] = useState("")
  //   const [renderCount, setRenderCount]= useState(0)
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </div>
  )
}
