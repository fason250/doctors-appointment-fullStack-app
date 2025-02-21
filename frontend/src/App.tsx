import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layouts/Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import DoctorsList from "./pages/DoctorsList"
import About from "./pages/About"
import DoctorDetails from "./pages/DoctorDetails"
import Contact from "./pages/Contact"
import Appointments from "./pages/Appointments"
import Login from "./pages/Login"
import Profile from "./pages/Profile"


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "allDoctors", element: <DoctorsList /> },
        { path: "/doctor/:doctorId", element: <DoctorDetails /> },
        { path: "/About", element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: "/appointments", element: <Appointments /> },
        { path: '/Login', element: <Login /> },
        { path: '/accountProfile', element: <Profile /> }
      ]

    },
    {
      path: "*",
      element: <NotFound />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App