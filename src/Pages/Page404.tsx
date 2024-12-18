
import Error404Content from "../components/Error404content"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import HeaderBG2 from "../components/HeaderBG2"


const Page404 = () => {
    return (
        <>



            <Header />

            <HeaderBG2 pageName='404 Pages' pageLink='404 Page' />

            <Error404Content />

            <Footer />



        </>
    )
}

export default Page404



