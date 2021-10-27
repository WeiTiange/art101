// Author: Tiange Wei
// Date: 10/22/2021
// Description:


var isClicked;

//Functions:

function hover() {
  isClicked = false;
  document.getElementById("popupbutton").style.backgroundColor = "rgba(0, 150, 220, 1)";
  document.getElementById("popupbutton").style.color = "rgba(255, 255, 255, 1)";
}

function notHover() {
  if (isClicked === true) {
    document.getElementById("popupbutton").style.color = "rgba(0, 0, 0, 0)";
    document.getElementById("popupbutton").style.background = "rgba(255,255,255,0)";
  } else {
    document.getElementById("popupbutton").style.backgroundColor = "";
    document.getElementById("popupbutton").style.color = "rgba(0, 0, 0, 1)";
  }

}

function hidePopupWindow() {
  isClicked = true;

  // popupbutton
  document.getElementById("popupbutton").style.visibility = "hidden";
  document.getElementById("popupbutton").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("popupbutton").style.border = "1px solid rgba(0, 150, 220, 0)";
  document.getElementById("popupbutton").style.background = "rgba(255,255,255,0)";

  // popupwindow
  document.getElementById("popupwindow").style.visibility = "hidden";
  document.getElementById("popupwindow").style.backgroundColor = "rgba(255, 255, 255, 0)";
  document.getElementById("popupwindow").style.boxShadow = "0 12px 16px 0 rgba(0,89,181,0), 0 17px 50px 0 rgba(0,89, 181,0)";

  // popuptext
  document.getElementById("popuptext").style.visibility = "hidden";
  document.getElementById("popuptext").style.color = "rgba(0, 0, 0, 0)";

  // popupinput
  document.getElementById("popupinput").style.visibility = "hidden";
  document.getElementById("popupinput").style.borderColor = "rgba(0, 150, 220, 0)";
  document.getElementById("popupinput").style.backgroundColor = "rgba(255, 255, 255, 0)";
  document.getElementById("popupinput").style.color= "rgba(255, 255, 255, 0)";

  movePopupWindow("300px");

  document.getElementById("main").style.filter = "";
  document.body.style.backgroundColor = "";
  var blocks = document.getElementsByClassName("block");
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = ""
  }
}

function showPopupWindow() {
  // popupbutton
  document.getElementById("popupbutton").style.visibility = "visible";
  document.getElementById("popupbutton").style.color = "rgba(0, 0, 0, 1)";
  document.getElementById("popupbutton").style.border = "1px solid rgba(0, 150, 220, 1)";
  document.getElementById("popupbutton").style.background = "rgba(255,255,255,1)";

  // popupwindow
  document.getElementById("popupwindow").style.visibility = "visible";
  document.getElementById("popupwindow").style.backgroundColor = "rgba(255, 255, 255, 1)";
  document.getElementById("popupwindow").style.boxShadow = "0 12px 16px 0 rgba(0,89,181,0.3), 0 17px 50px 0 rgba(0,89, 181,0.1)";

  // popuptext
  document.getElementById("popuptext").style.visibility = "visible";
  document.getElementById("popuptext").style.color = "rgba(0, 0, 0, 1)";

  // popupinput
  document.getElementById("popupinput").style.visibility = "visible";
  document.getElementById("popupinput").style.borderColor = "rgba(0, 150, 220, 1)";
  document.getElementById("popupinput").style.backgroundColor = "rgba(255, 255, 255, 1)";
  document.getElementById("popupinput").style.color = "rgba(0, 0, 0, 1)";

  movePopupWindow("-180px");

  document.getElementById("main").style.filter = "blur(20px)";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 1)";
  var blocks = document.getElementsByClassName("block");
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  }

}

function movePopupWindow(targetLocation) {
  document.getElementById("popupwindow").style.marginTop = targetLocation;
}

function changeButtonText() {
  document.getElementById("popupbutton").innerText = "Submit";
}

function popupSubmitButton() {
  userName = document.getElementById("popupinput").value.split("");
  var newName = shuffleArray(sortUserName(userName));
  newName = upperCaseFirstLetter(newName);
  document.getElementById("js_output").innerHTML = newName.join("");

  hidePopupWindow();
}

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

//Generate a new name when the button "Generate Another One" is clicked.
function generateAnotherOne() {
  var newName = shuffleArray(userName);
  newName = upperCaseFirstLetter(newName);
  document.getElementById("js_output").innerHTML = newName.join("");
};

function inputPressKeys() {
  var input = document.getElementById("popupinput");

  // press "enter"
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("popupbutton").click();
    }
  })

  var isPopupVisible = document.getElementById("popupwindow").style.visibility;
  if (isPopupVisible === "visible") {
    document.addEventListener("keyup", function(event) {
      if (event.keyCode === 27) {
        hidePopupWindow();
      }
    })
  }

}

//End of Funcitons.




setTimeout(showPopupWindow, 1000);
setTimeout(inputPressKeys, 1005);

var userName;
