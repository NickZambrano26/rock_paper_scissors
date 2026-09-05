console.log("hola mundo");

//funcion para la computadora
function getComputerChoice() {
  let valor = Math.random();

  if (valor > 0 && valor <= 1 / 3) {
    return "rock";
  } else if (valor > 1 / 3 && valor <= 2 / 3) {
    return "paper";
  } else if (valor <= 1) {
    return "scissors";
  }
}

function getHumanChoice() {
  let entrada = prompt("Ingresa un valor de entrada");
  return entrada;
}
console.log(getHumanChoice());
console.log(getComputerChoice());
