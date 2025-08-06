//getSelector
const data = document.getElementById('data');
const time = document.getElementById('time');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const wind = document.getElementById('wind');
const pictureOfWeather = document.getElementById('picture-of-Weather');
const sity = document.getElementById('sity');
const temperature = document.getElementById('temperature');
const feelsLike = document.getElementById('feels-like');
const cloudy = document.getElementById('cloudy');
const lastOnloadTime = document.getElementById('lastOnloadTime');


const city = 'Kyiv';
const countryCode = 'UA';
const userId = '61d04f27b394ae610270f09eb865a7c8';

const askServer = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${userId}&units=metric`;

fetch(askServer)
  .then(responce => responce.json())
  .then(data => {
    sity.textContent = data.name;
    temperature.textContent = data.main.temp;
    console.log(`Температура в ${data.name}: ${data.main.temp}°C`);
    
  })
  .catch(error => {
    console.error('Помилка:', error);
});