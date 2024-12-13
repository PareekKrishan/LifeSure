import { createTheme, ThemeProvider } from '@mui/material'


import Header from './components/Header/Header'
import OurFeatures from './components/OurFeatures'
import AboutCompany from './components/AboutCompany'
import OurServices from './components/OurServices'
import QuestionSection from './components/QuestionSection'
import BlogSection from './components/BlogSection'
import OurTeam from './components/OurTeam'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'




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

  return (
    <>
      <ThemeProvider theme={theme}>



        <Header />

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
