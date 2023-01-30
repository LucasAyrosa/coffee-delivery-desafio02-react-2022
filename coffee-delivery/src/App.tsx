import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CoffeeContextProvider } from "./contexts/CoffeeContext"
import { Router } from "./Router"
import { GlobalStyles } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CoffeeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeeContextProvider>
    </ThemeProvider>
  )
}

export default App
