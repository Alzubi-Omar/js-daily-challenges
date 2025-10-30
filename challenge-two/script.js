/**
 * CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 102, and 80. Koalas scored 80, 97, and 112.
 */

let scoreDolphins = Math.round((96 + 102 + 80) / 3);
let scoreKoales = Math.round((80 + 97 + 112) / 3);


if (scoreDolphins > scoreKoales) {
    console.log(`Dolphins win the trophy: ${scoreDolphins} vs Koalas: ${scoreKoales}`);
} else if (scoreKoales > scoreDolphins) {
    console.log(`Koalas win the trophy: ${scoreKoales} vs Dolphins: ${scoreDolphins}`);
} else {
    console.log(`Both win the trophy ${scoreDolphins} vs ${scoreKoales}`);
}