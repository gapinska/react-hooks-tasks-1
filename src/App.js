import React, { useContext } from "react"
import { ThemeProvider } from "./useContextHook"
import Toolbar from "./Toolbar"
import Example from "./Example"
import Example1 from "./Example1"
import Example2 from "./Example2"

function App() {
  return (
    <>
      {/* <Example /> */}
      {/* <ThemeProvider>
      <Toolbar />
    </ThemeProvider> */}
      {/* <Example1 /> */}
      <Example2 />
    </>
  )
}

export default App
