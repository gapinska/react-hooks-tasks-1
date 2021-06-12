import React, { useContext } from "react"
import { ThemeProvider } from "./useContextHook"
import Toolbar from "./Toolbar"

function App() {
  return (
    <ThemeProvider>
      <Toolbar />
    </ThemeProvider>
  )
}

export default App
