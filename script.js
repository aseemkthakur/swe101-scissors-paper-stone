var winNumber = 0;
var lossNumber = 0;
var playNumber = 0;
var drawNumber = 0;
var inputCounter = 0;
var gameMode = 1;
var name;

var computerPick = function () {
  var randomFloat = Math.random() * 3;
  var randomInteger = Math.floor(randomFloat);
  var computerChoice = ['scissors', 'paper', 'stone'][randomInteger];
  console.log(computerChoice);
  return computerChoice;
};

var resultGame = function (user, computer, mode) {
  playNumber += 1;
  var gameResult;
  if (mode == 1) {
    if (user == computer) {
      drawNumber += 1;
      gameResult = 'a draw.';
    }
    if ((user == 'scissors' && computer == 'paper') || (user == 'paper' && computer == 'stone') || (user == 'stone' && computer == 'scissors')) {
      winNumber += 1;
      gameResult = 'you win.';
    }
    if ((computer == 'scissors' && user == 'paper') || (computer == 'paper' && user == 'stone') || (computer == 'stone' && user == 'scissors')) {
      lossNumber += 1;
      gameResult = 'you lost.';
    }
    return gameResult;
  }
  if (mode == -1) {
    if (user == computer) {
      drawNumber += 1;
      gameResult = 'a draw.';
    }
    if ((user == 'scissors' && computer == 'paper') || (user == 'paper' && computer == 'stone') || (user == 'stone' && computer == 'scissors')) {
      lossNumber += 1;
      gameResult = 'you lost.';
    }
    if ((computer == 'scissors' && user == 'paper') || (computer == 'paper' && user == 'stone') || (computer == 'stone' && user == 'scissors')) {
      winNumber += 1;
      gameResult = 'you won.';
    }
    return gameResult;
  }
};

var main = function (input) {
  var myOutputValue;
  if (inputCounter == 0) {
    inputCounter += 1;
    name = input;
    myOutputValue = 'Hey ' + name + '! Please enter one of the following: scissors, paper or stone';
    return myOutputValue;
  }
  if (inputCounter != 0 && input != 'scissors' && input != 'paper' && input != 'stone' && input != 'reverse') {
    myOutputValue = name + ', please enter scissors, paper or stone to play.';
    return myOutputValue;
  }
  if (input == 'reverse') {
    gameMode = gameMode * -1;
    myOutputValue = name + ', please enter scissors, paper or stone to continue playing.';
    return myOutputValue;
  }
  var computerValue = computerPick();
  var result = resultGame(input, computerValue, gameMode);
  myOutputValue = name + ', you chose ' + input + '.<br>'
  + 'The computer chose ' + computerValue + '.<br>'
  + 'The result is ' + result + '<br>'
  + 'You have played ' + playNumber + ' times. <br>'
  + 'You have won ' + winNumber + ' times. <br>'
  + 'You have lost ' + lossNumber + ' times. <br>'
  + 'You have drawn ' + drawNumber + ' times <br>'
  + 'Your winning probability is ' + ((100 * winNumber) / playNumber).toFixed(2) + '% <br>'
  + 'The computer winning probability is ' + ((100 * lossNumber) / playNumber).toFixed(2) + '% <br>';

  console.log(playNumber);
  return myOutputValue;
};
