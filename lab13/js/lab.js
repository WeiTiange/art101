// Author: Tiange Wei
// Date: 11/22/2021

var testObj = {3: "Fizz", 5: "Buzz", 7: "Boom"}

function FizzBuzz(numRange, factorObj) {
  var outputStr = "";
  var tempObj = {};

  // loop through each number
  for (var num = 1; num <= numRange; num ++) {
    tempObj[num] = "";

    // loop through each factor
    for (var factor in factorObj) {
      // if the current number is the multiple of current factor, add the word that the current factor is corresponding to to the outputStr.
      if (num % factor === 0) {
        tempObj[num] += factorObj[factor];
      }

      // add "!" to the end of each combinations
      if (factor == Object.keys(factorObj).slice(-1)) {
        if (tempObj[num] !== "") {
          tempObj[num] += "!";
        }
      }
    }
  }

  for (var [key, values] of Object.entries(tempObj)) {
    outputStr += key+ " " + tempObj[key] + "<br>";
  }
  $("#output").html(outputStr)
}

function main(){
  FizzBuzz(200, testObj);
}

main();
