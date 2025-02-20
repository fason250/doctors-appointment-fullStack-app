import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layouts/Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import DoctorsList from "./pages/DoctorsList"
import DoctorDetails from "./pages/DoctorDetails"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "allDoctors", element: <DoctorsList /> },
        { path: "/doctor/:doctorId", element: <DoctorDetails /> }
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