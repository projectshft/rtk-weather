export default function WeatherSearch() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
          <input 
            className='form-control'
            placeholder='Get a five-day forecast in your favorite cities'
          />
        </div>
        <div className='col'>
          <button className='btn btn-secondary'>Submit</button>
        </div>
      </div>
    </div>
  );
};