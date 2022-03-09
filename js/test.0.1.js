'use strict';

let language = {
  country: 'Earth',
  english: enPresent,
  dethland: dePresent,
  epshan: function() {
    console.log('ya ya coll');
  },
  russian() {
    return `рад знакомству ${this.country}`;
  }
};

let secondList = {

}

secondList.f = sayMyName;
secondList['name'] = 'Albert';

function sayMyName() {
  console.log(this.name)
}

function enPresent () {
  console.log('Английский - это мастиф');
}

function dePresent() {
  for(let i = 0; 5 > i; i++) {
    console.log('nine uber fallen');
  }
}

// language.russian();

// secondList['f']();

// console.log(sayMyName())


let user = {
  name: "Джон",
  hello: function hello() {
    return 'ok';
  },
  hi() { alert(this.hello()); },
  bye() { alert("Пока"); },
  morning() {
    alert(this.name)
  },
  test5() {
    return this;
  },
  objObj: {
    green: 'Earth',
    tea() {
      let sugar = () => console.log(this.green);
      sugar();
    }
  }
};

// user.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
// console.log((user.name == "Джон" ? user.hi : user.bye)()); // Ошибка!

// let lang = language.russian();
// user.hi();

// user.objObj.tea();

// (user.morning)();
// let human = 546;
// console.log(human && mor);

console.log(user.test5());