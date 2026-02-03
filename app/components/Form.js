import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherData } from '../store/slices/weather'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Form() {
  const schema = yup
    .object({
      city: yup.string().required().min(3),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const dispatch = useDispatch()
  const [city, setCity] = useState('')

  const handleFormSubmit = () => {
    const trimmedCity = city.trim()
    if (!trimmedCity) return

    dispatch(fetchWeatherData(trimmedCity))
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="row justify-content-center">
        <div className="col-sm-4 my-1">
          <input
            {...register('city', { required: true })}
            type="text"
            className="form-control"
            id="cityInput"
            value={city}
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-auto my-1">
          <button type="submit" className="btn btn-primary" id="searchBtn">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
