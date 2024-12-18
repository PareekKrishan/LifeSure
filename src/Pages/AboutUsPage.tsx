import AboutCompany from "../components/AboutCompany"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import HeaderBG2 from "../components/HeaderBG2"
import OurFeatures from "../components/OurFeatures"
import OurTeam from "../components/OurTeam"
import QuestionSection from "../components/QuestionSection"


const AboutUsPage = () => {
    return (
        <>


            <Header />

            <HeaderBG2 pageName='About Us' pageLink='About Us' />

            <AboutCompany />

            <OurFeatures />

            <QuestionSection />

            <OurTeam />

            <Footer />


        </>
    )
}

export default AboutUsPage