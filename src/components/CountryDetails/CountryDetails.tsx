import {useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {useEffect} from "react";
import {Countries, CountriesLanguage} from "../../types/types.ts";
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import {setCountries, setSelectedCountry} from "../../store/slices/countriesSlice/countriesSlice.ts";
import {setInputValue} from "../../store/slices/headerInputSlice/headerInputSlice.ts";
import Loading from "../Loading/Loading.tsx";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  {
  countries {
    name
    capital
    emoji
    currencies
    continent {
      name
    }
    languages {
      code
      name
    }
  }
}
`;

import "./countryDetails.css"

const CountryDetails = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {data, loading} = useQuery(LIST_COUNTRIES, {client});
    const countries = useAppSelector((state) => state.countries.countries);
    const country = useAppSelector((state) => state.countries.selectedCountry);

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const name = queryParams.get("name");

    useEffect(() => {
        if (!loading && data && data.countries && name) {
            dispatch(setCountries(data.countries));
        }
    }, [loading, name]);

    useEffect(() => {
        const foundedCountry = countries.find((country: Countries) => country.name === name);
        dispatch(setSelectedCountry(foundedCountry));
    }, [countries]);

    const handleWeatherButtonClick = () => {
        if (country && country.name) {
            dispatch(setInputValue(country.capital))
            navigate("/currentWeather")
        }
    }

    return (
        <>
            {loading && <Loading />  }
            {     country && (<div className="country-details-container">
                    <div className="country-details">
                        <h1 className="country-name">{country.name}</h1>
                        <ul className="country-info-list">
                            <li><strong>Capital:</strong> {country.capital}</li>
                            <li><strong>Flag:</strong> {country.emoji}</li>
                            <li><strong>Continent:</strong> {country.continent.name}</li>
                            <li><strong>Currency:</strong> {country.currencies[0]}</li>
                        </ul>
                        <div className="country-languages">
                            <h2 className="languages-title">Languages Spoken</h2>
                            <ul className="languages-list">
                                {country.languages.map((language: CountriesLanguage) => (
                                    <li key={language.code} className="language-item">
                                        {language.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="weather-button" onClick={handleWeatherButtonClick}>
                            See Weather
                        </button>
                    </div>
                </div>)

            }
        </>
    );
};

export default CountryDetails;