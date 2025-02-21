import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout() {
    const { pathname } = useLocation()
    const hideFooterPages: string[] = ['/login', '/accountProfile']


    return (
        <section className="w-full bg-white">
            <Header />
            <Outlet />
            {!hideFooterPages.includes(pathname) && <Footer />}
        </section>
    )
}

export default Layout