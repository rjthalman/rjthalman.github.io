var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','//api.wunderground.com/api/1a69d9fee0c2aac4/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f
    
    document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url
}

var townUpDate = new XMLHttpRequest();

townUpDate.open('GET','https://byui-cit230.github.io/weather/data/towndata.json', true);

townUpDate.send();

townUpDate.onload = function(){
    var townInfo = JSON.parse(weatherObject.responseText);
    console.log(townInfo);
    
    document.getElementById('motto').innerHTML = townInfo.towns.motto
    
    document.getElementById('currentTemp').innerHTML = townInfo.current_observation.temp_f
    
    document.getElementById('weather_icon').src = townInfo.current_observation.icon_url
}

