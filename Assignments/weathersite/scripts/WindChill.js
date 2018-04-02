var HighTemp = parseFloat(document.getElementById('tempHi').value);
var LowTemp = parseFloat(document.getElementById('tempLo').value);
var windSpeed = parseFloat(document.getElementById('windSpeed').value);

var AveTemp = (HighTemp + LowTemp)/2;
var calculate = WindChill(AveTemp, windSpeed);

document.getElementByIdg("output").innerHTML = windChill;

function WindChill(AveTemp. windSpeed){
   var windChill = 35.74 + (0.6215 * AveTemp) - 35.75 * (Math.pow(WindSpeed, 0.16)) + 0.4275 * AveTemp * (Math.pow(WindSpeed, 0.16));
}