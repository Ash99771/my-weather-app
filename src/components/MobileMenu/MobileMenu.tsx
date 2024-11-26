import {NavLink, useLocation} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks.ts";

import "./mobileMenu.css";

const MobileMenu = () => {

    const location = useLocation();
    const country = useAppSelector((state) => state.countries.selectedCountry);

    return (
        <ul className="mobileNavBar">
            <li><NavLink className="mobileNavBarLink" to="/">Countries</NavLink></li>
            {
                country && location.pathname !== "/" && (
                    <>
                        <li><NavLink className="mobileNavBarLink" to="/currentWeather">Current Weather</NavLink></li>
                        <li><NavLink className="mobileNavBarLink" to="/fiveDay">5 Day Weather Forecast</NavLink></li>
                    </>
                )
            }
        </ul>
    );
};

export default MobileMenu;