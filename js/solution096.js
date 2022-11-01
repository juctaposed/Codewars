
// I love you, a little , a lot, passionately ... not at all
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"s
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.


// pass in a number -> number of petals, always > 0, whole num, 
// Respond with one of six phrases: "I love you", "a little", "a lot", "passionately", "madly", "not at all"
// if number is greater than 6 e.g. 7, start back at phrase one "I love you", this will always be a string, 
// case sensitivity doesnt matter,

function howMuchILoveYou (nbPetals) {
  let phrase = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly']
  return phrase [nbPetals % 6]
}

// console.log(howMuchILoveYou(5, 'madly'))
// console.log(howMuchILoveYou(7, 'I love you'))
// console.log(howMuchILoveYou(6, 'not at all'))
// console.log(howMuchILoveYou(1, 'I love you'))