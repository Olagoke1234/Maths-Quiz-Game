// var Start = document.getElementById("startreset");
// var Question = document.getElementById("question");
// var Boxes = document.getElementById("choices");
// var Box = document.getElementsByClassName("box");
// var Box1 = document.getElementById("box1");
// var Box2 = document.getElementById("box2");
// var Box3 = document.getElementById("box3");
// var Box4 = document.getElementById("box4");
// var TimeRemaining = document.getElementById("timeremaining");
// var TimeRemainingValue = document.getElementById("timeremainingvalue");
// var Score = document.getElementById("scorevalue");
// var GameOver = document.getElementById("gameover");

// function StartGame() {
//   Start.innerHTML = "Reset Game";
//   Num1 = Math.floor(Math.random() * 10);
//   Num2 = Math.floor(Math.random() * 10);
//   Question.innerHTML = Num1 + "x" + Num2;
//   Question.value = Num1 * Num2;
//   Score.innerHTML = 0;
//   Score.value = 0;
//   TimeRemaining.setAttribute("style", "display:block;");
//   var counter = 60;
//   var sec = setInterval(function () {
//     counter--;
//     TimeRemainingValue.textContent = counter;
//     if (counter <= 0) {
//       clearInterval(sec);
//     }
//     if (TimeRemainingValue.textContent == 0) {
//       Start.innerHTML = "Start Game";
//       GameOver.setAttribute("style", "display:block;");
//       Score.value = 0;
//       GameOver.innerHTML += `<p>Game Over!</p><p>Your Score is:  ${Score.value}</p> `;
//     }
//     if (TimeRemainingValue.textContent > 0) {
//       Start.innerHTML = "Reset Game";
//       GameOver.setAttribute("style", "display:none;");
//     }
//   }, 1000);

//   var firstOption = Math.floor(Math.random() * 10) + 5;
//   var secondOption = Math.floor(Math.random() * 100) + 5;
//   var thirdOption = Math.floor(Math.random() * 50) + 5;
//   var Answer = Question.value;
//   var Options = [firstOption, secondOption, thirdOption, Answer];
//   Options.sort((a, b) => 0.5 - Math.random());
//   Box1.innerHTML = Options[0];
//   Box2.innerHTML = Options[1];
//   Box3.innerHTML = Options[2];
//   Box4.innerHTML = Options[3];

//   Box1.onclick = function () {
//     if ((innerHTML = Answer)) {
//       Score.innerHTML++;
//       Score.value++;
//       Num1 = Math.floor(Math.random() * 10);
//       Num2 = Math.floor(Math.random() * 10);
//       Question.innerHTML = Num1 + "x" + Num2;
//       Question.value = Num1 * Num2;
//       Question.value = Answer;
//     }
//   };

//   Box2.onclick = function () {
//     if ((innerHTML = Answer)) {
//       Score.innerHTML++;
//       Score.value++;
//       Num1 = Math.floor(Math.random() * 10);
//       Num2 = Math.floor(Math.random() * 10);
//       Question.innerHTML = Num1 + "x" + Num2;
//       Question.value = Num1 * Num2;
//       Question.value = Answer;
//     }
//   };

//   Box3.onclick = function () {
//     if ((innerHTML = Answer)) {
//       Score.innerHTML++;
//       Score.value++;
//       Num1 = Math.floor(Math.random() * 10);
//       Num2 = Math.floor(Math.random() * 10);
//       Question.innerHTML = Num1 + "x" + Num2;
//       Question.value = Num1 * Num2;
//       Question.value = Answer;
//     }
//   };

//   Box4.onclick = function () {
//     if ((innerHTML = Answer)) {
//       Score.innerHTML++;
//       Score.value++;
//       Num1 = Math.floor(Math.random() * 10);
//       Num2 = Math.floor(Math.random() * 10);
//       Question.innerHTML = Num1 + "x" + Num2;
//       Question.value = Num1 * Num2;
//       Question.value = Answer;
//     }
//   };

//   console.log([Box1.innerHTML, Box2, Box3, Box4]);
//   console.log(Options);
//   console.log((innerHTML = Answer));
//   console.log(Score.value);
//   console.log(Score.innerHTML);
// }
