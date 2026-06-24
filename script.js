const input = document.getElementById("celsius");
const botao = document.getElementById("converter");
const saida = document.getElementById("saida");

botao.addEventListener("click", () => {
    const celsius = Number(input.value);

    if (isNaN(celsius)) {
        saida.textContent = "Digite um número válido.";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;

    saida.textContent = `${celsius}°C = ${fahrenheit.toFixed(1)}°F`;
});

/* kelvin */
botao.addEventListener("click", () => {
    const celsius = Number(input.value);

    if (isNaN(celsius)) {
        saida.textContent = "Digite um número válido.";
        return;
    }

    const kelvin = (celsius * 5 / 5) + 273.5;

    saida2.textContent = `${celsius}°C = ${kelvin.toFixed(1)}°K`;
});

