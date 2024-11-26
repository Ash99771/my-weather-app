import {Outlet} from "react-router";
import Header from "../components/Header/Header.tsx";

import "./MainLayout.css"

const MainLayout = () => {
    return (
        <div className="layout-container">
            <Header/>

            <Outlet/>
        </div>
    );
};

export default MainLayout;