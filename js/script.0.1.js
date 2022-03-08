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

let randomWordList = Object.keys(animalWordList);

function randomWord(array) {
  let temp;
  let i = array.length;
  let j = 0;
  for (i = i - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

let resultRandomList = randomWord(randomWordList);
console.log(resultRandomList);

for (let i = 0; resultRandomList.length >= i; i++) {
  let answer = prompt(`Как переводится "${resultRandomList[i]}"?`, "");
  answer = answer.toLowerCase();

  if (answer == animalWordList[resultRandomList[i]]) {
    alert(`Верно, ${answer}`);
  } else {
    let falseMessage = confirm(`${answer}, не верно, попробуй еще раз`);
    if (falseMessage) {
      setTimeout(function () {
        location.reload();
      }, 1000);
    } else {
      alert("Приходи как будешь готов!");
    }
    break;
  }
};