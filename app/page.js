"use client";
import Image from "next/image";
import { CitySearch } from "./components/citySearch";
import { useSelector } from "react-redux";
import React from "react";
import { CityWeather } from "./components/cityWeather";
export default function Forecasts() {
  const fiveDayForecast = useSelector(
    (state) => state.forecasts.allCityForecasts
  );

  const errors = useSelector((state) => state.forecasts.error);

  const allForecasts = fiveDayForecast.map((forecast, i) => {
    return <CityWeather key={i} weatherReport={forecast} />;
  });

  return (
    <main>
      <CitySearch />
      {errors && (
        <div>
          <p className="text-center text-danger">{errors}</p>
        </div>
      )}
      <div className="container mt-5">
        {fiveDayForecast.length > 0 && (
          <div className="row justify-content-center mt-3 border-bottom border-secondary pb-1">
            <div className="col-2 align-self-center text-center  display-6">
              <span>City</span>
            </div>
            <div className="col-3 align-self-center text-center display-6">
              <span>temperature</span>
            </div>
            <div className="col-3 align-self-center text-center  fw- display-6">
              <span>pressure</span>
            </div>
            <div className="col-3 align-self-center text-center display-6">
              <span>humidty</span>
            </div>
          </div>
        )}
        {allForecasts}
      </div>
    </main>
  );
}
