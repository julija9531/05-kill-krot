const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i1 = 1; i1<(10); i1++) {
  document.getElementById(`hole${i1}`).onclick = function(event) {
    if (event.currentTarget.className === "hole hole_has-mole") {
      dead.textContent++;
    } else {lost.textContent++}

    if (lost.textContent === "5") {
      lost.textContent = 0;
      dead.textContent = 0;
      alert( "Поражение!" );
    }
    if (dead.textContent === "10") {
      lost.textContent = 0;
      dead.textContent = 0;
      alert( "Победа!" );
    }
  }
};
