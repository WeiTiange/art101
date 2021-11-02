// Author: Tiange Wei
// Date: 11/2/2021


// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "I am Ironman!";

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");

// Change the html attribute of new2El to say something else.
new2El.innerHTML = "I am INEVITABLE! (These are the colors of the Infinity Stones)"

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.color = "rgb(255,0,0)"
new2El.style.background = "linear-gradient(90deg, #266ef6 0%, #e429f2 20%, #ff8b00 40%, #ff0130 50%, #ffd300 80%, #12e772 100%)"
new2El.style.backgroundSize = "700% 700%";
new2El.style.webkitBackgroundClip = "text";
new2El.style.webkitTextFillColor = "transparent";
new2El.style.animation = "gradient 20s ease infinite";
