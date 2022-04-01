
// Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  const count = x.reduce((s, v) => s + (v == 'good'), 0);
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}


// P: we're passing in an array 
// R: we need to return one of three strings 
// E: assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
//   assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
//   assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
// P: establish a count to be compared. set up checks for 1-2 good = 'Publish!' || good > 2 =  'smell a series!' || good is 0 = 'Fail!'

