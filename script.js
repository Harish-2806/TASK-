document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;

    if (isNaN(temperatureInput)) {
        result = "Please enter a valid number to convert";
    } else {
        switch (unit) {
            case 'Celsius':
                result = `${temperatureInput} °C = ${(temperatureInput * 9/5) + 32} °F = ${temperatureInput + 273.15} K`;
                break;
            case 'Fahrenheit':
                result = `${temperatureInput} °F = ${(temperatureInput - 32) * 5/9} °C = ${((temperatureInput - 32) * 5/9) + 273.15} K`;
                break;
            case 'Kelvin':
                result = `${temperatureInput} K = ${(temperatureInput - 273.15) * 9/5 + 32} °F = ${temperatureInput - 273.15} °C`;
                break;
        }
    }
    
    document.getElementById('result').innerText ="Result = "+ result;
});