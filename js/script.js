"use strict";

const isNumber = function (num) {
  return !isNaN(parseInt(num)) && isFinite(num) && num !== "";
};

const gameStart = function () {
  let number = Math.ceil(Math.random() * 100 + 1);

  const game = function (str) {
    let userNumber = prompt(str);

    if (userNumber == null) {
      alert("Игра окончена");
      return;
    }

    userNumber = userNumber.trim();

    if (!isNumber(userNumber)) {
      game("Введи число!");
      return;
    }

    userNumber = +userNumber;

    if (userNumber % 1 !== 0) {
      game("Введи целое число!");
      return;
    }

    if (userNumber === number) {
      alert("Поздравляю, Вы угадали!!!");
    } else if (userNumber > number) {
      game("Загаданное число меньше");
    } else if (userNumber < number) {
      game("Загаданное число больше");
    }
  };

  return function (str) {
    game(str);
  };
};

let newGame = gameStart();
newGame("Угадай число от 1 до 100");
