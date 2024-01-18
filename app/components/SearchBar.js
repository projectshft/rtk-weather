'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../store/slices/cities';
import { useForm } from 'react-hook-form';
import countries from './countries';
import axios from 'axios';

const SearchBar = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [country, setCountry] = useState(['840', 'US']);

  const createNewCity = (response) => {
    const id = Math.floor(Math.random() * 100000);
    const weatherData = response.data.list;
    const cityObj = {
      id,
      name: response.data.city.name,
      default: false,
      country,
      temp: weatherData.map(item => item.main.temp),
      avgTemp: Math.floor(weatherData.map(item => item.main.temp).reduce((a, b) => a + b, 0) / weatherData.map(item => item.main.temp).length),
      pressure: weatherData.map(item => item.main.pressure),
      avgPressure: Math.floor(weatherData.map(item => item.main.pressure).reduce((a, b) => a + b, 0) / weatherData.map(item => item.main.pressure).length),
      humidity: weatherData.map(item => item.main.humidity),
      avgHumidity: Math.floor(weatherData.map(item => item.main.humidity).reduce((a, b) => a + b, 0) / weatherData.map(item => item.main.humidity).length)
    }
    console.log(cityObj)
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
        if(response.data.length === 0) {
          alert(`No city found with the name ${city}, ${state}`)
        } else {
          let officialState = response.data[0].state;
        getWeather(response.data[0].lat, response.data[0].lon, officialState)
  }})
  }

  const onSubmit = (data) => {
    getLatLon(data.city, country[0]);
    document.querySelector('.city').value = '';
    if(country[0] === "840") {
    document.querySelector('.state').value = '';
    }
    console.log(errors);
  }

    return (
      <form className='d-flex w-75 align-items-center justify-content-center p-3 position-relative' style={{height: "125px", top: "-25px"}} onSubmit={handleSubmit(onSubmit)}>
        <label>Country</label>
        
        <select 
        className="form-select mx-2" 
        type="select" 
        {...register("country", { required: "This is required." })} 
        defaultValue={country[0]} 
        onChange={(event) => setCountry([event.target.value, event.target.options[event.target.selectedIndex].id])}>
          {countries.map(country => 
            <option key={country.isoCode} value={country.isoCode} id={country.code}>{country.name}</option>
          )}
        </select>
        
        <label>City</label>
        <input className="city form-control mx-2" type="text" placeholder="Enter..." {...register("city", { required: "This is required." })} />
        {errors.city?.type === "required" && (
        <p className='text-danger m-0 position-absolute' style={{bottom: '15px', right: '100px'}}>*City and State are Required</p>
      )}

      {country[0] === "840" && (
          <label>State</label>
      )}
      
      {country[0] === "840" && (
          <input className="state form-control mx-2 " type="text" placeholder="Enter..." {...register("state", { required: "This is required." })} />
      )}

      {country[0] === "840" && (
          errors.state?.type === "required" && (
            <p className='text-danger m-0 position-absolute' style={{bottom: '15px', right: '100px'}}>*City and State are Required</p>
          )
      )}

        <button className='btn btn-primary ml-2'>Submit</button>
      </form>
    )
  }

  

export default SearchBar;