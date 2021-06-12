import React, { useContext, useState } from "react"

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}

const ThemeContext = React.createContext(themes.light)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw Error("context must be within a Provider")
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)
  const toogleTheme = () =>
    setTheme(theme === themes.light ? themes.dark : themes.light)
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
