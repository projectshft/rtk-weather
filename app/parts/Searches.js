'use-client'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useSelector } from 'react-redux';

/**
 * Function for getting all of the information from successful searches.
 * @returns Unordered list containing each of the searches and their information to display.
 */
export function SearchesFunc () {
  const searches = useSelector((state) => state.weather.searches);

  /** 
    * Creates and converts tables for displaying the Sparklines and converts them into averages.
    * @param data gets the table returned from the API for each search.
    * @returns Object with all of the data points and averages.
  */
  const handleData = (data) => {
    const dataList = {
      temp: [],
      pressure: [],
      humidity: [],
      average: {},
    };

    /**
     * Pushes the needed information from each Object in the API list to the dataList
     * @param subData each Object in the API list of weather forecasts
     */
    data.list.forEach((subData) => {
      dataList.temp.push((subData.main.temp - 273.15) * 9/5 + 32);
      dataList.pressure.push(subData.main.pressure * 0.029529983071445);
      dataList.humidity.push(subData.main.humidity);
    });

    /**
     * Converts each category into averages to the 2nd decimal
     * @param dataRef reference to the current category being called
     */
    const handleAverage = (dataRef) => {
      
      let avgRef = dataList.average[dataRef];
      const regRef = dataList[dataRef];

      avgRef = regRef.reduce((numA, numB) => numA + numB) / regRef.length;

      dataList.average[dataRef] = avgRef.toFixed(2);
    };

    handleAverage('temp');
    handleAverage('pressure');
    handleAverage('humidity');
    
    return dataList;
  };

  /**
   * Renders each search in searches state for display
   * @returns all search results formatted to display averages and forecast for each category
   * @returns "No posts to show" if there are no successful searches yet
   */
  const renderSearches = () => {
    if (searches.length > 0) {
      return searches.map((data) => {
        return (
          <div key={data.city.id}>
            <li className='list-group-item row' >
              <div className='col-md-3'>
                <h3>{data.city.name}</h3>
              </div>
              <div className='col-md-3'>
                <h5>Temp:</h5>
                <Sparklines data={handleData(data).temp}>
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
            <li className='list-group-item row'>
              <h5 className='col-md-3'>Average</h5>
              <h5 className='col-md-3'>{handleData(data).average.temp}°F</h5>
              <h5 className='col-md-3'>{handleData(data).average.pressure}pa</h5>
              <h5 className='col-md-3'>{handleData(data).average.humidity}%</h5>
            </li>
          </div>
          
        );
      });
    } else {
      return (
        <div className='center'>
          <h5>No posts to show.</h5>
        </div>
      );
    };
  };
  return (
    <ul className='list-group container'>
        {renderSearches()}
    </ul>
  );
};