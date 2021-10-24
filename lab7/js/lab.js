// Author: Tiange Wei
// Date: 10/22/2021
// Description:




//Functions:

//Popup prompt window to get user inputs.
function popWindow() {
  var userInput = window.prompt("Hi! Please tell me your name so I can fix it.");
  return userInput.split("");
};

//Sort an array ignoring cases.
function sortUserName(arr) {
  return arr.sort( function (a, b) {
    a.toLowerCase().localeCompare(b.toLowerCase())
  })
};

//Randomly shuffle the order of an array.
function shuffleArray(arr) {
  // tempVal: temporarily store value of current curIndex
  // ranIndex: calculated index that will switch with value of curIndex
  var curIndex = arr.length, tempVal, ranIndex;

  //Math.floor: round numbers down. Ex: 2.8 => 2, -3.9 => 4.
  //Math.random: generate a random decimal number from 0(inclusive) to 1(exclusive).
  //While loop: when curIndex is not 0, generate a integer for ranIndex.
  while (0 !== curIndex) {
    ranIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;
  tempVal = arr[curIndex];
  arr[curIndex] = arr[ranIndex];
  arr[ranIndex] = tempVal;
}

  return arr;
};

//Set all letters in an array to lower case.
function lowerCase(arr) {
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toLowerCase();
  }
  return arr;
};

//Set the first letter after spaces uppper cases.
function upperCaseFirstLetter(arr) {
  //In case there's already upper cases in the array.
  arr = lowerCase(arr);

  //Use boolean to check if the current letter is the first letter after a space.
  var isFirstLetter = true;
  for (i = 0; i < arr.length; i ++) {
    //If the current letter is the first letter after a space, upper case it.
    if (isFirstLetter == true) {
      arr[i] = arr[i].toUpperCase();
    }
    //If the current letter is space, set isFirstLetter to true, else false.
    if (arr[i] == " ") {
      isFirstLetter = true;
    } else {
      isFirstLetter = false;
    }
  }

  return arr;

};

//The main function that drives other functions when the page is loaded for the first time.
function firstTimeRun() {
  var newName = shuffleArray(userName);
  newName = upperCaseFirstLetter(newName);
  document.getElementById("js_output").innerHTML = newName.join("");
};

//Generate a new name when the button "Generate Another One" is clicked.
function generateAnotherOne() {
  var newName = shuffleArray(userName);
  newName = upperCaseFirstLetter(newName);
  document.getElementById("js_output").innerHTML = newName.join("");
};

//Allow user to input another name when the button "Use Other Names" is clicked.
function useOtherNames() {
  userName = popWindow();
  var newName = shuffleArray(userName);
  newName = upperCaseFirstLetter(newName);
  document.getElementById("js_output").innerHTML = newName.join("");
};

//End of Funcitons.




var userName = popWindow();

firstTimeRun();
