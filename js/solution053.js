//Counting Valleys
// You need count how many valleys you will pass.

// Start is always from zero level.

// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

// One passed valley is equal one entry and one exit of a valley.

function countingValleys(s) {
    let level = 0,
        result = 0
    
    for (let i of s) {
      if (i == 'U' && level == -1){
        result++
      }
      if(i != 'F'){
        if (i == 'U'){
          level++
        }else{
          level--
        }
      }
    }
    return result
    
  }


// P: we need to pass in a string, including variations of U,F,D, representing up, forward, down respectively
// R: We will return a a count tallying a combination of an entry and exit of one valley (passing both
// below and above level 0

// E: 
// s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN
// To represent string above

// (level 1)  __
// (level 0)_/  \         _(exit we are again on level 0)
// (entry-1)     \_     _/
// (level-2)       \/\_/
// P: Set our beginning level to 0, as well as our beginning result. Loop through our string, one 
// character at a time, checking if the next character will move us up (U) above level -1. if so increment result by 1
// We also need to check if the character is not F (either U or D), and then make the 
// decision to increment up or down a level.