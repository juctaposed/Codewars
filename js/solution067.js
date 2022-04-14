// A Needle in the Haystack
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"


function findNeedle(haystack) {
  return 'found the needle at position ' + (haystack.indexOf("needle"))
}



// P: We're passing an array through our findNeedle function
// R: We need to return the 'needle' within our array, specifically the index of that element with the message "found the needle at position "
// E: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// P: we can use indexOf method to find the index of a string "needle" within our array. Return the statement 
// "found the needle at position " + array.findIndex("needle")