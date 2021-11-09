// Author: Tiange Wei
// Date: 11/3/2021


// Add buttons to challenge, problems, and result divs
function addButtons() {
  $('#challenge').append('<button type="button" id="challengeButton">challenge</button>');
  $('#problems').append('<button type="button" id="problemsButton">problems</button>');
  $('#results').append('<button type="button" id="resultsButton">results</button>');
}

// Using jQuery, do the following for each button:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
function buttonEvents() {

  // toggle class for challenge button
  $('#challengeButton').click(function() {
    $('#challenge').toggleClass('red')
  });

  // for problems button
  $('#problemsButton').click(function() {
    $('#problems').toggleClass('red')
  });

  //for results button
  $('#resultsButton').click(function() {
    $('#results').toggleClass('red')
  });
}

function changeOtherButtons() {
  $('#resultsButton').after('<br><button type="button" id="button1">Button1 : Click to change the color of Button2</button>');
  $('#resultsButton').after('<br><button type="button" id="button2">Button2 : Click to change the color of Button1</button>');
  var button1 = $("#button1")
  var button2 = $("#button2")
  button1.click(function() {
    $('#button2').toggleClass("button2")
  })
  button2.click(function() {
    $('#button1').toggleClass("button1")
  })


}


function main() {
  addButtons();
  buttonEvents();
  changeOtherButtons();
}

main();
