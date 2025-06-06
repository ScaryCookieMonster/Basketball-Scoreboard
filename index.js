let homeScore = 0;
let guessScore = 0;
homeEl = document.getElementById("homeScore");
guessEl = document.getElementById("guessScore");
function homePlus1() {
  homeScore += 1;
  homeEl.textContent = homeScore;
}
function homePlus2() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}
function homePlus3() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}
function guessPlus1() {
  guessScore += 1;
  guessEl.textContent = guessScore;
}
function guessPlus2() {
  guessScore += 2;
  guessEl.textContent = guessScore;
}
function guessPlus3() {
  guessScore += 3;
  guessEl.textContent = guessScore;
}
function reset() {
    homeEl.textContent = 0
    guessEl.textContent = 0
}