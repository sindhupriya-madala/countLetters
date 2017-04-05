//TODO: write a functon which counts unique characters from given string
//along with number of instances.
// the output should be of type object.
// we are not counting spaces and converting into lowercase.

function countLetters( string1)  {
  var obj1 = {};

  for(var i=0; i < string1.length; i++) {
    // checking weather our object already has this key:value pair or not
    //if not we are just hardcoding by assigning it to 1. otherwise incrementing.
    if(obj1[string1[i]])  {
      obj1[string1[i]]++;
    }
    else  {
      obj1[string1[i]] = 1;
    }
  }
  return obj1;
}
// remove spaces from input string and convert into lower case.
var input_str = process.argv.slice(2).join("").toLowerCase();
//console.log(input_str);
console.log(countLetters(input_str));