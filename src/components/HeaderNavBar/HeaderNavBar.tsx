import {NavLink, useLocation} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks.ts";

import "./headerNavBar.css";

const HeaderNavBar = () => {

    const location = useLocation();
    const country = useAppSelector((state) => state.countries.selectedCountry);

    return (
        <ul className="navBar">
            <li><NavLink className="navBarLink" to="/">Countries</NavLink></li>
            {
                country && location.pathname !== "/" && (
                    <>
                        <li><NavLink className="navBarLink" to="/currentWeather">Current Weather</NavLink></li>
                        <li><NavLink className="navBarLink" to="/fiveDay">5 Day Weather Forecast</NavLink></li>
                    </>
                )
            }
        </ul>
    );
};

export default HeaderNavBar;