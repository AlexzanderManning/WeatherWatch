class UI {
  constructor(results){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.highTemp = document.getElementById('w-high');
    this.lowTemp = document.getElementById('w-low');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} °`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Humididty: ${weather.main.humidity} %`;
    this.highTemp.textContent = `Today's High: ${weather.main.temp_max} °`;
    this.lowTemp.textContent = `Today's Low :${weather.main.temp_min} °`;
    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;
  }


}