import {Route, Routes} from "react-router";
import MainLayout from "../layout/MainLayout.tsx";
import CurrentWeatherPage from "../pages/CurrentWeatherPage";
import FiveDayPage from "../pages/FiveDayPage";
import Countries from "../pages/Countries";
import CountryDetails from "../components/CountryDetails/CountryDetails.tsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Countries/>}/>
                <Route path="/currentWeather" element={<CurrentWeatherPage />}/>
                <Route path="/fiveDay" element={<FiveDayPage />}/>
                <Route path="/countryDetails" element={<CountryDetails />}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;