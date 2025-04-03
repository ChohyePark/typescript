class ClassPerson {
  constructor(name,skill) {
    this.name = name;
    this.skill = skill;
  }
  sayHi() {
    console.log('hi')
  }
}

var chohye = new ClassPerson('chohye', 'js');
console.log(chohye);
console.log(chohye.sayHi());