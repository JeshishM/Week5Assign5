/* in today's live example, I will show code using jquery vs. code in pure javascript */

/* example code for our form with interaction */

// pure javascript approach
function doMath() {
  let n1 = Number( document.getElementById("number1").value );
  let n2 = Number( document.getElementById("number2").value );
  let total = n1 * n2;
  document.getElementById("calculator-output").innerHTML = total;
}
document.getElementById("submit").addEventListener("click", doMath);

// jquery approach
function doMathJQ() {
  let n1 = $("#number1").val();
  let n2 = $("#number2").val();
  let total = Number(n1) * Number(n2);
  $("#calculator-output-jquery").html( total );
}
$("#submit").click(doMathJQ);

/* 1. to find elements in a web page by ID attribute value */

// pure javascript approach
let x = document.getElementById("fred");
x.innerHTML = "<em>New text from JavaScript!</em>";

// using jquery and its $() method: next 2 lines totall equivalent $() is same as jQuery()
jQuery("#fred").html("<em>New text from JavaScript via jQuery's html() method!</em>");
$("#fred").html("<em>New text from JavaScript via jQuery's html() method!</em>");

/* 2. to find multiple elements in a web page by class attribute value */

// pure javascript approach
let y = document.getElementsByClassName("pickles");
console.log(y);
//y.innerHTML = "Changed?";
for( let i=0; i < y.length; i++) {
  y[i].innerHTML = "Changed?";
}

// using jquery and its $() method
$('.pickles').html("Changed by jQuery!");

/* 3. find multiple elements using css selectors (just like jQuery) but in pure JavaScript */

// pure javascript
let z = document.querySelectorAll(".pickles, #fred");
console.log(z);
for( let j=0; j < z.length; j++) {
  z[j].className += " myclass";
}
// using jquery
jQuery(".pickles, #fred").addClass("myclass2");