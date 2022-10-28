function Kelvin(tempCelsius) {
  return tempCelsius + 273;
}

function Fahrenheit(tempCelsius) {
  return tempCelsius * 1.8 + 32;
}

const divPrincipal = document.querySelector("#principal");

const tempCelsius = document.querySelector("#tempCelsius");

let jaExiste = 0;

tempCelsius.addEventListener("keyup", () => {
  let valorNan = document.createElement("p");
  valorNan.textContent = "Insira um valor válido";

  let campoKel = document.createElement("span");
  campoKel.textContent = Kelvin(Number(tempCelsius.value));

  let campoFah = document.createElement("span");
  campoFah.textContent = Fahrenheit(Number(tempCelsius.value));

  if (isNaN(campoFah.textContent) & isNaN(campoKel.textContent)) {
    campoFah.textContent = "-";
    campoKel.textContent = "-";
    divPrincipal.appendChild(valorNan);
  }

  if (tempCelsius.value === "") {
    campoFah.textContent = "-";
    campoKel.textContent = "-";
    valorNan.textContent = "Insira um número";
    divPrincipal.appendChild(valorNan);
  }
  const letreiroKel = document.createElement("h4");
  letreiroKel.textContent = "A temperatura em Kelvin é:";
  divPrincipal.appendChild(letreiroKel);
  divPrincipal.appendChild(campoKel);

  const letreiroFah = document.createElement("h4");
  letreiroFah.textContent = "A temperatura em Fahrenheit é:";
  divPrincipal.appendChild(letreiroFah);
  divPrincipal.appendChild(campoFah);

  ++jaExiste;
  tempCelsius.addEventListener("keyup", () => {
    if (jaExiste !== 0) {
      divPrincipal.removeChild(letreiroKel);
      divPrincipal.removeChild(campoKel);
      divPrincipal.removeChild(letreiroFah);
      divPrincipal.removeChild(campoFah);
      divPrincipal.removeChild(valorNan);
      jaExiste = 0;
    }
  });
});
