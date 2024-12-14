const btn = document.getElementById("btn");
const selectFrom = document.getElementById("select-from");
const selectTo = document.getElementById("select-to");
const result = document.getElementById("result");
const input = document.getElementById("input");
const fromImg = document.getElementById("from-img");
const toImg = document.getElementById("to-img");

let api = `https://currency-converter-pro1.p.rapidapi.com/convert`;

const url = "https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3a85454212mshfe09c9b1b69ab49p1aa3e3jsn784737adc563",
    "x-rapidapi-host": "currency-converter-pro1.p.rapidapi.com",
  },
};

async function getData() {
    const response = await fetch(url, options);
    const data = await response.json();
  
    for (const key in data.result) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      selectFrom.appendChild(option);
    }
  
    for (const key in data.result) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      selectTo.appendChild(option);
    }
  }
  
  getData();
  


  selectFrom.addEventListener("change", () => {
    fromImg.src = `https://flagcdn.com/24x18/${selectFrom.value.toLowerCase().slice(0, 2)}.png`;
  });
  
  selectTo.addEventListener("change", () => {
    toImg.src = `https://flagcdn.com/24x18/${selectTo.value.toLowerCase().slice(0, 2)}.png`;
  });
  
  btn.addEventListener("click", () => {
    if (input.value.trim().length < 1) {
      alert("Please enter amount!!");
    } else {
      fetch(
        `${api}?from=${selectFrom.value}&to=${selectTo.value}&amount=${input.value}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          // Result with two decimal places
          result.textContent = `Result: ${data.result.toFixed(4)} ${selectTo.value}`;
        });
    }
  });
  