class ClassPerson {
  constructor(name,skill) { // 생성자 메서드
    this.name = name; // 클래스 필드 또는 속성
    this.skill = skill; // 클래스 필드 또는 속ㅇ
  }
  sayHi() { // 클래스 메서드
    console.log('hi')
  }
}

var chohye = new ClassPerson('chohye', 'js'); // 클래스 인스턴트 

console.log(chohye);
console.log(chohye.sayHi());