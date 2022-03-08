'use strict';

let animalWordList = {
  bird: "птица",
  dog: "собака",
  squirrel: "белка",
  goose: "гусь",
  rabbit: "кролик",
  rat: "крыса",
  duck: "утка",
};

for (let i = 0; Object.keys(animalWordList).length >= i; i++) {
  let answer = prompt(`Как переводится "${Object.keys(animalWordList)[i]}"?`, '');
  answer = answer.toLowerCase();
  if (answer == Object.values(animalWordList)[i]) {
    alert(`Верно, ${answer}`);
  } else {
    let falseMessage = confirm(`${answer}, не верно, попробуй еще раз`);
    if (falseMessage) {
      setTimeout(function () {
        location.reload();
      }, 1000);
    } else {
      alert('Приходи как будешь готов!')
    }
    break;
  }
};