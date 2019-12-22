class Weather{
  constructor(city){
    this.apiKey = 'dd6b9b5a114cf69768a7981af4bb973d';
    this.city = city;
    // this.country = country;
  }

  //fetch weather from api
  async getWeather(){
    // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`); // makes http request only when if true
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&&APPID=${this.apiKey}`); // makes http request only when if true

    const responseData = await response.json(); // turns our response into json only if hhtp request is made.

    return responseData;// returns our data in an object format. Also a promise.
  }

  //Change Weather Location
  changeLocation(city){
    this.city = city;
  }
}


//Example Response from the api
// {
//   "coord": {"lon": -122.08,"lat": 37.39},
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 296.71,
//     "pressure": 1013,
//     "humidity": 53,
//     "temp_min": 294.82,
//     "temp_max": 298.71
//   },
//   "visibility": 16093,
//   "wind": {
//     "speed": 1.5,
//     "deg": 350
//   },
//   "clouds": {
//     "all": 1
//   },
//   "dt": 1560350645,
//   "sys": {
//     "type": 1,
//     "id": 5122,
//     "message": 0.0139,
//     "country": "US",
//     "sunrise": 1560343627,
//     "sunset": 1560396563
//   },
//   "timezone": -25200,
//   "id": 420006353,
//   "name": "Mountain View",
//   "cod": 200
// }