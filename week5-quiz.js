// define question and answers in an array of object values
// object holds dataset for a question, its possible answers, and correct answer
// outer array holds collection of these objects
// alert("Welcome to my page for Javascript QUIZ game. GOOD LUCK!");

$("h1").html("Week5 Assignment:Quiz Game! Changed VIA Jquery!");

const data = [
  {
    question: "Is JavaScript case-sensitive?",
    answers: [ " Yes ", " No " ],
    correct_choice: 0
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [ "var carName;", "v carName;", "variable carName;" ],
    correct_choice: 0
  },
	{
    question: "Which operator is used to assign a value to a variable?",
    answers: [ "<>", "()", "#","="],
    correct_choice: 3
  },
  {
    question: "How does a FOR loop start?",
    answers: [ "for (i <= 5; i++) ", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)  ", "for i = 1 to 5" ],
    correct_choice: 2
  }
];

// keep track of which question is current
var turn = 0;

// show first question after the page has fully loaded
showQuestion();

// function that can show the current question and its possible answers
function showQuestion() {
  // set the counter
  // plain js: document.getElementById("counter").innerHTML = turn + 1;
  $('#counter').text("Question No:" + " " + (turn + 1) );

	$('#points').text(turn + 0 );

  // show question text
  // plain js: document.getElementById("question").innerHTML = data[turn].question;
  $('#question').text( data[turn].question );

  // render buttons for answers
  // plain js: document.getElementById("answers").innerHTML = "";
  $('#answers').empty();

  for ( let index in data[turn].answers ) {
    // 1. Create the button and set text to answer text
    // plain js: var button = document.createElement("button");
    var button = $("<button>");

    // plain js: button.innerHTML = data[turn].answers[index];
    button.text( data[turn].answers[index] );

    // 2. Append button element into html document model
    // plain js: var parent = document.getElementById("answers");
    // plain js: parent.appendChild(button);
    $('#answers').append( button );

    // 3. Add event handler
    /* plain js: 
    button.addEventListener(
      "click", 
      function() {
          checkAnswer(index);
      }
    );
    */
    button.click(
      function() {
        checkAnswer(index);
      }
    );
  }
}

function checkAnswer(choice) {
    // handle event when user clicks an answer: right or wrong?
    // decide which answer is correct and attach a click event to that answer
    if ( choice == data[turn].correct_choice ) {
      // plain js: document.getElementById("wrong").innerHTML = "";
      $('#wrong').empty();
      // plain js: document.getElementById("right").innerHTML = "Correct answer!";
      $('#right').text("Correct answer!");
      nextQuestion();
    } else {
      // set another click - a different one for clicking a wrong button
      // plain js: document.getElementById("wrong").innerHTML = "Wrong answer!";
      $('#wrong').text("Wrong answer!");
      // plain js: document.getElementById("right").innerHTML = "";
      $('#right').empty();
    }
}

// show another if one is available
function nextQuestion() {
  turn++;
  if ( turn < data.length ) {
    showQuestion();
  } else {
    $('body').html("<h2> Game Over!</h2> <h2> Thanks for Playing!</h2>");
  }
}
