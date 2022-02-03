"use strict";

const isNumber = function (num) {
  return !isNaN(parseInt(num)) || isFinite(num) || num !== "";
};

const gameStart = function () {
  let number = Math.ceil(Math.random() * 100 + 1);

  const game = function (str) {
    let userNumber = prompt(str).trim();

    if (userNumber == null) {
      alert("Игра окончена");
    } else if (isNumber(userNumber)) {
      userNumber = +userNumber;

      if (userNumber === number) {
        alert("Поздравляю, Вы угадали!!!");
      } else if (userNumber > number) {
        game("Загаданное число меньше");
      } else if (userNumber < number) {
        game("Загаданное число больше");
      }
    } else {
      game("Введи число!");
    }
  };

  game("Угадай число от 1 до 100");
};

gameStart();
