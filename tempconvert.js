function temperatureConverter(){
    var number=document.getElementById("inputFahrenheit").value;
    document.getElementById("outputCelcius").innerHTML=(number-32)/1.8;
}