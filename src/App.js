import { ColorModeContext, useMode } from "./theme"
import { ThemeProvider } from "@mui/material"
import CssBaseLine from "@mui/material/CssBaseline"
import { Routes, Route } from "react-router-dom"
import TopBar from "./scenes/global/TopBar"
import SideBar from "./scenes/global/SideBar"
import Home from "./scenes/Home"
import ArmorBuilder from "./scenes/ArmorBuilder"
import { Box } from "@mui/material"

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <div className="app">
          <main className="content">
            <Box display="flex" flexDirection="row" minHeight="100%" width="100%">
              <SideBar />

              <Box width="100%">
                <TopBar />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/ArmorBuilder" element={<ArmorBuilder />} />
                </Routes>

              </Box>

            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
