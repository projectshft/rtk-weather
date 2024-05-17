'use client'
const cityCoords = {
      "name": "San Angelo",
      "local_names": {
          "ru": "Сан-Анджело",
          "en": "San Angelo"
      },
      "lat": 31.4649685,
      "lon": -100.4405094,
      "country": "US",
      "state": "Texas"
}

const cityWeather = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1715839200,
          "main": {
              "temp": 299.16,
              "feels_like": 299.16,
              "temp_min": 296.88,
              "temp_max": 299.16,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 937,
              "humidity": 49,
              "temp_kf": 2.28
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
              "speed": 8.42,
              "deg": 162,
              "gust": 17.27
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-16 06:00:00"
      },
      {
          "dt": 1715850000,
          "main": {
              "temp": 295.79,
              "feels_like": 295.91,
              "temp_min": 293.53,
              "temp_max": 295.79,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 937,
              "humidity": 69,
              "temp_kf": 2.26
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
              "all": 0
          },
          "wind": {
              "speed": 1.71,
              "deg": 127,
              "gust": 7.21
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 1.14
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-16 09:00:00"
      },
      {
          "dt": 1715860800,
          "main": {
              "temp": 292.7,
              "feels_like": 293.14,
              "temp_min": 292.7,
              "temp_max": 292.7,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 938,
              "humidity": 93,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 501,
                  "main": "Rain",
                  "description": "moderate rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 31
          },
          "wind": {
              "speed": 1.05,
              "deg": 128,
              "gust": 2.48
          },
          "visibility": 2519,
          "pop": 1,
          "rain": {
              "3h": 5.31
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-16 12:00:00"
      },
      {
          "dt": 1715871600,
          "main": {
              "temp": 297.69,
              "feels_like": 298.16,
              "temp_min": 297.69,
              "temp_max": 297.69,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 938,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 501,
                  "main": "Rain",
                  "description": "moderate rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 87
          },
          "wind": {
              "speed": 4.76,
              "deg": 179,
              "gust": 6.69
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 3.57
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-16 15:00:00"
      },
      {
          "dt": 1715882400,
          "main": {
              "temp": 297.11,
              "feels_like": 297.65,
              "temp_min": 297.11,
              "temp_max": 297.11,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 937,
              "humidity": 80,
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
              "all": 82
          },
          "wind": {
              "speed": 7.17,
              "deg": 171,
              "gust": 9.17
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 1.1
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-16 18:00:00"
      },
      {
          "dt": 1715893200,
          "main": {
              "temp": 306.54,
              "feels_like": 304.75,
              "temp_min": 306.54,
              "temp_max": 306.54,
              "pressure": 999,
              "sea_level": 999,
              "grnd_level": 933,
              "humidity": 23,
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
              "all": 17
          },
          "wind": {
              "speed": 6.26,
              "deg": 218,
              "gust": 9.22
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-16 21:00:00"
      },
      {
          "dt": 1715904000,
          "main": {
              "temp": 297.78,
              "feels_like": 297.6,
              "temp_min": 297.78,
              "temp_max": 297.78,
              "pressure": 1000,
              "sea_level": 1000,
              "grnd_level": 933,
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
              "all": 9
          },
          "wind": {
              "speed": 10.61,
              "deg": 328,
              "gust": 13.29
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-17 00:00:00"
      },
      {
          "dt": 1715914800,
          "main": {
              "temp": 292.79,
              "feels_like": 292.45,
              "temp_min": 292.79,
              "temp_max": 292.79,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 937,
              "humidity": 63,
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
              "speed": 5.38,
              "deg": 28,
              "gust": 10.78
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-17 03:00:00"
      },
      {
          "dt": 1715925600,
          "main": {
              "temp": 291.34,
              "feels_like": 291.54,
              "temp_min": 291.34,
              "temp_max": 291.34,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 938,
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
              "all": 1
          },
          "wind": {
              "speed": 2.92,
              "deg": 338,
              "gust": 4.59
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-17 06:00:00"
      },
      {
          "dt": 1715936400,
          "main": {
              "temp": 291.51,
              "feels_like": 291.62,
              "temp_min": 291.51,
              "temp_max": 291.51,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 938,
              "humidity": 85,
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
              "speed": 3.63,
              "deg": 301,
              "gust": 4.9
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-17 09:00:00"
      },
      {
          "dt": 1715947200,
          "main": {
              "temp": 289.36,
              "feels_like": 289.02,
              "temp_min": 289.36,
              "temp_max": 289.36,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 939,
              "humidity": 76,
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
              "speed": 2.34,
              "deg": 252,
              "gust": 2.5
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-17 12:00:00"
      },
      {
          "dt": 1715958000,
          "main": {
              "temp": 295.6,
              "feels_like": 295.39,
              "temp_min": 295.6,
              "temp_max": 295.6,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 940,
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
              "speed": 6.82,
              "deg": 311,
              "gust": 8.38
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-05-17 15:00:00"
      },
      {
          "dt": 1715968800,
          "main": {
              "temp": 299.46,
              "feels_like": 299.46,
              "temp_min": 299.46,
              "temp_max": 299.46,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 940,
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
              "speed": 4.58,
              "deg": 349,
              "gust": 5.31
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
              "temp": 302.03,
              "feels_like": 301.31,
              "temp_min": 302.03,
              "temp_max": 302.03,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 939,
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
              "all": 0
          },
          "wind": {
              "speed": 3.78,
              "deg": 330,
              "gust": 4.98
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
              "temp": 301.84,
              "feels_like": 301.07,
              "temp_min": 301.84,
              "temp_max": 301.84,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 939,
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
              "speed": 2.93,
              "deg": 346,
              "gust": 4.5
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
              "temp": 296.76,
              "feels_like": 296.46,
              "temp_min": 296.76,
              "temp_max": 296.76,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 940,
              "humidity": 49,
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
              "all": 51
          },
          "wind": {
              "speed": 3.43,
              "deg": 52,
              "gust": 4.46
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
              "temp": 294.3,
              "feels_like": 294.17,
              "temp_min": 294.3,
              "temp_max": 294.3,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 941,
              "humidity": 65,
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
              "all": 46
          },
          "wind": {
              "speed": 3.19,
              "deg": 106,
              "gust": 4.47
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
              "temp": 293.34,
              "feels_like": 292.93,
              "temp_min": 293.34,
              "temp_max": 293.34,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 940,
              "humidity": 58,
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
              "speed": 2.57,
              "deg": 176,
              "gust": 2.63
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
              "temp": 292.67,
              "feels_like": 291.93,
              "temp_min": 292.67,
              "temp_max": 292.67,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 942,
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
              "all": 0
          },
          "wind": {
              "speed": 2.84,
              "deg": 198,
              "gust": 2.96
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
              "temp": 299.79,
              "feels_like": 299.79,
              "temp_min": 299.79,
              "temp_max": 299.79,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 943,
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
              "speed": 5.18,
              "deg": 205,
              "gust": 7.15
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
              "temp": 306.65,
              "feels_like": 305.34,
              "temp_min": 306.65,
              "temp_max": 306.65,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 942,
              "humidity": 27,
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
              "speed": 4.88,
              "deg": 211,
              "gust": 5.08
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
              "temp": 309.86,
              "feels_like": 307.59,
              "temp_min": 309.86,
              "temp_max": 309.86,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 941,
              "humidity": 16,
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
              "speed": 3.47,
              "deg": 206,
              "gust": 4.54
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
              "temp": 308.45,
              "feels_like": 306.3,
              "temp_min": 308.45,
              "temp_max": 308.45,
              "pressure": 1006,
              "sea_level": 1006,
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
              "speed": 4.17,
              "deg": 150,
              "gust": 5.68
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
              "temp": 300.81,
              "feels_like": 299.81,
              "temp_min": 300.81,
              "temp_max": 300.81,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 941,
              "humidity": 25,
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
              "speed": 4.56,
              "deg": 161,
              "gust": 8.75
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
              "temp": 298.07,
              "feels_like": 297.69,
              "temp_min": 298.07,
              "temp_max": 298.07,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 942,
              "humidity": 41,
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
              "speed": 5.41,
              "deg": 158,
              "gust": 13.9
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
              "temp": 297.85,
              "feels_like": 297.89,
              "temp_min": 297.85,
              "temp_max": 297.85,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 942,
              "humidity": 58,
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
              "speed": 7.04,
              "deg": 180,
              "gust": 17.08
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
              "temp": 296.88,
              "feels_like": 297.14,
              "temp_min": 296.88,
              "temp_max": 296.88,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 943,
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
              "all": 0
          },
          "wind": {
              "speed": 6.3,
              "deg": 199,
              "gust": 16.27
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
              "temp": 303.18,
              "feels_like": 303.51,
              "temp_min": 303.18,
              "temp_max": 303.18,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 943,
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
              "speed": 10.6,
              "deg": 200,
              "gust": 15.57
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
              "temp": 309.44,
              "feels_like": 308.59,
              "temp_min": 309.44,
              "temp_max": 309.44,
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
              "all": 1
          },
          "wind": {
              "speed": 10.14,
              "deg": 194,
              "gust": 10.78
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
              "temp": 311.13,
              "feels_like": 309.37,
              "temp_min": 311.13,
              "temp_max": 311.13,
              "pressure": 1006,
              "sea_level": 1006,
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
              "all": 3
          },
          "wind": {
              "speed": 8.99,
              "deg": 188,
              "gust": 8.66
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
              "temp": 309.19,
              "feels_like": 307.88,
              "temp_min": 309.19,
              "temp_max": 309.19,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 939,
              "humidity": 23,
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
              "speed": 7.35,
              "deg": 189,
              "gust": 9.59
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
              "temp": 303.92,
              "feels_like": 302.56,
              "temp_min": 303.92,
              "temp_max": 303.92,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 939,
              "humidity": 29,
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
              "all": 17
          },
          "wind": {
              "speed": 7.96,
              "deg": 164,
              "gust": 16.78
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
              "temp": 300.48,
              "feels_like": 300.15,
              "temp_min": 300.48,
              "temp_max": 300.48,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 939,
              "humidity": 38,
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
              "all": 23
          },
          "wind": {
              "speed": 8.41,
              "deg": 175,
              "gust": 18.1
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
              "temp": 297.91,
              "feels_like": 297.75,
              "temp_min": 297.91,
              "temp_max": 297.91,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 939,
              "humidity": 50,
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
              "speed": 7.22,
              "deg": 190,
              "gust": 16.73
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
              "temp": 296.44,
              "feels_like": 296.65,
              "temp_min": 296.44,
              "temp_max": 296.44,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 939,
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
              "all": 0
          },
          "wind": {
              "speed": 5.87,
              "deg": 189,
              "gust": 15.1
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
              "temp": 302.76,
              "feels_like": 304.08,
              "temp_min": 302.76,
              "temp_max": 302.76,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 939,
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
              "speed": 9.7,
              "deg": 189,
              "gust": 13.48
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
              "temp": 309.11,
              "feels_like": 310.32,
              "temp_min": 309.11,
              "temp_max": 309.11,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 939,
              "humidity": 34,
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
              "all": 27
          },
          "wind": {
              "speed": 9.64,
              "deg": 208,
              "gust": 9.88
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
              "temp": 311.9,
              "feels_like": 312.21,
              "temp_min": 311.9,
              "temp_max": 311.9,
              "pressure": 1002,
              "sea_level": 1002,
              "grnd_level": 936,
              "humidity": 25,
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
              "all": 27
          },
          "wind": {
              "speed": 8.64,
              "deg": 207,
              "gust": 9.85
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
              "temp": 311.04,
              "feels_like": 310.89,
              "temp_min": 311.04,
              "temp_max": 311.04,
              "pressure": 1001,
              "sea_level": 1001,
              "grnd_level": 935,
              "humidity": 25,
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
              "all": 20
          },
          "wind": {
              "speed": 7.05,
              "deg": 207,
              "gust": 8.77
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
              "temp": 304.63,
              "feels_like": 303.97,
              "temp_min": 304.63,
              "temp_max": 304.63,
              "pressure": 1002,
              "sea_level": 1002,
              "grnd_level": 936,
              "humidity": 35,
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
              "speed": 4.48,
              "deg": 178,
              "gust": 11.31
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-05-21 03:00:00"
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
      "sunrise": 1715773514,
      "sunset": 1715823072
  }
}

export default function WeatherTable() {

  const temps = cityWeather.list.map(weather => weather.main.temp); // Gets all temps
  
  // Split the array of 40 temps into 5 sub-arrays of temps.
  // Each array should represent a day of temp data.
  const getTempsPerDay = (tempsArr) => {

    const chunk = 8;

    const groupedTemps = tempsArr.reduce((result, item, index) => {
        if (index % chunk === 0) {
            result.push(tempsArr.slice(index, index + chunk));
        }
        return result;
    }, []);
    return groupedTemps;
  };

  const allTempsPerDay = getTempsPerDay(temps);

  // Gets the average of an array of temps
  const getTempsAvg = (tempsArr) => {
    return tempsArr.reduce((result, item) => result + item, 0 ) / tempsArr.length;
  };

  // Assuming that the passed value is Kelvin, this function will convert it to Fahrenheit
  const convertKToF = (temp) => {
    return Math.round(1.8 * (temp - 273) + 32);
  }
  
  // Iterates through the temps grouped by day and gets the average grouped by day
  // [76, 73, 82, 87, 88]
  const avgTempsPerDay = allTempsPerDay.reduce((result, item) => {
    result.push(convertKToF(getTempsAvg(item)));
    return result;
    }, []);

  const pressure = cityWeather.list.map(weather => weather.main.pressure);
  const humidity = cityWeather.list.map(weather => weather.main.humidity);

  return (
    <div className='container'>
      <div className='col-12 text-center'>
        <table className='table table-striped'>
          <thead className='table-dark'>
            <tr>
              <th>City</th>
              <th>Temperature (F)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cityWeather.city.name}</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}