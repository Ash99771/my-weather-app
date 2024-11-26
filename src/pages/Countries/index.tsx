import {useEffect} from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import Loading from '../../components/Loading/Loading';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {setCountries, setInitialCountries} from "../../store/slices/countriesSlice/countriesSlice.ts";
import {Countries} from "../../types/types.ts";
import CountryCard from "../../components/CountryCard/CountryCard.tsx";
import {setInputValue} from "../../store/slices/headerInputSlice/headerInputSlice.ts";

import "./countries.css"

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

const CountriesPage = () => {
    const {data, loading} = useQuery(LIST_COUNTRIES, {client});

    const dispatch = useAppDispatch();
    const inputValue = useAppSelector((state) => state.headerInputValue);
    const countries = useAppSelector((state) => state.countries.countries);

    useEffect(() => {
        dispatch(setInputValue(""));
    }, []);

    useEffect(() => {
        if (!loading && data && data.countries && !inputValue) {
            dispatch(setCountries(data.countries));
            dispatch(setInitialCountries(data.countries));
        } else if (!loading && data && data.countries && inputValue) {
            const filteredCountries = data.countries.filter((countries: Countries) => {
                return countries.name.toLowerCase().includes(inputValue.toLowerCase());
            })
            dispatch(setCountries(filteredCountries));
        }
    }, [loading, inputValue]);

    return (
        <div className="countries-page-container">
            {loading && <Loading /> }
            {(!loading && countries.length > 0) ? (
                    <div className="countries-container">
                        {
                            countries && countries.map((country: Countries) => (
                                <CountryCard countryData={country}/>
                            ))
                        }
                    </div>
                ) : (
                    <div style={{marginTop: "20px"}}>No country with that name</div>
                )
            }
        </div>
    );
};

export default CountriesPage;