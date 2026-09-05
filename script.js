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
//funcion para eleccion del jugador
function getHumanChoice() {
  let entrada = prompt("Ingresa un valor de entrada");
  return entrada;
}
//funcion para el juego
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let ronda = 1;
  //funcion de rondas
  function playRound(humanChoice, computerChoice) {
    let humanChoiceLower = humanChoice.toLowerCase();

    if (humanChoiceLower === computerChoice) {
      console.log("Empate");
      //fase humana
    } else if (humanChoiceLower === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("Ganador el humano.Rock vencio a scissors");
    } else if (humanChoiceLower === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("Ganador el humano.Scissors vencieron a paper");
    } else if (humanChoiceLower === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("Ganador el humano. Paper vencio a la rock");
      //fase de la pc
    } else if (humanChoiceLower === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("Ganó la computadora. Rock vencio a paper");
    } else if (humanChoiceLower === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("Ganó la computadora. Scissors vencio a paper");
    } else if (humanChoiceLower === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log("Ganó la computadora. Rock vencio a scissors");
    }
  }

  while (ronda <= 5) {
    let eleccionHuman = getHumanChoice();
    let eleccionComputer = getComputerChoice();
    playRound(eleccionHuman, eleccionComputer);
    ronda++;
  }
  if (humanScore > computerScore) {
    console.log("El humano ganó el juego");
  } else if (computerScore > humanScore) {
    console.log("La computadora ganó el juego");
  } else {
    console.log("Empate");
  }
}
playGame();
