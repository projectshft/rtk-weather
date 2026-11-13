# RTK Weather Forecast

A weather forecast app built as a Parsity student project (forked from a starter, with additional work in this repository). You search for a city, and the app shows a table of forecast sparkline charts (temperature in °F, pressure, humidity), a Google Maps embed for the city, and a control to save a default city in `localStorage`. On load, that default city is fetched again.

The runnable app is the Next.js entry in `app/page.js` (`npm run dev`). Forecast data comes from the OpenWeatherMap 5-day forecast API via a Redux Toolkit thunk in `src/features/weather/weatherSlice.js`.

## Features

- Search for a city and append its forecast to a list
- Sparkline charts for temperature, pressure, and humidity (`react-sparklines`)
- Google Maps embed for each city’s coordinates
- Save a default city in `localStorage`

`src/App.js`, `WeatherMap.js`, and `NearbyMap.js` exist as additional/legacy pieces (including geolocation and nearby-city map code). The Next.js page uses `SearchBar` and `WeatherList` only. A geolocation helper exists in `SearchBar.js` but is not hooked up to a button in the current UI.

## Tech stack

- Next.js 13, React 18
- Redux Toolkit and react-redux
- axios, react-sparklines, `@react-google-maps/api`

## Getting started

```bash
npm install
npm run dev
```

Open the URL Next.js prints (usually [http://localhost:3000](http://localhost:3000)). Other scripts: `npm run build`, `npm start`, `npm run lint`.

### Environment variables

Used by the Next.js weather list (Maps embed):

- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

Also referenced in unused/legacy map components:

- `REACT_APP_GOOGLE_MAPS_API_KEY`
- `REACT_APP_OPENWEATHER_API_KEY`

The OpenWeatherMap key used by `fetchWeather` in `weatherSlice.js` is currently hard-coded in source. It should be moved to an environment variable, and the existing key should be treated as compromised and rotated.

## Project structure

```
app/
  page.js          # Next.js home page
  layout.js        # Redux Provider
  store.js
src/
  components/SearchBar.js
  components/Chart.js
  features/weather/weatherSlice.js
  features/weather/WeatherList.js
```
