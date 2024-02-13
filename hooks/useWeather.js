import { useSelector, useDispatch } from 'react-redux';

const useWeather = () => {
    const weatherData = useSelector((state) => state.weather); 
    const dispatch = useDispatch();

    return { state: weatherData, dispatch };
};

export default useWeather;
