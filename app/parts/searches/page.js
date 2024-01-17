'use-client'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useSelector } from 'react-redux';

export function SearchesFunc () {
  const searches = useSelector((state) => state.weather.searches);

  const handleData = (data) => {
    const dataList = {
      temp: [],
      pressure: [],
      humidity: [],
      average: {}
    };
    data.list.map((subData) => {
      dataList.temp.push((subData.main.temp - 273.15) * 9/5 + 32);
      dataList.pressure.push(subData.main.pressure);
      dataList.humidity.push(subData.main.humidity);
    });

    const handleAverage = (dataRef) => {
      
      let avgRef = dataList.average[dataRef];
      const regRef = dataList[dataRef];

      avgRef = regRef.reduce((numA, numB) => numA + numB) / regRef.length;

      if (dataRef === 'pressure') {
        avgRef *= 0.029529983071445;
      };

      dataList.average[dataRef] = avgRef.toFixed(2);
    };

    handleAverage('temp');
    handleAverage('pressure');
    handleAverage('humidity');
    
    return dataList;
  };

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
          
        )
        
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
  )
};