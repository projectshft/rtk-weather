"use client";
import React from "react";
import {
  SparklinesCurve,
  Sparklines,
  SparklinesReferenceLine,
} from "react-sparklines";

export const CityWeather = ({ weatherReport }) => {
  const temperatureData = [];
  const pressureData = [];
  const humidtyData = [];

  if (weatherReport) {
    const getSparkData = weatherReport.fiveDay.forEach((day) => {
      temperatureData.push(day.temp);
      pressureData.push(day.pressure);
      humidtyData.push(day.humidity);
    });
  }

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-2 align-self-center fs-5 fw-bold text-center ">
        <span>{weatherReport?.name}</span>
      </div>
      <div className="col-3 align-self-center">
        <Sparklines data={temperatureData}>
          <SparklinesCurve color="blue" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className="text-center fw-italic mt-4">{`${
          temperatureData.reduce((acc, curr) => acc + curr) / 5
        } F`}</p>
      </div>
      <div className="col-3 align-self-center">
        <Sparklines data={pressureData}>
          <SparklinesCurve color="red" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className=" mt-4 fw-italic text-center ">{`${
          pressureData.reduce((acc, curr) => acc + curr) / 5
        } hPa`}</p>
      </div>
      <div className="col-3 align-self-center">
        <Sparklines data={humidtyData}>
          <SparklinesCurve color="green" />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p className="text-center fw-italic mt-4">{`${
          humidtyData.reduce((acc, curr) => acc + curr) / 5
        }%`}</p>
      </div>
    </div>
  );
};
