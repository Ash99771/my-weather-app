import {Countries} from "../../types/types.ts";
import {createSearchParams, useNavigate} from "react-router-dom";
import "./countryCard.css"

const CountryCard = ({ countryData } : { countryData: Countries }) => {

    const navigate = useNavigate();

    const handleSeeMoreClick = (name: string): void => {

        navigate({
            pathname: "/countryDetails",
            search: `${createSearchParams({ name })}`
        });
    }

    return (
        <div key={countryData.name} className="country-card">
            <div className="country-card-header">
                <span className="country-flag">{countryData.emoji}</span>
                <p className="country-name">{countryData.name}</p>
            </div>
            <div className="country-info">
                <p><strong>Capital:</strong> {countryData.capital}</p>
            </div>
            <button className="see-more-button" onClick={() => handleSeeMoreClick(countryData.name)}>
                See more
            </button>
        </div>
    );
};

export default CountryCard;