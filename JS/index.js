
const temp = document.getElementById('temp');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const main_temp = document.getElementById('main_temp');
const wind_deg = document.getElementById('wind_deg');
const feel_like = document.getElementById('feel_like');
const humidity = document.getElementById('humidity');
const main_humidity = document.getElementById('main_humidity');
const wind_spd = document.getElementById('wind_spd');
const main_wind_spd = document.getElementById('main_wind_spd');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const search_input = document.getElementById('search_input');
const submit_btn = document.getElementById('submit_btn');
const tagline_weather_for = document.getElementById('tagline_weather_for');


// example of response come from api
// "cloud_pct": 100,
//   "temp": -3,
//   "feels_like": -9,
//   "humidity": 82,
//   "min_temp": -6,
//   "max_temp": -2,
//   "wind_speed": 5.36,
//   "wind_degrees": 5,
//   "sunrise": 1671638090,
//   "sunset": 1671668407

const Weather = (city) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3a7326966amshfe3c141cbcfe76ep1d6689jsnb349f4c209a0',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())



        .then((response) => {

            console.log(response)
            temp.innerHTML = response.temp + '&#176C';
            feel_like.innerHTML = response.feels_like + '&#176C';
            humidity.innerHTML = response.humidity;
            main_humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp + '&#176C';
            max_temp.innerHTML = response.max_temp + '&#176C';
            wind_spd.innerHTML = response.wind_speed;
            main_wind_spd.innerHTML = response.wind_speed;
            wind_deg.innerHTML = response.wind_degrees + '&#176';
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
            main_temp.innerHTML = response.temp;
            tagline_weather_for.innerHTML = `Weather for ${city}`



        })
        .catch(err => console.error(err));
}


submit_btn.addEventListener('click', (e) => {

    e.preventDefault();
    console.log(search_input.value)
    Weather(search_input.value)



})

Weather("Karachi");

