/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

// let dolphin_score1 = 44;
// let dolphin_score2 = 23;
// let dolphin_score3 = 71;

// let koala_score1 = 65;
// let koala_score2 = 54;
// let koala_score3 = 49;

let dolphin_score1 = 85;
let dolphin_score2 = 54;
let dolphin_score3 = 41;

let koala_score1 = 23;
let koala_score2 = 34;
let koala_score3 = 27;

let avgDolphins = calcAverage(dolphin_score1, dolphin_score2, dolphin_score3);

let avgKoalas = calcAverage(koala_score1, koala_score2, koala_score3);

checkWinner(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas && avgDolphins / avgKoalas >= 2) {
    console.log(`Dolphins won (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins && avgKoalas / avgDolphins >= 2) {
    console.log(`Koalas won (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("Match draw ()");
  }
}
