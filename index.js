//Função para converter tempera que retorna valor em Kelvin
function Kelvin(tempCelsius) {
  return tempCelsius + 273;
}
//Função para converter tempera que retorna valor em Fahrenheit
function Fahrenheit(tempCelsius) {
  return tempCelsius * 1.8 + 32;
}


//Selecionando div que irão ser adiconados conteúdos e input que contem a temperatura em Celsius
const divPrincipal = document.querySelector("#principal");
const tempCelsius = document.querySelector("#tempCelsius");

//Contador para saber se o programa foi executado ou não
let jaExiste = 0;

//Evento que é executado quando algo é editado no input de temperatura
tempCelsius.addEventListener("keyup", () => {
  
  //Elemento p que será executado quando quando o valor do input não for um número
  let valorNan = document.createElement("p");
  valorNan.textContent = "Insira um valor válido";
  valorNan.classList.add("nan");

  //Elemento span que contem valor em Kelvin
  let campoKel = document.createElement("span");
  campoKel.textContent = Kelvin(Number(tempCelsius.value));
  campoKel.classList.add("kelvin");

  //Elemento span que contem valor em Fahrenheit
  let campoFah = document.createElement("span");
  campoFah.textContent = Fahrenheit(Number(tempCelsius.value));
  campoFah.classList.add("fahrenheit");


  //Se o conteudo dos elementos span não forem um número substitua o conteudo po "-" e mostre a
  //mensagem que não é um numero válido
  if (isNaN(campoFah.textContent) & isNaN(campoKel.textContent)) {
    campoFah.textContent = "-";
    campoKel.textContent = "-";
    divPrincipal.appendChild(valorNan);
  }

  //Se o conteudo do input estiver limpo substitua os valores por "-" e mostre a mensagem
  //que se deve inserir um número
  if (tempCelsius.value === "") {
    campoFah.textContent = "-";
    campoKel.textContent = "-";
    valorNan.textContent = "Insira um número";
    divPrincipal.appendChild(valorNan);
  }

  //Criando e adicionando titulo da temperatura e a mesma
  const letreiroKel = document.createElement("h4");
  letreiroKel.textContent = "A temperatura em Kelvin é:";
  divPrincipal.appendChild(letreiroKel);
  divPrincipal.appendChild(campoKel);

  const letreiroFah = document.createElement("h4");
  letreiroFah.textContent = "A temperatura em Fahrenheit é:";
  divPrincipal.appendChild(letreiroFah);
  divPrincipal.appendChild(campoFah);

  //Atualizando contador para saber que o código já foi executado uma vez;
  ++jaExiste;

  //Evento que é executado quando algo é editado no input
  tempCelsius.addEventListener("keyup", () => {

    //Se o código rodou uma vez, remova tudo e zere o contador
    //obs.: essa parte é para não ficar acumulando valores e textos na tela.
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
