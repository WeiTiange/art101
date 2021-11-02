// Author: Tiange Wei
// Date: 10/27/2021


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("My array: ",arr);


function square(num) {
  return num * num;
}
console.log("Result of arr.map(square): ", arr.map(square));


var increment = arr.map(function(num) {
  return ++num;
})
console.log("Result of increment function: ", increment);


function checkDivideByThree(num) {
  if (num % 3 !== 0) {
    return false;
  } else {
    return true;
  }
}
console.log("Result of checkDivideByThree(): ", arr.map(checkDivideByThree))


function testCallbackFunction(para, callback) {
  if (typeof callback == "function") {
    document.getElementById("js_output5").innerHTML = "This is the test of callback checkDivideByThree(10): " + callback(para);
  }
}

function runInHTML() {
  document.getElementById("js_output1").innerHTML = "My array = " + arr;
  document.getElementById("js_output2").innerHTML = "Result of arr.map(square): " + arr.map(square);
  document.getElementById("js_output3").innerHTML = "Result of increment function: " + increment;
  document.getElementById("js_output4").innerHTML = "Result of checkDivideByThree(): " + arr.map(checkDivideByThree);
  testCallbackFunction(10, checkDivideByThree);
}

runInHTML()
