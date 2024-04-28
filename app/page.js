'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import WeatherChart from './components/WeatherChart';
import SearchInput from './components/SearchInput';


const Page = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <SearchInput/>
      <WeatherChart />
    </div>
  );
};

const PageWithProvider = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

export default PageWithProvider;
