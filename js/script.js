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

    if (userNumber === number) {
      alert("Поздравляю, Вы угадали!!!");
    } else if (userNumber > number) {
      game("Загаданное число меньше");
    } else if (userNumber < number) {
      game("Загаданное число больше");
    }
  };

  game("Угадай число от 1 до 100");
};

gameStart();
