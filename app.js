//Initialize Storage Class
const storage = new Storage();
//get Stored Location data
const weatherLocation = storage.getLocationData();

//Initialize Weather Class
const weather = new Weather(weatherLocation.city);

// Initialize UI Class
const ui = new UI();



//Get weather on DoM Load
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  //set localstorage
  storage.setLocationData(city);
  getWeather();
  //Close Modal
  $('#locModal').modal('hide');
});


function getWeather(){
  weather.getWeather()
  .then(results =>{
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}


