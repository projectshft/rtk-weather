'use client'
import Form from './components/Form'
import WeatherTable from './components/WeatherTable'

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-center pb-2 mb-4 border-bottom">Redux Weather</h1>
      <Form />
      <div>
        <WeatherTable />
      </div>
    </div>
  )
}
