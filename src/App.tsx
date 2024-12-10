import { createTheme, ThemeProvider } from '@mui/material'


import Header from './components/Header/Header'
import OurFeatures from './components/OurFeatures'
import AboutCompany from './components/AboutCompany'
import OurServices from './components/OurServices'
import QuestionSection from './components/Header/QuestionSection'

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


      </ThemeProvider >
    </>
  )
}

export default App
