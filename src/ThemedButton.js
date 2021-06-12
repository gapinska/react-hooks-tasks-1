import React from "react"
import { useTheme } from "./useContextHook"

export default function ThemedButton() {
  const { theme, toogleTheme } = useTheme()
  return (
    <div>
      <button onClick={toogleTheme} style={theme}>
        Mam style z motywu kontekstowego!
      </button>
    </div>
  )
}
