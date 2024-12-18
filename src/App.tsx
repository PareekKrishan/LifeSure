import { createTheme, ThemeProvider } from '@mui/material'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Routing from './routing';








const theme = createTheme({

  palette: {
    primary: {
      main: '#015fc9'
    },
    secondary: {
      main: '#0BE1FF'
    }
  },

  typography: {
    fontFamily: 'Inter'

  }



})



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,

    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>



        <Routing />


      </ThemeProvider >
    </>
  )
}

export default App
