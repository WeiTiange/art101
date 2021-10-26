/* Set the width of the side navigation to 250px */
var sidenavInOut = false

// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
//   document.getElementById("menubutton").style.marginLeft = "240px";
// }
//
// /* Set the width of the side navigation to 0 */
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "10px";
//   document.getElementById("main").style.marginLeft = "0";
//   document.getElementById("menubutton").style.marginLeft = "0";
// }

function sidenavControl() {
  if (sidenavInOut === false) {

    var links = document.getElementsByClassName("links");
    for (var i = 0; i < links.length; i++) {
      links[i].style.visibility = "visible";
    }

    var hrs = document.getElementsByClassName("sidenavhr");
    for (var i = 0; i < hrs.length; i++) {
      hrs[i].style.visibility = "visible";
    }

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menubutton").style.marginLeft = "242px";
    document.getElementById("popups").style.marginLeft = "250px"
    document.getElementById("main").setAttribute("id", "mainblur");
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

    sidenavInOut = true;

  } else {

    var links = document.getElementsByClassName("links");
    for (var i = 0; i < links.length; i++) {
      links[i].style.visibility = "hidden";
    }

    var hrs = document.getElementsByClassName("sidenavhr");
    for (var i = 0; i < hrs.length; i++) {
      hrs[i].style.visibility = "hidden";
    }

    document.getElementById("mainblur").setAttribute("id", "main");
    document.getElementById("mySidenav").style.width = "";
    document.getElementById("main").style.marginLeft = "";
    document.getElementById("popups").style.marginLeft = ""
    document.getElementById("menubutton").style.marginLeft = "";
    document.body.style.backgroundColor = ""

    sidenavInOut = false;
  }
}
