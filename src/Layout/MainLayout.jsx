import { Outlet } from "react-router-dom";
import Nav from "../Component/Header/Nav/Nav";


const MainLayout = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;