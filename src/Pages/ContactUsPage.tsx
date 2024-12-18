import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import HeaderBG2 from "../components/HeaderBG2"

const ContactUsPage = () => {
    return (
        <>

            <Header />

            <HeaderBG2 pageName='Contact Us' pageLink='Contact Us' />

            <ContactUs />

            <Footer />

        </>
    )
}

export default ContactUsPage