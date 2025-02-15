import { useEffect, useState } from "react";
import { product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setproducts] = useState<product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const palletType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: (palletType==='light') ? 'eaeaea': '#121212'
      }
    }
  });
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setproducts(data))
  }, [])
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    <Box
    sx={{minHeight: '100vh',
      background: darkMode? 'radial-gradient(circle, #1e3aBa, #111B27)'
      : 'radial-gradient(circle, #baecf9, #f0f9ff)',
      py:6
    }}>
    <Container maxWidth='xl' sx={{marginTop: 8}}>
      <Catalog products={products}/>
    </Container>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default App
