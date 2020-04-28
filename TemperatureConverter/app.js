const celsius_span = document.querySelector("#celsius > input");
const fahren_span = document.querySelector("#fahrenheit > input");
const kelvin_span = document.querySelector("#kelvin > input");

function main() {
    celsius_span.addEventListener("input", () => updateTemp("celsius"));
    fahren_span.addEventListener("input", () => updateTemp("fahrenheit"));
    kelvin_span.addEventListener("input", () => updateTemp("kelvin"));
}


function updateTemp(tempType) {
    switch (tempType) {
        case "celsius":
            fahren_span.value = roundNum((9.0 / 5.0) * parseFloat(celsius_span.value) + 32);
            kelvin_span.value = roundNum(parseFloat(celsius_span.value) + 273);
            break;
        case "fahrenheit":
            celsius_span.value = roundNum((5.0 / 9.0) * (parseFloat(fahren_span.value) - 32));
            kelvin_span.value = roundNum(parseFloat(celsius_span.value) + 273);
            break;
        case "kelvin":
            celsius_span.value = roundNum(parseFloat(kelvin_span.value) - 273);
            fahren_span.value = roundNum((9.0 / 5.0) * (parseFloat(celsius_span.value)) + 32);
            break;
    }
}

function roundNum(num) {
    return Math.round(num * 100) / 100;
}
main();