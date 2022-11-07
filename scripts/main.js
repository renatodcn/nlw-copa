function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icons/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icons/icon=${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
  `
}

//let delay = -0.4

function createCard(date, day, games) {
  //delay = delay + 0.4
  //<div class="card" style="animation-delay: ${delay}s"}> em baixo do return
  return `
  <div class="card">
    <h2>${date}<span>${day}</span></h2>
    <ul>
     ${games}
    </ul>       
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("south korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  ) +
  createCard(
    "",
    "sem data",
    createGame("brazil", "______", "brazil") +
      createGame("brazil", "______", "brazil") +
      createGame("brazil", "______", "brazil") +
      createGame("brazil", "______", "brazil")
  )
