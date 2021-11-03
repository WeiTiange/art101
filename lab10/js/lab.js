// Author: Tiange Wei
// Date: 11/3/2021


// Borrow the nameSort() function or my anagram() function from Lab 7.
function shuffleArray() {
  var inputText = document.getElementById("user-name").value;

  var curIndex = inputText.length, tempVal, ranIndex;
  var inputTextArray = inputText.split("");


  // Shuffle the array randomly
  while (0 !== curIndex) {
    ranIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;
    tempVal = inputTextArray[curIndex];
    inputTextArray[curIndex] = inputTextArray[ranIndex];
    inputTextArray[ranIndex] = tempVal;
  }


  // Lower case all the letters
  for (var i = 0; i < inputTextArray.length; i++) {
    inputTextArray[i] = inputTextArray[i].toLowerCase();
  }
  console.log(inputTextArray)


  // Uppper case the first letters
  var isFirstLetter = true;
  for (var i = 0; i < inputTextArray.length; i++) {

    //If the current letter is the first letter after a space, upper case it.
    if (isFirstLetter === true) {
      inputTextArray[i] = inputTextArray[i].toUpperCase();
    }

    //If the current letter is space, set isFirstLetter to true, else false.
    if (inputTextArray[i] === " ") {
      isFirstLetter = true;
    } else {
      isFirstLetter = false;
    }
  }


  return inputTextArray.join("");
}


// Attach an event listener to your button that does the following:
// Gets the value of your input field
// Runs that value through your sort() or anagram() function and saves the results.
// Replaces the html in <div id=output> with the results.

var buttonEl = document.getElementById("button");
var outputEl = document.getElementById("output");

buttonEl.addEventListener("click", function() {
  outputEl.innerHTML = "Your New Name: <br><br> " + "<strong>"+ shuffleArray() + "</strong>";
});
