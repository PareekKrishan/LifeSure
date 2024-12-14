import { createTheme, ThemeProvider } from '@mui/material'
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './components/Header/Header'
import OurFeatures from './components/OurFeatures'
import AboutCompany from './components/AboutCompany'
import OurServices from './components/OurServices'
import QuestionSection from './components/QuestionSection'
import BlogSection from './components/BlogSection'
import OurTeam from './components/OurTeam'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'
import { useEffect } from 'react'
import HeaderCarousel from './components/HeaderCarousel';




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



        <Header />
        <HeaderCarousel />
        <OurFeatures />

        <AboutCompany />

        <OurServices />

        <QuestionSection />

        <BlogSection />

        <OurTeam />

        <TestimonialSection />

        <Footer />




      </ThemeProvider >
    </>
  )
}

export default App
