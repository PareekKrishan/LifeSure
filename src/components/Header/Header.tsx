
import { ScrollProvider } from './ScrollContext'
import TopBar from './TopBar'
import NavBar from './NavBar'
import CollapseNavbar from './CollapseNavbar'



const Header = () => {
    return (
        <>
            <ScrollProvider>

                <TopBar />
                <NavBar />
                <CollapseNavbar />

            </ScrollProvider>
        </>
    )
}

export default Header