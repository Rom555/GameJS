"use strict";

const isNumber = function (num) {
  return !isNaN(parseInt(num)) && isFinite(num) && num !== "";
};

const generateNumber = function () {
  return Math.ceil(Math.random() * 100 + 1);
};

const gameStart = function (number, tryNumber) {
  const playAgain = function (str) {
    if (confirm(str + " Хотите сыграть еще?")) {
      gameStart(generateNumber(), 10)("Угадай число от 1 до 100");
    }
  };

  const game = function (str) {
    if (tryNumber === 0) {
      playAgain("Попытки закончились.");
      return;
    }

    let userNumber = prompt(str);

    if (userNumber == null) {
      alert("Игра окончена.");
      return;
    }

    userNumber = userNumber.trim();

    if (!isNumber(userNumber)) {
      game("Введи число!");
      return;
    }

    userNumber = +userNumber;

    if (!Number.isInteger(userNumber)) {
      game("Введи целое число!");
      return;
    }

    tryNumber--;

    if (userNumber === number) {
      playAgain("Поздравляю, Вы угадали!!!");
    } else if (userNumber > number) {
      game("Загаданное число меньше. Осталось попыток " + tryNumber);
    } else if (userNumber < number) {
      game("Загаданное число больше. Осталось попыток " + tryNumber);
    }
  };

  return game;
};

let newGame = gameStart(generateNumber(), 10);
newGame("Угадай число от 1 до 100");
