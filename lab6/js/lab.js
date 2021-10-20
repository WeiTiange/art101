// Author: Tiange Wei
// Created: 20 October, 2021
// Description: This JS file is a practice of arrays and objects in  Javascript. It creates an array and an object and print them to the HTML page.


// Declare all the variables you created in Task 1 in this JavaScript file
var myTransport = ["fly", "teleport", "dash", "portals", "airplanes"];

var myMainRide = {
  make : "Ford",
  model : "Taurus",
  color : "Black",
  year : 1988,
  ownIt : false,
};

// Use document.writeln() to neatly output myTransport, example, document.writeln("Getting around: " + myTransport + "<br>");
// Objects don't print as easily. Try the following to print out myMainRide:
// document.writeln("My Main Ride: <pre>",
//     JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
