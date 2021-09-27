// define question and answers in an array of object values
alert("Welcome to my page for Javascript QUIZ game");
const data = [
	{
    question: "Is JavaScript case-sensitive?",
    answers: [ "Yes", "No" ],
    correct_choice: 0
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [ "var carName;", "v carName;", "variable carName;" ],
    correct_choice: 2
  },
	{
    question: "Which operator is used to assign a value to a variable?",
    answers: [ "-", "/", "*", "+","="],
    correct_choice: 4
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
  $('#counter').text( turn + 1 );

  // show question text
  $('#question').text( data[turn].question );

  // render buttons for answers
  $('#answers').empty();

  for ( let index in data[turn].answers ) {
    // 1. Create the button and set text to answer text
    var button = $("<button>");
    button.text( data[turn].answers[index] );

    // 2. Append button element into html document model
    $('#answers').append( button );

    // 3. Add event handler
    button.click(
      function() {
        checkAnswer(index);
      }
    );
  }
}

function checkAnswer(choice) {
    // handle event when user clicks an answer: right or wrong?
    // decide which answer is correct
    if ( choice == data[turn].correct_choice ) {
      $('#wrong').empty();
      $('#right').text("Correct answer!");
      nextQuestion();
    } else {
      // wrong button
      $('#wrong').text("Wrong answer!");
      $('#right').empty();
    }
}

// show another if one is available
function nextQuestion() {
  turn++;
  if ( turn < data.length ) {
    showQuestion();
  } else {
    $('body').html("<h2>Game Over!</h3>");
  }
}
