let temp 
function convertToCelsius(temp){return temp - 32 }
function describeTemperature(temp){
    const celsius = convertToCelsius(temp);
    let temperature;
    if (temp < 0){
        temperature = "very cold"
    } 
    else if (temp < 20){
        temperature = "cold"
    }
    else if (temp < 30){
        temperature = "warm"
    }
    else if (temp < 40){temperature = "hot"}
    else if (temp >= 40){temperature = "very hot"
    }
    return `it is ${temp} degrees outside or ${celsius} so it is ${temperature}`
}
const weather = prompt("weather:");
const description = describeTemperature(temp);
alert(description);
