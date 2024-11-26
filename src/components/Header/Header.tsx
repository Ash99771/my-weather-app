import {useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {useLocation} from "react-router-dom";
import {setInputValue} from "../../store/slices/headerInputSlice/headerInputSlice";
import {setCountries} from "../../store/slices/countriesSlice/countriesSlice.ts";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar.js";
import MobileMenu from "../MobileMenu/MobileMenu.tsx";
import useWindowSize from "../../hooks/useWindowSize.ts";
import {Countries} from "../../types/types.ts";
import burgerIcon from "../../assets/icons/burger-bar.png";

import "./header.css";

const Header = () => {

    const location = useLocation();
    const dispatch = useAppDispatch();
    const inputValue = useAppSelector(state => state.headerInputValue);
    const countries = useAppSelector((state) => state.countries.initialCountries);
    const { width } = useWindowSize();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name");

    const handleSortBy = (e: any): void => {
        let sortedCountries: Countries[] | [] = [];

        switch (e.target.value) {
            case "name_ascending":
                sortedCountries = [...countries].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name_descending":
                sortedCountries = [...countries].sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "continent_ascending":
                sortedCountries = [...countries].sort((a, b) => a.continent.name.localeCompare(b.continent.name));
                break;
            case "continent_descending":
                sortedCountries = [...countries].sort((a, b) => b.continent.name.localeCompare(a.continent.name));
                break;
            default:
                break;
        }

        dispatch(setCountries(sortedCountries));
    }

    const handleFilter = (e: any): void => {
        let filteredCountries: Countries[] | [];
        filteredCountries = [...countries].filter((country: Countries) => country.continent.name.toLowerCase() === e.target.value.toLowerCase());
        dispatch(setCountries(filteredCountries));
    }

    useEffect(() => {
        if (name) {
            dispatch(setInputValue(name));
        }
    }, [name]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <div>
            <header>
                {
                    width < 600 ? (
                        <div className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <img
                                src={burgerIcon}
                                alt="menu"
                                width="30px"
                                height="30px"
                            />
                        </div>
                    ) : <HeaderNavBar/>
                }
                {
                    (width < 600 && isMobileMenuOpen) && (
                        <MobileMenu/>
                    )
                }
            </header>
            {
                location.pathname === "/" && (
                    <div className="container">
                        <div className="formContainer">
                            <form className="homePageForm">
                                <input
                                    type="text"
                                    value={inputValue}
                                    placeholder={"Search country"}
                                    onChange={(e) => dispatch(setInputValue(e.target.value))}
                                />
                            </form>
                        </div>
                        <div className="selects-container">
                            <select className="sort-select" onChange={handleSortBy}>
                                <option value="" hidden>Sort By</option>
                                <option value="name_ascending">By Name (Ascending)</option>
                                <option value="name_descending">By Name (Descending)</option>
                                <option value="continent_ascending">By Continent (Ascending)</option>
                                <option value="continent_descending">By Continent (Descending)</option>
                            </select>
                            <select className="sort-select" onChange={handleFilter}>
                                <option value="" hidden>Filter By Continent</option>
                                <option value="Africa">Africa</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="North America">North America</option>
                                <option value="Oceania">Oceania</option>
                                <option value="South America">South America</option>
                            </select>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Header;