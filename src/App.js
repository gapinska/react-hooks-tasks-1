import React, { useContext } from "react"
import { ThemeProvider } from "./useContextHook"
import Toolbar from "./Toolbar"
import Example from "./Example"
import Example1 from "./Example1"
import Example2 from "./Example2"
import Example3 from "./Example3"

function App() {
  return (
    <>
      {/* <Example /> */}
      {/* <ThemeProvider>
      <Toolbar />
    </ThemeProvider> */}
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      <Example3 />
    </>
  )
}

export default App
