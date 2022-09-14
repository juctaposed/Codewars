// Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  return str
  .split('').filter(el => vowels.indexOf(el.toLowerCase()) == -1).join('')
}


// P: we need to pass through a string 
// R: we need to return a new string that has no vowels (a,e,i,o,u)
// E: assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
// P: split the string by letter, check indexOf for any of the vowels, filter out any indexes that include a vowel, join back string,
//    return new string