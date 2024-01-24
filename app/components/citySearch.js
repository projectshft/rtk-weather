"use client";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export const CitySearch = () => {
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [fiveDayForeCast, setFiveDayForeCast] = useState([]);

  // if there is a latitude and longitude an api call will be made to get the city data
  useEffect(() => {
    if (latitude && longitude) {
      axios
        .get("http://api.openweathermap.org/data/2.5/forecast", {
          params: {
            lat: latitude,
            lon: longitude,
            appid: "5dfb3ccdb6e27979cf32863254a75835",
          },
        })
        .then(({ data }) => {
          const everyThreeHours = data.list;
          const week = everyThreeHours.reduce(
            (acc, curr, i) => {
              switch (true) {
                case i < 8:
                  acc[0].push(curr.main);
                  break;
                case i > 7 && i < 16:
                  acc[1].push(curr.main);
                  break;
                case i > 15 && i < 24:
                  acc[2].push(curr.main);
                  break;
                case i > 23 && i < 32:
                  acc[3].push(curr.main);
                  break;
                default:
                  acc[4].push(curr.main);
              }
              return acc;
            },
            [[], [], [], [], []]
          );
          setFiveDayForeCast([...fiveDayForeCast, week]);
        });
    }
  }, [latitude, longitude]);

  // when a user searches a city it will make an api call and find the geocode for lat and longitude and set these to lat && long state to prep to make another api call to get the citys weather data
  const getCity = () => {
    return axios
      .get("http://api.openweathermap.org/geo/1.0/direct", {
        params: {
          q: city,
          appid: "5dfb3ccdb6e27979cf32863254a75835",
        },
      })
      .then((data) => {
        setLatitude(data.data[0].lat);
        setLongitude(data.data[0].lon);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getCity();
  };

  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={city}
        placeholder="Please Enter A City"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};
