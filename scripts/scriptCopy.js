// Working with Objects and Loops!!!

// Goal 1: Loop through the following array and calculate the total score.
// Follow Up: Print your result to the console using string interpolation for clarity.

const games = [
  { name: "Game 1", score: 5 },
  { name: "Game 2", score: 8 },
  { name: "Game 3", score: 2 },
  { name: "Game 4", score: 10 },
];

let readscore = 0;
for (let i = 0;i<games.length;i++){
   
   readscore += games[i].score;
}
console.log(readscore)
// Goal 2: Create another loop that only calculates total of scores greater than 5
// Follow Up: Print your result to the console using string interpolation for clarity.

let greaterScore = 0;
for(let i = 0;i<games.length;i++){
  if (games[i].score > 5) {
    greaterScore += games[i].score
  }
}
console.log(greaterScore)

//  Goal 3: Find the game with the highest score.
// Follow Up: Print your result to the console using string interpolation for clarity.

let highScore = 0;
for (let i = 0; i<games.length; i++){
  if (games[i].score > highScore){
    highScore = games[i].score;
  }
}
console.log(highScore)
// 🌟🌟 Bonus: Print out EACH game that scored above 'average'

let totalScore = 0;
for (let i = 0;i<games.length;i++){
   
  totalScore += games[i].score;
}
let avgScore = totalScore / games.length;
for (let i = 0;i<games.length;i++){
   
  if (games[i].score > avgScore) {
    console.log(games[i].name)
  }
}

