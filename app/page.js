'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from './store/slices/weather';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const searches = useSelector((state) => state.weather.searches);
  const error = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(search));
    setSearch('')
  };

  const handleData = (data) => {
      const dataList = {
        temperature: [],
        pressure: [],
        humidity: [],
      }
      data.list.map((subData) => {
        dataList.temperature.push((subData.main.temp - 273.15) * 9/5 + 32);
        dataList.pressure.push(subData.main.pressure);
        dataList.humidity.push(subData.main.humidity);
      })
      return dataList;
  }

  const renderSearches = () => {
    if (searches.length > 0) {
      return searches.map((data) => {
        return (
          <div className='row' key={data.city.id}>
            <li className='list-group-item' >
              <div className='col-md-3'>
                <h3>{data.city.name}</h3>
              </div>
              <div className='col-md-3'>
                <h5>Temp(°F):</h5>
                <Sparklines data={handleData(data).temperature}>
                  <SparklinesLine color='#ffbb00'/>
                  <SparklinesReferenceLine type="avg" />
                </Sparklines>
              </div>
              <div className='col-md-3'>
                <h5>Pressure:</h5>
                <Sparklines data={handleData(data).pressure}>
                  <SparklinesLine color='#00b3ff'/>
                  <SparklinesReferenceLine type="avg" />
                </Sparklines>
              </div>
              <div className='col-md-3'>
                <h5>Humidity:</h5>
                <Sparklines data={handleData(data).humidity}>
                  <SparklinesLine color='#00ff6e'/>
                  <SparklinesReferenceLine type="avg" />
                </Sparklines>
              </div>
            </li>
          </div>
        );
      });
    } else {
      return <div>No posts to show.</div>
    }
  };


// handles errors like 404 to display the proper directions
  const renderError = () => {
    if (error) {
      if (error.includes('404')) {
        return <span>Please enter a valid city name.</span>
      } else {
        return <span className='alert alert-danger'>Error with API, please try again later.</span>
      }
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type='search' 
            value={search} 
            onChange={(e) => {
              setSearch(e.target.value)
              }}
            required
          ></input>
          <button type='submit' className='btn btn-secondary'>
            Search
          </button>
        </div>
        <div className='errors'>
          {renderError()}
        </div>
      </form>
      <div className='container-fluid'>
        <ul className='list-group'>
          {renderSearches()}
        </ul>
      </div>
    </main>
  );
};
