//-------Weather from wUnderground.com  
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', '//api.wunderground.com/api/1a699fee0c2aac4/conditions/forecast/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
document.getElementById('tempHi').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('tempLo').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('Temp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;
   document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url; 
}