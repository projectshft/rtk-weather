import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const sanAngelo = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1715979600,
          "main": {
              "temp": 300.56,
              "feels_like": 300.63,
              "temp_min": 300.56,
              "temp_max": 302.01,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 939,
              "humidity": 45,
              "temp_kf": -1.45
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.6,
              "deg": 282,
              "gust": 6.7
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-17 21:00:00"
      },
      {
          "dt": 1715990400,
          "main": {
              "temp": 300.67,
              "feels_like": 300.47,
              "temp_min": 300.67,
              "temp_max": 301.09,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 939,
              "humidity": 41,
              "temp_kf": -0.42
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 13
          },
          "wind": {
              "speed": 3.82,
              "deg": 327,
              "gust": 5.13
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 00:00:00"
      },
      {
          "dt": 1716001200,
          "main": {
              "temp": 296.44,
              "feels_like": 295.97,
              "temp_min": 296.44,
              "temp_max": 296.44,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 940,
              "humidity": 44,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 50
          },
          "wind": {
              "speed": 2.45,
              "deg": 102,
              "gust": 2.49
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 03:00:00"
      },
      {
          "dt": 1716012000,
          "main": {
              "temp": 293.09,
              "feels_like": 292.63,
              "temp_min": 293.09,
              "temp_max": 293.09,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 941,
              "humidity": 57,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 32
          },
          "wind": {
              "speed": 3.77,
              "deg": 213,
              "gust": 6.7
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 06:00:00"
      },
      {
          "dt": 1716022800,
          "main": {
              "temp": 292.42,
              "feels_like": 291.79,
              "temp_min": 292.42,
              "temp_max": 292.42,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 940,
              "humidity": 53,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.43,
              "deg": 222,
              "gust": 5.45
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 09:00:00"
      },
      {
          "dt": 1716033600,
          "main": {
              "temp": 291.71,
              "feels_like": 291.34,
              "temp_min": 291.71,
              "temp_max": 291.71,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 942,
              "humidity": 66,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.45,
              "deg": 213,
              "gust": 9.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 12:00:00"
      },
      {
          "dt": 1716044400,
          "main": {
              "temp": 299.88,
              "feels_like": 300.27,
              "temp_min": 299.88,
              "temp_max": 299.88,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 943,
              "humidity": 49,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.99,
              "deg": 215,
              "gust": 8.02
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 15:00:00"
      },
      {
          "dt": 1716055200,
          "main": {
              "temp": 306.41,
              "feels_like": 304.82,
              "temp_min": 306.41,
              "temp_max": 306.41,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 942,
              "humidity": 25,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.16,
              "deg": 220,
              "gust": 5.49
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 18:00:00"
      },
      {
          "dt": 1716066000,
          "main": {
              "temp": 309.2,
              "feels_like": 307.12,
              "temp_min": 309.2,
              "temp_max": 309.2,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 940,
              "humidity": 18,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.63,
              "deg": 199,
              "gust": 4.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 21:00:00"
      },
      {
          "dt": 1716076800,
          "main": {
              "temp": 308.58,
              "feels_like": 306.81,
              "temp_min": 308.58,
              "temp_max": 308.58,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 940,
              "humidity": 21,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.59,
              "deg": 133,
              "gust": 3.17
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 00:00:00"
      },
      {
          "dt": 1716087600,
          "main": {
              "temp": 299.49,
              "feels_like": 299.49,
              "temp_min": 299.49,
              "temp_max": 299.49,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 941,
              "humidity": 38,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 6.84,
              "deg": 136,
              "gust": 13.87
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 03:00:00"
      },
      {
          "dt": 1716098400,
          "main": {
              "temp": 296.99,
              "feels_like": 296.71,
              "temp_min": 296.99,
              "temp_max": 296.99,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 942,
              "humidity": 49,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3,
              "deg": 145,
              "gust": 4.7
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 06:00:00"
      },
      {
          "dt": 1716109200,
          "main": {
              "temp": 296.29,
              "feels_like": 296.07,
              "temp_min": 296.29,
              "temp_max": 296.29,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 942,
              "humidity": 54,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.58,
              "deg": 188,
              "gust": 10.7
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 09:00:00"
      },
      {
          "dt": 1716120000,
          "main": {
              "temp": 295.13,
              "feels_like": 295.08,
              "temp_min": 295.13,
              "temp_max": 295.13,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 943,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.94,
              "deg": 193,
              "gust": 8.86
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 12:00:00"
      },
      {
          "dt": 1716130800,
          "main": {
              "temp": 301.62,
              "feels_like": 302.15,
              "temp_min": 301.62,
              "temp_max": 301.62,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 944,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 68
          },
          "wind": {
              "speed": 7.77,
              "deg": 185,
              "gust": 11.75
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 15:00:00"
      },
      {
          "dt": 1716141600,
          "main": {
              "temp": 307.97,
              "feels_like": 307,
              "temp_min": 307.97,
              "temp_max": 307.97,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 942,
              "humidity": 27,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 35
          },
          "wind": {
              "speed": 9.62,
              "deg": 188,
              "gust": 11.02
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 18:00:00"
      },
      {
          "dt": 1716152400,
          "main": {
              "temp": 309.89,
              "feels_like": 308.4,
              "temp_min": 309.89,
              "temp_max": 309.89,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 940,
              "humidity": 21,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 2
          },
          "wind": {
              "speed": 9.43,
              "deg": 192,
              "gust": 10.02
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 21:00:00"
      },
      {
          "dt": 1716163200,
          "main": {
              "temp": 307.61,
              "feels_like": 306.37,
              "temp_min": 307.61,
              "temp_max": 307.61,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 939,
              "humidity": 26,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 3
          },
          "wind": {
              "speed": 8.8,
              "deg": 174,
              "gust": 12.08
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 00:00:00"
      },
      {
          "dt": 1716174000,
          "main": {
              "temp": 302.13,
              "feels_like": 301.26,
              "temp_min": 302.13,
              "temp_max": 302.13,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 939,
              "humidity": 34,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 8.08,
              "deg": 171,
              "gust": 17.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 03:00:00"
      },
      {
          "dt": 1716184800,
          "main": {
              "temp": 298.98,
              "feels_like": 298.74,
              "temp_min": 298.98,
              "temp_max": 298.98,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 940,
              "humidity": 43,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.35,
              "deg": 175,
              "gust": 11.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 06:00:00"
      },
      {
          "dt": 1716195600,
          "main": {
              "temp": 296.48,
              "feels_like": 296.33,
              "temp_min": 296.48,
              "temp_max": 296.48,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 940,
              "humidity": 56,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.3,
              "deg": 185,
              "gust": 4.4
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 09:00:00"
      },
      {
          "dt": 1716206400,
          "main": {
              "temp": 294.64,
              "feels_like": 294.72,
              "temp_min": 294.64,
              "temp_max": 294.64,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 941,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 8
          },
          "wind": {
              "speed": 4.05,
              "deg": 165,
              "gust": 8.95
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 12:00:00"
      },
      {
          "dt": 1716217200,
          "main": {
              "temp": 300.07,
              "feels_like": 300.86,
              "temp_min": 300.07,
              "temp_max": 300.07,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 941,
              "humidity": 56,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 8,
              "deg": 198,
              "gust": 11.24
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 15:00:00"
      },
      {
          "dt": 1716228000,
          "main": {
              "temp": 307.47,
              "feels_like": 307.25,
              "temp_min": 307.47,
              "temp_max": 307.47,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 940,
              "humidity": 32,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 2
          },
          "wind": {
              "speed": 8.22,
              "deg": 207,
              "gust": 8.74
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 18:00:00"
      },
      {
          "dt": 1716238800,
          "main": {
              "temp": 309.95,
              "feels_like": 309.3,
              "temp_min": 309.95,
              "temp_max": 309.95,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 938,
              "humidity": 25,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 7.36,
              "deg": 210,
              "gust": 7.99
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 21:00:00"
      },
      {
          "dt": 1716249600,
          "main": {
              "temp": 309.07,
              "feels_like": 308.5,
              "temp_min": 309.07,
              "temp_max": 309.07,
              "pressure": 1003,
              "sea_level": 1003,
              "grnd_level": 937,
              "humidity": 27,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 16
          },
          "wind": {
              "speed": 6.52,
              "deg": 201,
              "gust": 9.1
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 00:00:00"
      },
      {
          "dt": 1716260400,
          "main": {
              "temp": 302.65,
              "feels_like": 302.28,
              "temp_min": 302.65,
              "temp_max": 302.65,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 938,
              "humidity": 40,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 64
          },
          "wind": {
              "speed": 5.46,
              "deg": 168,
              "gust": 13.97
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 03:00:00"
      },
      {
          "dt": 1716271200,
          "main": {
              "temp": 300.7,
              "feels_like": 300.69,
              "temp_min": 300.7,
              "temp_max": 300.7,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 938,
              "humidity": 44,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 82
          },
          "wind": {
              "speed": 8.23,
              "deg": 166,
              "gust": 16.68
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 06:00:00"
      },
      {
          "dt": 1716282000,
          "main": {
              "temp": 297.77,
              "feels_like": 298.3,
              "temp_min": 297.77,
              "temp_max": 297.77,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 938,
              "humidity": 77,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 66
          },
          "wind": {
              "speed": 5.83,
              "deg": 185,
              "gust": 14.37
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 09:00:00"
      },
      {
          "dt": 1716292800,
          "main": {
              "temp": 296.66,
              "feels_like": 297.31,
              "temp_min": 296.66,
              "temp_max": 296.66,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 939,
              "humidity": 86,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 45
          },
          "wind": {
              "speed": 5.13,
              "deg": 200,
              "gust": 12.48
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 12:00:00"
      },
      {
          "dt": 1716303600,
          "main": {
              "temp": 301.49,
              "feels_like": 303.37,
              "temp_min": 301.49,
              "temp_max": 301.49,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 940,
              "humidity": 62,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 53
          },
          "wind": {
              "speed": 7.23,
              "deg": 214,
              "gust": 8.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 15:00:00"
      },
      {
          "dt": 1716314400,
          "main": {
              "temp": 309.09,
              "feels_like": 307.75,
              "temp_min": 309.09,
              "temp_max": 309.09,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 938,
              "humidity": 23,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 26
          },
          "wind": {
              "speed": 5.3,
              "deg": 230,
              "gust": 6.95
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 18:00:00"
      },
      {
          "dt": 1716325200,
          "main": {
              "temp": 311.97,
              "feels_like": 309.13,
              "temp_min": 311.97,
              "temp_max": 311.97,
              "pressure": 1002,
              "sea_level": 1002,
              "grnd_level": 936,
              "humidity": 11,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 7
          },
          "wind": {
              "speed": 5.95,
              "deg": 246,
              "gust": 8.12
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 21:00:00"
      },
      {
          "dt": 1716336000,
          "main": {
              "temp": 309.03,
              "feels_like": 306.61,
              "temp_min": 309.03,
              "temp_max": 309.03,
              "pressure": 1001,
              "sea_level": 1001,
              "grnd_level": 936,
              "humidity": 15,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 25
          },
          "wind": {
              "speed": 5.63,
              "deg": 298,
              "gust": 7.79
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 00:00:00"
      },
      {
          "dt": 1716346800,
          "main": {
              "temp": 302.61,
              "feels_like": 301.14,
              "temp_min": 302.61,
              "temp_max": 302.61,
              "pressure": 1003,
              "sea_level": 1003,
              "grnd_level": 937,
              "humidity": 25,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 35
          },
          "wind": {
              "speed": 3.91,
              "deg": 159,
              "gust": 4.16
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 03:00:00"
      },
      {
          "dt": 1716357600,
          "main": {
              "temp": 301.12,
              "feels_like": 302.03,
              "temp_min": 301.12,
              "temp_max": 301.12,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 937,
              "humidity": 55,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 55
          },
          "wind": {
              "speed": 5.9,
              "deg": 175,
              "gust": 13.32
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 06:00:00"
      },
      {
          "dt": 1716368400,
          "main": {
              "temp": 299.27,
              "feels_like": 299.27,
              "temp_min": 299.27,
              "temp_max": 299.27,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 938,
              "humidity": 69,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 42
          },
          "wind": {
              "speed": 6.05,
              "deg": 203,
              "gust": 13.97
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 09:00:00"
      },
      {
          "dt": 1716379200,
          "main": {
              "temp": 297.64,
              "feels_like": 298.08,
              "temp_min": 297.64,
              "temp_max": 297.64,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 939,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 68
          },
          "wind": {
              "speed": 4.97,
              "deg": 188,
              "gust": 11.43
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 12:00:00"
      },
      {
          "dt": 1716390000,
          "main": {
              "temp": 301.73,
              "feels_like": 303.1,
              "temp_min": 301.73,
              "temp_max": 301.73,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 940,
              "humidity": 57,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 40
          },
          "wind": {
              "speed": 3.95,
              "deg": 237,
              "gust": 4.57
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 15:00:00"
      },
      {
          "dt": 1716400800,
          "main": {
              "temp": 306.19,
              "feels_like": 307.68,
              "temp_min": 306.19,
              "temp_max": 306.19,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 940,
              "humidity": 43,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 23
          },
          "wind": {
              "speed": 0.38,
              "deg": 65,
              "gust": 1.07
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 18:00:00"
      }
  ],
  "city": {
      "id": 5530022,
      "name": "San Angelo",
      "coord": {
          "lat": 31.465,
          "lon": -100.4405
      },
      "country": "US",
      "population": 93200,
      "timezone": -18000,
      "sunrise": 1715946241,
      "sunset": 1715995954
  }
}

const dallas = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1715968800,
          "main": {
              "temp": 299.68,
              "feels_like": 299.68,
              "temp_min": 299.68,
              "temp_max": 300.58,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 989,
              "humidity": 59,
              "temp_kf": -0.9
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 20
          },
          "wind": {
              "speed": 2.91,
              "deg": 280,
              "gust": 4.28
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-17 18:00:00"
      },
      {
          "dt": 1715979600,
          "main": {
              "temp": 300.59,
              "feels_like": 301.15,
              "temp_min": 300.59,
              "temp_max": 302.41,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 988,
              "humidity": 52,
              "temp_kf": -1.82
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 26
          },
          "wind": {
              "speed": 2.52,
              "deg": 279,
              "gust": 4.08
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-17 21:00:00"
      },
      {
          "dt": 1715990400,
          "main": {
              "temp": 299.59,
              "feels_like": 299.59,
              "temp_min": 299.55,
              "temp_max": 299.59,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 988,
              "humidity": 57,
              "temp_kf": 0.04
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 47
          },
          "wind": {
              "speed": 1.98,
              "deg": 135,
              "gust": 2.36
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 00:00:00"
      },
      {
          "dt": 1716001200,
          "main": {
              "temp": 296.18,
              "feels_like": 296.5,
              "temp_min": 296.18,
              "temp_max": 296.18,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 989,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 24
          },
          "wind": {
              "speed": 1.74,
              "deg": 152,
              "gust": 3.11
          },
          "visibility": 10000,
          "pop": 0.34,
          "rain": {
              "3h": 0.12
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 03:00:00"
      },
      {
          "dt": 1716012000,
          "main": {
              "temp": 295.01,
              "feels_like": 295.34,
              "temp_min": 295.01,
              "temp_max": 295.01,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 990,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 43
          },
          "wind": {
              "speed": 1.52,
              "deg": 131,
              "gust": 1.98
          },
          "visibility": 10000,
          "pop": 0.02,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 06:00:00"
      },
      {
          "dt": 1716022800,
          "main": {
              "temp": 294.1,
              "feels_like": 294.39,
              "temp_min": 294.1,
              "temp_max": 294.1,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 990,
              "humidity": 82,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 1.8,
              "deg": 212,
              "gust": 4.94
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 09:00:00"
      },
      {
          "dt": 1716033600,
          "main": {
              "temp": 294.24,
              "feels_like": 294.44,
              "temp_min": 294.24,
              "temp_max": 294.24,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 991,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.12,
              "deg": 226,
              "gust": 1.17
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 12:00:00"
      },
      {
          "dt": 1716044400,
          "main": {
              "temp": 299.51,
              "feels_like": 299.51,
              "temp_min": 299.51,
              "temp_max": 299.51,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 992,
              "humidity": 56,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.91,
              "deg": 180,
              "gust": 2.35
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 15:00:00"
      },
      {
          "dt": 1716055200,
          "main": {
              "temp": 304.01,
              "feels_like": 304.65,
              "temp_min": 304.01,
              "temp_max": 304.01,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 992,
              "humidity": 45,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.34,
              "deg": 150,
              "gust": 1.83
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 18:00:00"
      },
      {
          "dt": 1716066000,
          "main": {
              "temp": 305.94,
              "feels_like": 305.66,
              "temp_min": 305.94,
              "temp_max": 305.94,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 991,
              "humidity": 35,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.5,
              "deg": 146,
              "gust": 3.57
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 21:00:00"
      },
      {
          "dt": 1716076800,
          "main": {
              "temp": 303.66,
              "feels_like": 304.31,
              "temp_min": 303.66,
              "temp_max": 303.66,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 991,
              "humidity": 46,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.55,
              "deg": 141,
              "gust": 3.38
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 00:00:00"
      },
      {
          "dt": 1716087600,
          "main": {
              "temp": 299.6,
              "feels_like": 299.6,
              "temp_min": 299.6,
              "temp_max": 299.6,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 993,
              "humidity": 67,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.52,
              "deg": 131,
              "gust": 5.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 03:00:00"
      },
      {
          "dt": 1716098400,
          "main": {
              "temp": 297.56,
              "feels_like": 298.04,
              "temp_min": 297.56,
              "temp_max": 297.56,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 994,
              "humidity": 76,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.16,
              "deg": 138,
              "gust": 5.55
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 06:00:00"
      },
      {
          "dt": 1716109200,
          "main": {
              "temp": 295.71,
              "feels_like": 296.21,
              "temp_min": 295.71,
              "temp_max": 295.71,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 994,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.64,
              "deg": 141,
              "gust": 7.39
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 09:00:00"
      },
      {
          "dt": 1716120000,
          "main": {
              "temp": 295.05,
              "feels_like": 295.62,
              "temp_min": 295.05,
              "temp_max": 295.05,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 995,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.09,
              "deg": 156,
              "gust": 6.42
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 12:00:00"
      },
      {
          "dt": 1716130800,
          "main": {
              "temp": 300.05,
              "feels_like": 301.39,
              "temp_min": 300.05,
              "temp_max": 300.05,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 996,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.81,
              "deg": 156,
              "gust": 5.75
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 15:00:00"
      },
      {
          "dt": 1716141600,
          "main": {
              "temp": 304.31,
              "feels_like": 305.83,
              "temp_min": 304.31,
              "temp_max": 304.31,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 995,
              "humidity": 49,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.89,
              "deg": 169,
              "gust": 5.53
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 18:00:00"
      },
      {
          "dt": 1716152400,
          "main": {
              "temp": 305.75,
              "feels_like": 307.17,
              "temp_min": 305.75,
              "temp_max": 305.75,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 993,
              "humidity": 44,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 5
          },
          "wind": {
              "speed": 5.3,
              "deg": 172,
              "gust": 5.77
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 21:00:00"
      },
      {
          "dt": 1716163200,
          "main": {
              "temp": 303.78,
              "feels_like": 305.73,
              "temp_min": 303.78,
              "temp_max": 303.78,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 991,
              "humidity": 53,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 3
          },
          "wind": {
              "speed": 5,
              "deg": 167,
              "gust": 6.52
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 00:00:00"
      },
      {
          "dt": 1716174000,
          "main": {
              "temp": 300.19,
              "feels_like": 301.99,
              "temp_min": 300.19,
              "temp_max": 300.19,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 991,
              "humidity": 69,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.21,
              "deg": 171,
              "gust": 10.16
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 03:00:00"
      },
      {
          "dt": 1716184800,
          "main": {
              "temp": 298.39,
              "feels_like": 298.8,
              "temp_min": 298.39,
              "temp_max": 298.39,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 990,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.36,
              "deg": 163,
              "gust": 13.77
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 06:00:00"
      },
      {
          "dt": 1716195600,
          "main": {
              "temp": 297.02,
              "feels_like": 297.42,
              "temp_min": 297.02,
              "temp_max": 297.02,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 991,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.37,
              "deg": 181,
              "gust": 13.85
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 09:00:00"
      },
      {
          "dt": 1716206400,
          "main": {
              "temp": 295.58,
              "feels_like": 296.05,
              "temp_min": 295.58,
              "temp_max": 295.58,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 992,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.14,
              "deg": 181,
              "gust": 12.65
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 12:00:00"
      },
      {
          "dt": 1716217200,
          "main": {
              "temp": 299.99,
              "feels_like": 301.17,
              "temp_min": 299.99,
              "temp_max": 299.99,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 992,
              "humidity": 62,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 10
          },
          "wind": {
              "speed": 5.75,
              "deg": 171,
              "gust": 9.63
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 15:00:00"
      },
      {
          "dt": 1716228000,
          "main": {
              "temp": 304.25,
              "feels_like": 305.17,
              "temp_min": 304.25,
              "temp_max": 304.25,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 992,
              "humidity": 46,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 15
          },
          "wind": {
              "speed": 6.74,
              "deg": 177,
              "gust": 8.95
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 18:00:00"
      },
      {
          "dt": 1716238800,
          "main": {
              "temp": 304.48,
              "feels_like": 305.53,
              "temp_min": 304.48,
              "temp_max": 304.48,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 990,
              "humidity": 46,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 6
          },
          "wind": {
              "speed": 7.05,
              "deg": 177,
              "gust": 9.13
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 21:00:00"
      },
      {
          "dt": 1716249600,
          "main": {
              "temp": 302.4,
              "feels_like": 304.45,
              "temp_min": 302.4,
              "temp_max": 302.4,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 989,
              "humidity": 59,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 4
          },
          "wind": {
              "speed": 5.76,
              "deg": 175,
              "gust": 9.27
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 00:00:00"
      },
      {
          "dt": 1716260400,
          "main": {
              "temp": 300.27,
              "feels_like": 302.3,
              "temp_min": 300.27,
              "temp_max": 300.27,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 990,
              "humidity": 71,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 37
          },
          "wind": {
              "speed": 4.36,
              "deg": 156,
              "gust": 11.53
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 03:00:00"
      },
      {
          "dt": 1716271200,
          "main": {
              "temp": 298.56,
              "feels_like": 299.14,
              "temp_min": 298.56,
              "temp_max": 298.56,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 989,
              "humidity": 76,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 47
          },
          "wind": {
              "speed": 6.25,
              "deg": 155,
              "gust": 14.21
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 06:00:00"
      },
      {
          "dt": 1716282000,
          "main": {
              "temp": 297.06,
              "feels_like": 297.75,
              "temp_min": 297.06,
              "temp_max": 297.06,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 988,
              "humidity": 86,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 71
          },
          "wind": {
              "speed": 6.54,
              "deg": 173,
              "gust": 14.92
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 09:00:00"
      },
      {
          "dt": 1716292800,
          "main": {
              "temp": 296.88,
              "feels_like": 297.58,
              "temp_min": 296.88,
              "temp_max": 296.88,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 990,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 86
          },
          "wind": {
              "speed": 5.8,
              "deg": 179,
              "gust": 13.64
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 12:00:00"
      },
      {
          "dt": 1716303600,
          "main": {
              "temp": 298.2,
              "feels_like": 298.88,
              "temp_min": 298.2,
              "temp_max": 298.2,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 990,
              "humidity": 81,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.52,
              "deg": 180,
              "gust": 12.06
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 15:00:00"
      },
      {
          "dt": 1716314400,
          "main": {
              "temp": 301.36,
              "feels_like": 304.09,
              "temp_min": 301.36,
              "temp_max": 301.36,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 990,
              "humidity": 69,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 6.43,
              "deg": 184,
              "gust": 10.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 18:00:00"
      },
      {
          "dt": 1716325200,
          "main": {
              "temp": 303.27,
              "feels_like": 307.07,
              "temp_min": 303.27,
              "temp_max": 303.27,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 988,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 6.58,
              "deg": 186,
              "gust": 11.41
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 21:00:00"
      },
      {
          "dt": 1716336000,
          "main": {
              "temp": 304.01,
              "feels_like": 309.52,
              "temp_min": 304.01,
              "temp_max": 304.01,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 986,
              "humidity": 67,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 92
          },
          "wind": {
              "speed": 7.08,
              "deg": 165,
              "gust": 13.15
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 00:00:00"
      },
      {
          "dt": 1716346800,
          "main": {
              "temp": 301.95,
              "feels_like": 305.27,
              "temp_min": 301.95,
              "temp_max": 301.95,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 987,
              "humidity": 69,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 71
          },
          "wind": {
              "speed": 7.07,
              "deg": 168,
              "gust": 14.08
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 03:00:00"
      },
      {
          "dt": 1716357600,
          "main": {
              "temp": 300.02,
              "feels_like": 302.18,
              "temp_min": 300.02,
              "temp_max": 300.02,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 988,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 78
          },
          "wind": {
              "speed": 7.43,
              "deg": 180,
              "gust": 15.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 06:00:00"
      },
      {
          "dt": 1716368400,
          "main": {
              "temp": 298.28,
              "feels_like": 298.89,
              "temp_min": 298.28,
              "temp_max": 298.28,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 988,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 30
          },
          "wind": {
              "speed": 6.44,
              "deg": 185,
              "gust": 16.55
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 09:00:00"
      },
      {
          "dt": 1716379200,
          "main": {
              "temp": 297.2,
              "feels_like": 297.83,
              "temp_min": 297.2,
              "temp_max": 297.2,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 989,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 65
          },
          "wind": {
              "speed": 4.87,
              "deg": 182,
              "gust": 14.85
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 12:00:00"
      },
      {
          "dt": 1716390000,
          "main": {
              "temp": 300.88,
              "feels_like": 302.62,
              "temp_min": 300.88,
              "temp_max": 300.88,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 989,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 7.2,
              "deg": 189,
              "gust": 12.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 15:00:00"
      }
  ],
  "city": {
      "id": 4684888,
      "name": "Dallas",
      "coord": {
          "lat": 32.7763,
          "lon": -96.7969
      },
      "country": "US",
      "population": 1197816,
      "timezone": -18000,
      "sunrise": 1715945204,
      "sunset": 1715995243
  }
}

const austin = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1715979600,
          "main": {
              "temp": 299.2,
              "feels_like": 299.2,
              "temp_min": 299.2,
              "temp_max": 301.26,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 984,
              "humidity": 65,
              "temp_kf": -2.06
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 83
          },
          "wind": {
              "speed": 2.78,
              "deg": 154,
              "gust": 1.82
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-17 21:00:00"
      },
      {
          "dt": 1715990400,
          "main": {
              "temp": 299.56,
              "feels_like": 299.56,
              "temp_min": 299.56,
              "temp_max": 300.25,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 983,
              "humidity": 64,
              "temp_kf": -0.69
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 53
          },
          "wind": {
              "speed": 2.4,
              "deg": 116,
              "gust": 2.78
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 00:00:00"
      },
      {
          "dt": 1716001200,
          "main": {
              "temp": 296.13,
              "feels_like": 296.52,
              "temp_min": 296.13,
              "temp_max": 296.13,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 984,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 86
          },
          "wind": {
              "speed": 2.98,
              "deg": 198,
              "gust": 6.13
          },
          "visibility": 10000,
          "pop": 0.67,
          "rain": {
              "3h": 0.35
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 03:00:00"
      },
      {
          "dt": 1716012000,
          "main": {
              "temp": 294.85,
              "feels_like": 295.32,
              "temp_min": 294.85,
              "temp_max": 294.85,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 985,
              "humidity": 86,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 82
          },
          "wind": {
              "speed": 1.89,
              "deg": 179,
              "gust": 4.75
          },
          "visibility": 10000,
          "pop": 0.38,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 06:00:00"
      },
      {
          "dt": 1716022800,
          "main": {
              "temp": 293.83,
              "feels_like": 294.25,
              "temp_min": 293.83,
              "temp_max": 293.83,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 986,
              "humidity": 88,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 43
          },
          "wind": {
              "speed": 2.26,
              "deg": 202,
              "gust": 5.64
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 09:00:00"
      },
      {
          "dt": 1716033600,
          "main": {
              "temp": 293.4,
              "feels_like": 293.75,
              "temp_min": 293.4,
              "temp_max": 293.4,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 987,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 21
          },
          "wind": {
              "speed": 2.03,
              "deg": 215,
              "gust": 5.94
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 12:00:00"
      },
      {
          "dt": 1716044400,
          "main": {
              "temp": 299.18,
              "feels_like": 299.18,
              "temp_min": 299.18,
              "temp_max": 299.18,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 988,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.09,
              "deg": 209,
              "gust": 6.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 15:00:00"
      },
      {
          "dt": 1716055200,
          "main": {
              "temp": 304.31,
              "feels_like": 304.74,
              "temp_min": 304.31,
              "temp_max": 304.31,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 987,
              "humidity": 43,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.9,
              "deg": 199,
              "gust": 3.28
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 18:00:00"
      },
      {
          "dt": 1716066000,
          "main": {
              "temp": 307.18,
              "feels_like": 306.84,
              "temp_min": 307.18,
              "temp_max": 307.18,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 986,
              "humidity": 32,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.75,
              "deg": 168,
              "gust": 3.25
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 21:00:00"
      },
      {
          "dt": 1716076800,
          "main": {
              "temp": 304,
              "feels_like": 305.52,
              "temp_min": 304,
              "temp_max": 304,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 986,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.79,
              "deg": 137,
              "gust": 5.34
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 00:00:00"
      },
      {
          "dt": 1716087600,
          "main": {
              "temp": 299.01,
              "feels_like": 299.37,
              "temp_min": 299.01,
              "temp_max": 299.01,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 987,
              "humidity": 66,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.74,
              "deg": 124,
              "gust": 6.15
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 03:00:00"
      },
      {
          "dt": 1716098400,
          "main": {
              "temp": 296.53,
              "feels_like": 296.91,
              "temp_min": 296.53,
              "temp_max": 296.53,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 988,
              "humidity": 76,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.76,
              "deg": 163,
              "gust": 8.51
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 06:00:00"
      },
      {
          "dt": 1716109200,
          "main": {
              "temp": 295.22,
              "feels_like": 295.91,
              "temp_min": 295.22,
              "temp_max": 295.22,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 988,
              "humidity": 93,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 2.39,
              "deg": 155,
              "gust": 6.75
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 09:00:00"
      },
      {
          "dt": 1716120000,
          "main": {
              "temp": 294.53,
              "feels_like": 295.2,
              "temp_min": 294.53,
              "temp_max": 294.53,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 990,
              "humidity": 95,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 4
          },
          "wind": {
              "speed": 1.77,
              "deg": 192,
              "gust": 4.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 12:00:00"
      },
      {
          "dt": 1716130800,
          "main": {
              "temp": 299.86,
              "feels_like": 301.53,
              "temp_min": 299.86,
              "temp_max": 299.86,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 990,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 7
          },
          "wind": {
              "speed": 4.16,
              "deg": 162,
              "gust": 5.79
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 15:00:00"
      },
      {
          "dt": 1716141600,
          "main": {
              "temp": 304.39,
              "feels_like": 305.77,
              "temp_min": 304.39,
              "temp_max": 304.39,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 989,
              "humidity": 48,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 4
          },
          "wind": {
              "speed": 4.44,
              "deg": 162,
              "gust": 4.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 18:00:00"
      },
      {
          "dt": 1716152400,
          "main": {
              "temp": 306.48,
              "feels_like": 307.02,
              "temp_min": 306.48,
              "temp_max": 306.48,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 987,
              "humidity": 38,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 2
          },
          "wind": {
              "speed": 4.3,
              "deg": 157,
              "gust": 4.85
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 21:00:00"
      },
      {
          "dt": 1716163200,
          "main": {
              "temp": 304.75,
              "feels_like": 305.95,
              "temp_min": 304.75,
              "temp_max": 304.75,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 986,
              "humidity": 46,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 3.61,
              "deg": 136,
              "gust": 5.35
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 00:00:00"
      },
      {
          "dt": 1716174000,
          "main": {
              "temp": 299.55,
              "feels_like": 299.55,
              "temp_min": 299.55,
              "temp_max": 299.55,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 986,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.91,
              "deg": 143,
              "gust": 9.18
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 03:00:00"
      },
      {
          "dt": 1716184800,
          "main": {
              "temp": 296.52,
              "feels_like": 296.98,
              "temp_min": 296.52,
              "temp_max": 296.52,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 985,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.56,
              "deg": 162,
              "gust": 13.67
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 06:00:00"
      },
      {
          "dt": 1716195600,
          "main": {
              "temp": 294.96,
              "feels_like": 295.65,
              "temp_min": 294.96,
              "temp_max": 294.96,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 985,
              "humidity": 94,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 3.69,
              "deg": 175,
              "gust": 11.91
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 09:00:00"
      },
      {
          "dt": 1716206400,
          "main": {
              "temp": 295.81,
              "feels_like": 296.38,
              "temp_min": 295.81,
              "temp_max": 295.81,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 986,
              "humidity": 86,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 38
          },
          "wind": {
              "speed": 4.72,
              "deg": 186,
              "gust": 8.74
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 12:00:00"
      },
      {
          "dt": 1716217200,
          "main": {
              "temp": 299.62,
              "feels_like": 299.62,
              "temp_min": 299.62,
              "temp_max": 299.62,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 987,
              "humidity": 66,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 77
          },
          "wind": {
              "speed": 5.2,
              "deg": 179,
              "gust": 7.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 15:00:00"
      },
      {
          "dt": 1716228000,
          "main": {
              "temp": 303.9,
              "feels_like": 305.55,
              "temp_min": 303.9,
              "temp_max": 303.9,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 986,
              "humidity": 51,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 39
          },
          "wind": {
              "speed": 5.69,
              "deg": 177,
              "gust": 7.23
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 18:00:00"
      },
      {
          "dt": 1716238800,
          "main": {
              "temp": 307.79,
              "feels_like": 308.9,
              "temp_min": 307.79,
              "temp_max": 307.79,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 984,
              "humidity": 37,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.2,
              "deg": 167,
              "gust": 6.83
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 21:00:00"
      },
      {
          "dt": 1716249600,
          "main": {
              "temp": 306.23,
              "feels_like": 308.24,
              "temp_min": 306.23,
              "temp_max": 306.23,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 982,
              "humidity": 45,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.65,
              "deg": 146,
              "gust": 7.62
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 00:00:00"
      },
      {
          "dt": 1716260400,
          "main": {
              "temp": 300.41,
              "feels_like": 302.36,
              "temp_min": 300.41,
              "temp_max": 300.41,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 984,
              "humidity": 69,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 20
          },
          "wind": {
              "speed": 5.27,
              "deg": 154,
              "gust": 11.6
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 03:00:00"
      },
      {
          "dt": 1716271200,
          "main": {
              "temp": 297.26,
              "feels_like": 298.1,
              "temp_min": 297.26,
              "temp_max": 297.26,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 985,
              "humidity": 91,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 54
          },
          "wind": {
              "speed": 4.66,
              "deg": 166,
              "gust": 12.13
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 06:00:00"
      },
      {
          "dt": 1716282000,
          "main": {
              "temp": 297.57,
              "feels_like": 298.26,
              "temp_min": 297.57,
              "temp_max": 297.57,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 983,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.84,
              "deg": 167,
              "gust": 11.28
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 09:00:00"
      },
      {
          "dt": 1716292800,
          "main": {
              "temp": 297.36,
              "feels_like": 298.19,
              "temp_min": 297.36,
              "temp_max": 297.36,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 984,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 3.62,
              "deg": 157,
              "gust": 10.22
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
              "3h": 0.18
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 12:00:00"
      },
      {
          "dt": 1716303600,
          "main": {
              "temp": 299.47,
              "feels_like": 299.47,
              "temp_min": 299.47,
              "temp_max": 299.47,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 985,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.67,
              "deg": 181,
              "gust": 9.53
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
              "3h": 0.13
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 15:00:00"
      },
      {
          "dt": 1716314400,
          "main": {
              "temp": 302.94,
              "feels_like": 306.38,
              "temp_min": 302.94,
              "temp_max": 302.94,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 985,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.92,
              "deg": 185,
              "gust": 8.84
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 18:00:00"
      },
      {
          "dt": 1716325200,
          "main": {
              "temp": 309.28,
              "feels_like": 312.21,
              "temp_min": 309.28,
              "temp_max": 309.28,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 982,
              "humidity": 39,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 59
          },
          "wind": {
              "speed": 5.79,
              "deg": 172,
              "gust": 8.33
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 21:00:00"
      },
      {
          "dt": 1716336000,
          "main": {
              "temp": 306.32,
              "feels_like": 310.08,
              "temp_min": 306.32,
              "temp_max": 306.32,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 981,
              "humidity": 51,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 76
          },
          "wind": {
              "speed": 6.69,
              "deg": 150,
              "gust": 9.25
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 00:00:00"
      },
      {
          "dt": 1716346800,
          "main": {
              "temp": 301.02,
              "feels_like": 303.57,
              "temp_min": 301.02,
              "temp_max": 301.02,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 983,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 98
          },
          "wind": {
              "speed": 6.31,
              "deg": 153,
              "gust": 12.63
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 03:00:00"
      },
      {
          "dt": 1716357600,
          "main": {
              "temp": 298,
              "feels_like": 298.81,
              "temp_min": 298,
              "temp_max": 298,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 984,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 85
          },
          "wind": {
              "speed": 5.52,
              "deg": 160,
              "gust": 15.05
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 06:00:00"
      },
      {
          "dt": 1716368400,
          "main": {
              "temp": 297.77,
              "feels_like": 298.59,
              "temp_min": 297.77,
              "temp_max": 297.77,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 983,
              "humidity": 88,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.9,
              "deg": 171,
              "gust": 14.19
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 09:00:00"
      },
      {
          "dt": 1716379200,
          "main": {
              "temp": 297.35,
              "feels_like": 298.12,
              "temp_min": 297.35,
              "temp_max": 297.35,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 984,
              "humidity": 88,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.12,
              "deg": 173,
              "gust": 12.32
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 12:00:00"
      },
      {
          "dt": 1716390000,
          "main": {
              "temp": 301.23,
              "feels_like": 303.57,
              "temp_min": 301.23,
              "temp_max": 301.23,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 985,
              "humidity": 67,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 86
          },
          "wind": {
              "speed": 5.66,
              "deg": 170,
              "gust": 8.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 15:00:00"
      },
      {
          "dt": 1716400800,
          "main": {
              "temp": 306.77,
              "feels_like": 309.51,
              "temp_min": 306.77,
              "temp_max": 306.77,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 985,
              "humidity": 46,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 76
          },
          "wind": {
              "speed": 6.23,
              "deg": 179,
              "gust": 8.61
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 18:00:00"
      }
  ],
  "city": {
      "id": 4671654,
      "name": "Austin",
      "coord": {
          "lat": 30.2711,
          "lon": -97.7437
      },
      "country": "US",
      "population": 790390,
      "timezone": -18000,
      "sunrise": 1715945739,
      "sunset": 1715995162
  }
}

const houston = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1715990400,
          "main": {
              "temp": 295.6,
              "feels_like": 296.07,
              "temp_min": 295.31,
              "temp_max": 295.6,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 1005,
              "humidity": 83,
              "temp_kf": 0.29
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.85,
              "deg": 32,
              "gust": 2.04
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 2.84
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 00:00:00"
      },
      {
          "dt": 1716001200,
          "main": {
              "temp": 294.91,
              "feels_like": 295.39,
              "temp_min": 294.5,
              "temp_max": 294.91,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1006,
              "humidity": 86,
              "temp_kf": 0.41
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 60
          },
          "wind": {
              "speed": 0.81,
              "deg": 273,
              "gust": 0.92
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 03:00:00"
      },
      {
          "dt": 1716012000,
          "main": {
              "temp": 293.98,
              "feels_like": 294.42,
              "temp_min": 293.98,
              "temp_max": 293.98,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1007,
              "humidity": 88,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 69
          },
          "wind": {
              "speed": 2.5,
              "deg": 174,
              "gust": 5.44
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 06:00:00"
      },
      {
          "dt": 1716022800,
          "main": {
              "temp": 293.29,
              "feels_like": 293.63,
              "temp_min": 293.29,
              "temp_max": 293.29,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1007,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 30
          },
          "wind": {
              "speed": 1.33,
              "deg": 227,
              "gust": 1.38
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-18 09:00:00"
      },
      {
          "dt": 1716033600,
          "main": {
              "temp": 293.48,
              "feels_like": 293.89,
              "temp_min": 293.48,
              "temp_max": 293.48,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1009,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 16
          },
          "wind": {
              "speed": 0.19,
              "deg": 235,
              "gust": 0.08
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 12:00:00"
      },
      {
          "dt": 1716044400,
          "main": {
              "temp": 299.03,
              "feels_like": 299.4,
              "temp_min": 299.03,
              "temp_max": 299.03,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1010,
              "humidity": 66,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.56,
              "deg": 165,
              "gust": 2.25
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 15:00:00"
      },
      {
          "dt": 1716055200,
          "main": {
              "temp": 304.93,
              "feels_like": 306.24,
              "temp_min": 304.93,
              "temp_max": 304.93,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1009,
              "humidity": 46,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 0.59,
              "deg": 189,
              "gust": 0.68
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 18:00:00"
      },
      {
          "dt": 1716066000,
          "main": {
              "temp": 306.85,
              "feels_like": 307.6,
              "temp_min": 306.85,
              "temp_max": 306.85,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1008,
              "humidity": 38,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.18,
              "deg": 132,
              "gust": 1.36
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-18 21:00:00"
      },
      {
          "dt": 1716076800,
          "main": {
              "temp": 303.59,
              "feels_like": 305.41,
              "temp_min": 303.59,
              "temp_max": 303.59,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1008,
              "humidity": 53,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 4.22,
              "deg": 134,
              "gust": 3.48
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 00:00:00"
      },
      {
          "dt": 1716087600,
          "main": {
              "temp": 299.79,
              "feels_like": 299.79,
              "temp_min": 299.79,
              "temp_max": 299.79,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1009,
              "humidity": 69,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.41,
              "deg": 150,
              "gust": 3.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 03:00:00"
      },
      {
          "dt": 1716098400,
          "main": {
              "temp": 298.17,
              "feels_like": 298.79,
              "temp_min": 298.17,
              "temp_max": 298.17,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1010,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.79,
              "deg": 143,
              "gust": 3.66
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 06:00:00"
      },
      {
          "dt": 1716109200,
          "main": {
              "temp": 297.03,
              "feels_like": 297.69,
              "temp_min": 297.03,
              "temp_max": 297.03,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1010,
              "humidity": 85,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.47,
              "deg": 120,
              "gust": 4.62
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-19 09:00:00"
      },
      {
          "dt": 1716120000,
          "main": {
              "temp": 296.48,
              "feels_like": 297.22,
              "temp_min": 296.48,
              "temp_max": 296.48,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 1011,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.4,
              "deg": 82,
              "gust": 4.13
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 12:00:00"
      },
      {
          "dt": 1716130800,
          "main": {
              "temp": 301.49,
              "feels_like": 303.63,
              "temp_min": 301.49,
              "temp_max": 301.49,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1012,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.65,
              "deg": 120,
              "gust": 4.14
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 15:00:00"
      },
      {
          "dt": 1716141600,
          "main": {
              "temp": 305.88,
              "feels_like": 306.93,
              "temp_min": 305.88,
              "temp_max": 305.88,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 1011,
              "humidity": 42,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.68,
              "deg": 133,
              "gust": 3.59
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 18:00:00"
      },
      {
          "dt": 1716152400,
          "main": {
              "temp": 306.89,
              "feels_like": 307.44,
              "temp_min": 306.89,
              "temp_max": 306.89,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1008,
              "humidity": 37,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.17,
              "deg": 123,
              "gust": 2.98
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-19 21:00:00"
      },
      {
          "dt": 1716163200,
          "main": {
              "temp": 304.29,
              "feels_like": 304.88,
              "temp_min": 304.29,
              "temp_max": 304.29,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1008,
              "humidity": 44,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 4.32,
              "deg": 126,
              "gust": 3.62
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 00:00:00"
      },
      {
          "dt": 1716174000,
          "main": {
              "temp": 299.72,
              "feels_like": 299.72,
              "temp_min": 299.72,
              "temp_max": 299.72,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1008,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.28,
              "deg": 156,
              "gust": 6.8
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 03:00:00"
      },
      {
          "dt": 1716184800,
          "main": {
              "temp": 297.82,
              "feels_like": 298.51,
              "temp_min": 297.82,
              "temp_max": 297.82,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1008,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.69,
              "deg": 168,
              "gust": 7.88
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 06:00:00"
      },
      {
          "dt": 1716195600,
          "main": {
              "temp": 296.74,
              "feels_like": 297.48,
              "temp_min": 296.74,
              "temp_max": 296.74,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1007,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.72,
              "deg": 160,
              "gust": 8.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-20 09:00:00"
      },
      {
          "dt": 1716206400,
          "main": {
              "temp": 296.37,
              "feels_like": 297.18,
              "temp_min": 296.37,
              "temp_max": 296.37,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1008,
              "humidity": 93,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.26,
              "deg": 165,
              "gust": 8.73
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 12:00:00"
      },
      {
          "dt": 1716217200,
          "main": {
              "temp": 301.83,
              "feels_like": 303.94,
              "temp_min": 301.83,
              "temp_max": 301.83,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1009,
              "humidity": 62,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 10
          },
          "wind": {
              "speed": 3.59,
              "deg": 173,
              "gust": 5.38
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 15:00:00"
      },
      {
          "dt": 1716228000,
          "main": {
              "temp": 306.47,
              "feels_like": 306.6,
              "temp_min": 306.47,
              "temp_max": 306.47,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1009,
              "humidity": 36,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 5
          },
          "wind": {
              "speed": 3.95,
              "deg": 164,
              "gust": 4.48
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 18:00:00"
      },
      {
          "dt": 1716238800,
          "main": {
              "temp": 306.96,
              "feels_like": 307.55,
              "temp_min": 306.96,
              "temp_max": 306.96,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1007,
              "humidity": 37,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 4.86,
              "deg": 147,
              "gust": 4.1
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-20 21:00:00"
      },
      {
          "dt": 1716249600,
          "main": {
              "temp": 303.01,
              "feels_like": 305.16,
              "temp_min": 303.01,
              "temp_max": 303.01,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1006,
              "humidity": 57,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.15,
              "deg": 144,
              "gust": 5.15
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 00:00:00"
      },
      {
          "dt": 1716260400,
          "main": {
              "temp": 299.54,
              "feels_like": 299.54,
              "temp_min": 299.54,
              "temp_max": 299.54,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1007,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 2
          },
          "wind": {
              "speed": 3.91,
              "deg": 144,
              "gust": 8.18
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 03:00:00"
      },
      {
          "dt": 1716271200,
          "main": {
              "temp": 298.53,
              "feels_like": 299.4,
              "temp_min": 298.53,
              "temp_max": 298.53,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1007,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 10
          },
          "wind": {
              "speed": 3.71,
              "deg": 142,
              "gust": 9.75
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 06:00:00"
      },
      {
          "dt": 1716282000,
          "main": {
              "temp": 298.17,
              "feels_like": 299.05,
              "temp_min": 298.17,
              "temp_max": 298.17,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1006,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 98
          },
          "wind": {
              "speed": 3.47,
              "deg": 145,
              "gust": 10.03
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 09:00:00"
      },
      {
          "dt": 1716292800,
          "main": {
              "temp": 297.95,
              "feels_like": 298.86,
              "temp_min": 297.95,
              "temp_max": 297.95,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1007,
              "humidity": 91,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 63
          },
          "wind": {
              "speed": 3.6,
              "deg": 153,
              "gust": 10.7
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 12:00:00"
      },
      {
          "dt": 1716303600,
          "main": {
              "temp": 302.94,
              "feels_like": 306.58,
              "temp_min": 302.94,
              "temp_max": 302.94,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1008,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 36
          },
          "wind": {
              "speed": 5.11,
              "deg": 167,
              "gust": 7.66
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 15:00:00"
      },
      {
          "dt": 1716314400,
          "main": {
              "temp": 306.75,
              "feels_like": 310.68,
              "temp_min": 306.75,
              "temp_max": 306.75,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1007,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 56
          },
          "wind": {
              "speed": 5.74,
              "deg": 169,
              "gust": 7.5
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 18:00:00"
      },
      {
          "dt": 1716325200,
          "main": {
              "temp": 304.9,
              "feels_like": 309.08,
              "temp_min": 304.9,
              "temp_max": 304.9,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1006,
              "humidity": 58,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 92
          },
          "wind": {
              "speed": 6.31,
              "deg": 148,
              "gust": 7.24
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-21 21:00:00"
      },
      {
          "dt": 1716336000,
          "main": {
              "temp": 303.01,
              "feels_like": 306.95,
              "temp_min": 303.01,
              "temp_max": 303.01,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1006,
              "humidity": 66,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 88
          },
          "wind": {
              "speed": 5.58,
              "deg": 152,
              "gust": 6.64
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 00:00:00"
      },
      {
          "dt": 1716346800,
          "main": {
              "temp": 299.62,
              "feels_like": 299.62,
              "temp_min": 299.62,
              "temp_max": 299.62,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1007,
              "humidity": 86,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 74
          },
          "wind": {
              "speed": 4.43,
              "deg": 145,
              "gust": 9.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 03:00:00"
      },
      {
          "dt": 1716357600,
          "main": {
              "temp": 298.67,
              "feels_like": 299.6,
              "temp_min": 298.67,
              "temp_max": 298.67,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1007,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 65
          },
          "wind": {
              "speed": 4.16,
              "deg": 155,
              "gust": 10.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 06:00:00"
      },
      {
          "dt": 1716368400,
          "main": {
              "temp": 297.79,
              "feels_like": 298.69,
              "temp_min": 297.79,
              "temp_max": 297.79,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1006,
              "humidity": 91,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 50
          },
          "wind": {
              "speed": 3.16,
              "deg": 155,
              "gust": 9.98
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-22 09:00:00"
      },
      {
          "dt": 1716379200,
          "main": {
              "temp": 298.12,
              "feels_like": 299.07,
              "temp_min": 298.12,
              "temp_max": 298.12,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1006,
              "humidity": 92,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 72
          },
          "wind": {
              "speed": 4.32,
              "deg": 153,
              "gust": 10.85
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 12:00:00"
      },
      {
          "dt": 1716390000,
          "main": {
              "temp": 302.82,
              "feels_like": 306.13,
              "temp_min": 302.82,
              "temp_max": 302.82,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1008,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 97
          },
          "wind": {
              "speed": 5.26,
              "deg": 171,
              "gust": 7.97
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 15:00:00"
      },
      {
          "dt": 1716400800,
          "main": {
              "temp": 307.1,
              "feels_like": 309.86,
              "temp_min": 307.1,
              "temp_max": 307.1,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1008,
              "humidity": 45,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 51
          },
          "wind": {
              "speed": 5.91,
              "deg": 168,
              "gust": 7.59
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 18:00:00"
      },
      {
          "dt": 1716411600,
          "main": {
              "temp": 306.89,
              "feels_like": 309.46,
              "temp_min": 306.89,
              "temp_max": 306.89,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1007,
              "humidity": 45,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 55
          },
          "wind": {
              "speed": 6.14,
              "deg": 163,
              "gust": 7.45
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-22 21:00:00"
      }
  ],
  "city": {
      "id": 4699066,
      "name": "Houston",
      "coord": {
          "lat": 29.7589,
          "lon": -95.3677
      },
      "country": "US",
      "population": 2099451,
      "timezone": -18000,
      "sunrise": 1715945230,
      "sunset": 1715994530
  }
}

const citiesArr = [sanAngelo, dallas, austin, houston];

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const fetchForecast = createAsyncThunk('cities/fetchForecast', async search => {
  // Get the coordinates of the city that has been searched
  const coordResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${API_KEY}`);
      
  const coordinates = {lat: coordResponse.data[0].lat, lon: coordResponse.data[0].lon};
  
  // Get the forecast for the coordinates of the searched city
  const forcastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`);

  return forcastResponse;
}); 

export const cityWeatherSlice = createSlice({
	name: 'cityWeather', // The name to reference when accessing the slice.
	initialState: { // The slice starts empty when the app initially loads.
    cities: [], //citiesArr
    status: 'idle',
    error: null,
  },
	reducers: {}, // Reducers is where the action functions are made.
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities.push(action.payload);
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default cityWeatherSlice.reducer;