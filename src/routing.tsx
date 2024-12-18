import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutUsPage from "./Pages/AboutUsPage"
import ContactUsPage from "./Pages/ContactUsPage"
import FAQsPage from "./Pages/FAQsPage"
import OurBlogPage from "./Pages/OurBlogPage"
import OurFeaturesPage from "./Pages/OurFeaturesPage"
import OurServicesPage from "./Pages/OurServicesPage"
import OurTeamPage from "./Pages/OurTeamPage"
import Page404 from "./Pages/Page404"
import TestimonialPage from "./Pages/TestimonialPage"




function Routing() {
    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<HomePage />} />

                    <Route path="/about-us" element={<AboutUsPage />} />

                    <Route path="/contact-us" element={<ContactUsPage />} />

                    <Route path="/faqs" element={<FAQsPage />} />

                    <Route path="/our-blog" element={<OurBlogPage />} />

                    <Route path="/our-features" element={<OurFeaturesPage />} />

                    <Route path="/our-services" element={<OurServicesPage />} />

                    <Route path="/our-team" element={<OurTeamPage />} />

                    <Route path="/404" element={<Page404 />} />

                    <Route path="/testimonial" element={<TestimonialPage />} />

                    <Route path="*" element={<Page404 />} />









                </Routes>

            </BrowserRouter>

        </>
    )
}


export default Routing