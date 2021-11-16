// Author: Tiange Wei
// Date: 11/13/2021

// Create a function sortingHat()
// that takes a string as an argument: function sortingHat(str)
function sortingHat(str) {

// ----------------------------------------------------------------------------
// Original Code:
// counts the letters in str and assigns it to a variable length
  // var strLength = str.length;

// uses modulus (% operator) to get the remainder with 4: mod = length % 4;
// mod will now be a value between 0 and 3
  // var mod = strLength % 4;

// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
  // if (mod === 0) {
  //   return "Gryffindor";
  // } else if (mod === 1) {
  //   return "Ravenclaw";
  // } else if (mod === 2) {
  //   return "Slytherin";
  // } else {
  //   return "Hufflepuff";
  // }
// ----------------------------------------------------------------------------

  // Bonus Task Code:
  // For Task 4:
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var letterNumber = 0;

  str = str.toLowerCase();
  letters = str.split("");

  // Get the number of the letter in alphabet and get the sum of them
  for (var i = 0; i < letters.length; i++) {
    letterNumber += alphabet.indexOf(letters[i]) + 1;
  }
  console.log(letterNumber);

  // For Tasks 2, 3:
  var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff", "test_house1", "test_house2"];
  var mod = letterNumber % houses.length;
  return houses[mod];
}

// Create an click listener attached to #button
function buttonClick() {
  var input;
  var house;

  $("#button").click(function() {

    // gets the value of #input and assigns it to a variable name
    input = $("#input").val();

    if (input.length === 0) {
      $("#output").empty();
      $("#output").append("<p style = 'color: red;'>Please enter your name first.</p>");
    } else {
      // runs sortingHat(name) and stores the result in a variable house
      house = sortingHat(input);
      console.log(house);

      // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
      $("#output").empty();
      $("#output").append("<p>The Sorring Hat has sorted you into <b>"+house+"</b></p>");
    }
  })
}

function main() {
  buttonClick();
}

main()
