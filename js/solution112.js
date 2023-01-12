//Total amount of points -> https://www.codewars.com/kata/5bb904724c47249b10000131

//INSTRUCTIONS:
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// -----------------------------------------------------------------------------------------------------------------------------
// x:y
// x = our score
// y = opponent score

// score up to 4 per game, starting from 0

// if x>y += 3 points -> win
// if x<y += 0 points -> loss
// if x = y += 1 point -> tie


// return number of points we have in the championship (10 matches)

// we're passing in an array of strings, these strings contain a key/value setup for each teams score (numbers) separated by a :

// we are returning a number -> total points scored by us

function points(games) {
    // compare index 0 (x) to index 2 (y)
  //   return games.map((e) => e[0] > e[2] ? 3 : 0).reduce((acc, curr) => acc + curr, 0)
  //   return games.reduce((acc, curr) => acc + curr, 0)
    return games.map((e) => {
      if(e[0] > e[2]) {
         return 3
         }else if(e[0] < e[2]) {
        return 0
      }else {
        return 1
      }
    })
    .reduce((acc, curr) => acc + curr, 0)
  }
  