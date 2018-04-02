function WindChill(){
   var HighTemp = get("tempHi").value;
   var LowTemp = get("tempLo").value;
    var AveTemp = (HighTemp + LowTemp)/2
   var windChill = 35.74 + (0.6215 * AveTemp) - 35.75 * (Math.pow(0.16, WindSpeed)) + 0.4275 * AveTemp (Math.pow(0.16, WindSpeed))
 document.getElementByIdg("output").innerHTML = windChill;
}
CSS--var temp1 = parseInt(document.getElementById("tempHi").innerHTML);

HTML--<div class="highlow">
<p>High: <span id="tempHi">90</span>°F</p>
<p>Low: <span id="tempLo">66</span>°F</p>
</div>