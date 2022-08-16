// Keep up the hoop

// Instructions - Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".


function hoopCount (n) {
   if (n >= 10) {
     return "Great, now move on to tricks"
   }
  else {
    return "Keep at it until you get it"
  }
}


// P: We'll pass in a number. Assuming whole number, positive or just > 0
// R: We'll return one of two strings 
// E: hoopCount(3) -> "Keep at it until you get it." 
//    hoopcount(16) -> "Great, now move on to tricks"
// P: We can make a decision to return result A or B, based on a comparison of 10 <=