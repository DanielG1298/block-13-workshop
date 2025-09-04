
function convertToCelsius(temp){return (temp - 32) * 5/9 }
function describeTemperature(temp){
    const celsius = convertToCelsius(temp);
    let temperature;
    if (celsius < 0){
        temperature = "very cold"
    } 
    else if (celsius < 20){
        temperature = "cold"
    }
    else if (celsius< 30){
        temperature = "warm"
    }
    else if (celsius < 40){temperature = "hot"}
    else if (celsius >= 40){temperature = "very hot"
    }
    return `it is ${temp} degrees outside or ${celsius} so it is ${temperature}`
}
let temp = parseFloat(prompt("weather:"))
const weather = prompt;
const description = describeTemperature(temp);
alert(description);
