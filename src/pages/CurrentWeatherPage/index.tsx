import { useEffect } from 'react';
import CurrentWeatherPageContent from "../../components/CurrentWeatherPageContent/CurrentWeatherPageContent";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchGetWeather } from "../../store/slices/getWeatherSlice/getWeatherAPI";
import Loading from '../../components/Loading/Loading';

const Index = () => {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state.weather);
    const inputValue = useAppSelector((state) => state.headerInputValue);

    useEffect(() => {
            dispatch(fetchGetWeather(inputValue));
    }, [dispatch]);

    return (
        <div className="homePage">
            {isLoading ? <Loading /> : <CurrentWeatherPageContent />}
        </div>
    );
};

export default Index;
