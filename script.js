const button = document.querySelector(".button-raffle");

function raffle() {
    const numberResult = document.querySelector(".number-result");
    const inputMin = Math.ceil(document.querySelector(".input-min").value);
    const inputMax = Math.floor(document.querySelector(".input-max").value);
    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;
    
    numberResult.textContent = result;
}

button.addEventListener("click", raffle);

