import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchGetWeather} from "../../store/slices/getWeatherSlice/getWeatherAPI.ts";
import FiveDayPageContent from "../../components/FiveDayPageContent/FiveDayPageContent";
import Loading from "../../components/Loading/Loading";

const Index = () => {

    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state => state.weather);
    const inputValue = useAppSelector(state => state.headerInputValue)

    useEffect(() => {
        dispatch(fetchGetWeather(inputValue))
    }, [dispatch])

    return (
        <div>
            {
                isLoading ? <Loading/>
                    : <FiveDayPageContent/>
            }
        </div>
    );
};

export default Index;