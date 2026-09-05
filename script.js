console.log("hola mundo");

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

console.log(getComputerChoice());
