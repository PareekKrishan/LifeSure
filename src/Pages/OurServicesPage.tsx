import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import HeaderBG2 from "../components/HeaderBG2"
import OurServices from "../components/OurServices"
import TestimonialSection from "../components/TestimonialSection"

const OurServicesPage = () => {
    return (
        <>


            <Header />

            <HeaderBG2 pageName='Our Services' pageLink='Services' />

            <OurServices />

            <TestimonialSection />

            <Footer />


        </>
    )
}

export default OurServicesPage