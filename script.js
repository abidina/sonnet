// Take the contents of the sonnet div and place it in a variable
var origSonnet = document.getElementById("sonnet");

var sonnet = document.getElementById("sonnet").innerHTML;
console.log("sonnet", sonnet);

// Find and output the starting position of the word "orphans"
var orphans = sonnet.indexOf('orphans');
console.log("orphans", orphans);

// Output the number of characters in the sonnet
var numChars = sonnet.length;
console.log("number of characters", numChars);

// Replace the first occurance of the string "winter" with "yuletide"
var newPhrase = sonnet.replace("winter", "yuletide");
console.log("now it's yuletide", newPhrase);

// Replace all occurances of the string "the" with "a large"
var newerPhrase = newPhrase.replace(/the/g, "a large");
console.log("a large phrase", newerPhrase);

// Set the content of the sonnet div with the new string
origSonnet.innerHTML = newerPhrase;