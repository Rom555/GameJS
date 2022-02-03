"use strict";

const isNumber = function (num) {
  return !isNaN(parseInt(num)) && isFinite(num) && num !== "";
};

const playAgain = function (str) {
  if (confirm(str + " Хотите сыграть еще?")) {
    gameStart();
  }
};

const gameStart = function () {
  let number = Math.ceil(Math.random() * 100 + 1);
  let tryNumber = 10;

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
    tryNumber--;

    if (userNumber === number) {
      playAgain("Поздравляю, Вы угадали!!!");
    } else if (userNumber > number) {
      game("Загаданное число меньше. Осталось попыток " + tryNumber);
    } else if (userNumber < number) {
      game("Загаданное число больше. Осталось попыток " + tryNumber);
    }
  };

  game("Угадай число от 1 до 100");
};

gameStart();
