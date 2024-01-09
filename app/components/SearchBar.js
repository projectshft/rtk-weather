'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../store/slices/cities';
import { useForm } from 'react-hook-form';
import countries from './countries';
const axios = require('axios').default;

const SearchBar = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: {errors} } = useForm();

  const [country, setCountry] = useState('840');

  const getLatLon = async (city, state, zip) => {
    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${zip},${country}&limit=1&appid=${process.env.OPEN_WEATHER_API_KEY}`)
  }

  const dohandleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 100000);
    const cityObj = {
      id,
      name: searchTerm,
      temp: [],
      pressure: [],
      humidity: []
    }
    dispatch(addCity(cityObj))
    document.querySelector('input').value = '';
  }

  if(country !== "840") {
    return (
      <form className='d-flex w-75 align-items-center justify-content-center p-3' onSubmit={handleSubmit((data) => {
        console.log(data)
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
        <label className='d-none'>State</label><input className="form-control mx-2 d-none" type="text" placeholder="Enter..." {...register("state", { required: "This is required." })} />
        <label className='d-none'>Zip</label><input className="form-control mx-2 d-none" type="text" placeholder="Enter..." {...register("zip", { required: "This is required." })} />
        <button className='btn btn-primary ml-2'>Submit</button>
      </form>
    )
  };

    return (
      <form className='d-flex w-75 align-items-center justify-content-center p-3' onSubmit={handleSubmit((data) => {
        getLatLon(data.city, data.state, data.zip)
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
        <label>State</label><input className="form-control mx-2 " type="text" placeholder="Enter..." {...register("state", { required: "This is required." })} />
        <label>Zip</label><input className="form-control mx-2 " type="text" placeholder="Enter..." {...register("zip", { required: "This is required." })} />
        <button className='btn btn-primary ml-2'>Submit</button>
      </form>
    )
  }

  

export default SearchBar;