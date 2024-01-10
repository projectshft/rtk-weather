'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../store/slices/cities';
import { useForm } from 'react-hook-form';
import countries from './countries';
import axios from 'axios';

const SearchBar = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: {errors} } = useForm();

  const [country, setCountry] = useState('840');

  const createNewCity = (response) => {
    const id = Math.floor(Math.random() * 100000);
    const weatherData = response.data.list;
    const cityObj = {
      id,
      name: response.data.city.name,
      temp: weatherData.map(item => item.main.temp),
      avgTemp: Math.floor(weatherData.map(item => item.main.temp).reduce((a, b) => a + b, 0) / weatherData.map(item => item.main.temp).length),
      pressure: weatherData.map(item => item.main.pressure),
      avgPressure: Math.floor(weatherData.map(item => item.main.pressure).reduce((a, b) => a + b, 0) / weatherData.map(item => item.main.pressure).length),
      humidity: weatherData.map(item => item.main.humidity),
      avgHumidity: Math.floor(weatherData.map(item => item.main.humidity).reduce((a, b) => a + b, 0) / weatherData.map(item => item.main.humidity).length)
    }
    dispatch(addCity(cityObj))
  }

  const getWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`

    axios.get(url)
      .then((response) => {
        createNewCity(response)
      })
      .catch((error) => {
        alert(error)
      })
  }

  const getLatLon = async (city, country, state = '') => {
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`

    console.log(url)
    axios.get(url)
      .then((response) => {
        getWeather(response.data[0].lat, response.data[0].lon)
      })
  }

  if(country !== "840") {
    return (
      <form className='d-flex w-75 align-items-center justify-content-center p-3' onSubmit={handleSubmit((data) => {
        getLatLon(data.city, country)
        document.querySelector('input').value = '';
      })}>
        <label>Country</label>
        <select 
        className="form-select mx-2" 
        type="select" 
        {...register("country", { required: "This is required." })} 
        defaultValue={"Choose..."} 
        onChange={(event) => setCountry(event.target.value)}>
          {countries.map(country => 
            <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
          )}
        </select>
        <label>City</label><input className="form-control mx-2" type="text" placeholder="Enter..." {...register("city", { required: "This is required." })} />
        <button className='btn btn-primary ml-2'>Submit</button>
      </form>
    )
  };

    return (
      <form className='d-flex w-75 align-items-center justify-content-center p-3' onSubmit={handleSubmit((data) => {
        getLatLon(data.city, country, data.state)
        document.querySelector('.city').value = '';
        document.querySelector('.state').value = '';
      })}>
        <label>Country</label>
        <select 
        className="form-select mx-2" 
        type="select" 
        {...register("country", { required: "This is required." })} 
        defaultValue={"Choose..."} 
        onChange={(event) => setCountry(event.target.value)}>
          {countries.map(country => 
            <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
          )}
        </select>
        <label>City</label><input className="city form-control mx-2" type="text" placeholder="Enter..." {...register("city", { required: "This is required." })} />
        <label>State</label><input className="state form-control mx-2 " type="text" placeholder="Enter..." {...register("state", { required: "This is required." })} />
        <button className='btn btn-primary ml-2'>Submit</button>
      </form>
    )
  }

  

export default SearchBar;