var playing = false;
var score;
var action;
var timeremainingvalue;
var correctAnswer;

document.getElementById("startreset").onclick = function () {
  // if we are playing
  if (playing == true) {
    location.reload();
  } else {
    // if we are not playing
    // change mode to playing
    playing = true;
    // Set score to 0
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;
    // display countdown box
    show("timeremaining");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    // hide gameover
    hide("gameover");

    // change button display to Reset Game
    document.getElementById("startreset").innerHTML = "Reset Game";
    startCountDown();
    // Generate Q&A
    generateQA();
  }
};

// clicking on answer box
for (i = 1; i < 5; i++) {
  document.getElementById("box" + i).onclick = function () {
    if (playing == true) {
      if (this.innerHTML == correctAnswer) {
        // increase score
        score++;
        document.getElementById("scorevalue").innerHTML = score;
        // hide wrong box and show correct box
        hide("wrong");
        show("correct");
        setTimeout(function () {
          hide("correct");
        }, 1000);
        generateQA();
      } else {
        hide("correct");
        show("wrong");
        setTimeout(function () {
          hide("wrong");
        }, 1000);
      }
    }
  };
}

// functions
// Start countdown
function startCountDown() {
  action = setInterval(function name(params) {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if (timeremaining == 0) {
      stopCountDown();
      show("gameover");
      document.getElementById("gameover").innerHTML =
        "<p>Game Over!</p><p>Your Score Is " + score + ".</p>";
      hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("startreset").innerHTML = "Start Game";
    }
  }, 1000);
}

// stop countdown used to stop countdown in startCountDown

function stopCountDown() {
  clearInterval(action);
}

// function to hide some elements used accross other functions

function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

// function to show some elements used accross other function

function show(Id) {
  document.getElementById(Id).style.display = "block";
}

// function to generate questions and answers

function generateQA() {
  var x = 1 + Math.round(Math.random() * 9);
  var y = 1 + Math.round(Math.random() * 9);
  correctAnswer = x * y;
  document.getElementById("question").innerHTML = x + "x" + y;
  var correctPosition = 1 + Math.round(Math.random() * 3);
  // Fill box with correctAnswer
  var answers = [correctAnswer];
  document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
  for (let i = 1; i < 5; i++) {
    if (i != correctPosition) {
      // generate a wrong answer
      var wrongAnswer;
      do {
        {
          wrongAnswer =
            (1 + Math.round(Math.random() * 9)) *
            (1 + Math.round(Math.random() * 9));
        }
      } while (answers.indexOf(wrongAnswer) > -1);
      document.getElementById("box" + i).innerHTML = wrongAnswer;
      answers.push(wrongAnswer);
    }
  }
}
