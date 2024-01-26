"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCityForeCast } from "../store/slices/forecast";
export const CitySearch = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCityForeCast(city));
    setCity("");
  };

  return (
    <form
      className=" mt-3 row g-1 offset-4"
      action="#"
      onSubmit={handleFormSubmit}
    >
      <div className="col-5">
        <input
          className="form-control col-1"
          type="text"
          required
          value={city}
          placeholder="Please enter a city to get a 5 day weather report"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};
