import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErorrPage from "../Pages/ErorrPage/ErorrPage";
import Detail from "../Pages/Details/Detail";


const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErorrPage></ErorrPage>,
        children: [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch('/donation.json')
            },
            {
                path : "/donation",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/donations/:id",
                element: <Detail></Detail>,
                loader : () => fetch('/donation.json')
            }
        ]
    }
])

export default myCreatedRoute;