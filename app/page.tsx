'use client';

import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {formatCity, loadCities, saveCities} from '../utils';
import {setInitialized, fetchWeather} from '../store/weatherSlice';
import Search from '../components/Search';
import Forecast from '../components/Forecast';
import type {AppDispatch, RootState} from '../store/store';

export default function Home() {
    const [hasSavedCities, setHasSavedCities] = useState(false);
    const {isInitialized, cities, error} = useSelector((state: RootState) => state.weather);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        let isActive = true;
        (async () => {
            try {
                const savedCities = loadCities();
                setHasSavedCities(savedCities.length > 0);
                const results = await Promise.allSettled(savedCities.map(city => dispatch(fetchWeather({...city, source: 'storage'})).unwrap()));
                results.forEach((result, index) => {
                    if (result.status === 'rejected') console.error(`Failed to restore ${formatCity(savedCities[index])}`, result.reason);
                });
            } catch (error) {
                console.error(error);
            } finally {
                if (isActive) dispatch(setInitialized());
            }
        })();
        return () => {
            isActive = false;
        };
    }, [dispatch]);

    useEffect(() => {
        if (!isInitialized) return;
        try {
            saveCities(cities);
        } catch (error) {
            console.error(error);
        }
    }, [isInitialized, cities]);

    return (
        <main className="max-w-7xl selection:bg-blue-200 selection:text-gray-700 dark:selection:bg-gray-700 dark:selection:text-amber-50 p-8 mx-auto">
            <Search cities={cities} />
            {error && (
                <p
                    role="alert"
                    className="text-lg font-medium text-center text-red-500 mbs-2"
                >
                    {error}
                </p>
            )}
            <section
                aria-label="weather forecasts"
                className="pbs-6"
            >
                {hasSavedCities && !isInitialized && (
                    <p
                        role="status"
                        className="font-semibold text-center text-lg text-gray-700 dark:text-gray-300 mbe-4"
                    >
                        ⌛️ Loading saved cities...
                    </p>
                )}
                {cities.map(city => (
                    <Forecast
                        key={`${city.latitude}-${city.longitude}`}
                        city={city}
                    />
                ))}
            </section>
        </main>
    );
}
