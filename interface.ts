
// 타입스크립트에서 인터이스는 객체 타입을 정의할 때 사용하는 문법

// 인터페이스를 이용한 객체 타입 정의

interface Person {
  name: string;
  age: number;
}

var chohye2:Person = {name : 'chohye', age : 100};

// 인터페이스를 이용한 함수 타입 정의

function logAge (someone:Person) {
  console.log(someone.age);
}

var chohyeda = {name : 'chohye', age : 100};
logAge(chohyeda);

// 함수 반환 타입 정의

function getPerson(someone:Person):Person{
  return someone;
}

// 인터페이스의 옵션 속성
// 속성에 ?를 추가하여 옵션 속성으로 지정하면, 상황에 따라 유연하게 인터페이스 속성의 사용 여부를 결정할 수 있다.
interface Developer {
  name: string;
  age: number;
  skills?: string;
}

var user:Developer = {
  name : 'chohye',
  age : 100
}

// 인터페이스 상속
// 상속은 객체 간 관계를 형성하는 방법이며, 상위 (부모) 클래스의 내용을 하위 (자식) 클래스가 물려받아 사용하거나 확장하는 기법을 의미. 자바스크립트에서도 클래스로 상속을 구현할 수 있다.

interface Person2{
  name : string;
  age : number;
}

interface Developer2 extends Person2 {
  skills : string;
}

var ironman:Developer2 = {
  name : 'tony',
  age : 20,
  skills : 'react'
}

// 인터페이스를 상속할 때 참고사항
// 상위 인터페이스와 타입을 하위 인터페이스에서 상속받아 타입을 정의할 때 상위 인터페이스의 타입과 호환이 되어야 한다. 여기에 호환이 된다는 것은  상위 클래스에서 정의된 타입을 사용해야 한다는 의미이다. 

// 또한 상속할때 상속을 여러번 할 수 있다.

interface Hero {
  power : boolean;
}

interface Person3 extends Hero {
  name : string;
  age : number;
}

interface Developer3 extends Person3 {
  skills : string;
}

var ironman2:Developer3 = {
  name : 'tony',
  age : 20,
  skills : 'react',
  power : true
}

// 인터페이스를 이용한 인덱싱 타입 정의
// 인덱싱이란 객체의 특정 속성을 접근하거나 배열의 인덱스로 특정 요소에 접근하는 동작을 의미

interface StringArray {
  [index:number]:string;
}

// StringArray 인터페이스는 index 속성을 정의하고, index 속성은 number 타입을 가지며, string 타입을 반환한다.

var companies : StringArray = ['apple', 'microsoft', 'google'];

// 객체 인덱싱 타입 정의

interface SalaryMap {
  [lavel:string]:number;
}

// SalaryMap 인터페이스는 속성 이름이 문자열 타입이고 속성 값이 숫자 타입인 모든 속성 이름/속성 값 쌍을 허용하겠다는 의미

var salary:SalaryMap = {
  'junior' : 1000,
}

// 인덱스 시그니처란 정확히 속성 이름을 명시하지 않고 속성 이름의 타입과 속성 값의 타입을 정의하는 문법

interface SalaryInfo {
  [lavel:string]:string;
}

var salary2:SalaryInfo = {
  junior : '1000원',
  mid : '400원',
  senior : '1000원'
}

// 언제 사용할까? 만약 User라는 인터페이스에 id와 name 속성이 무조건 들어간다고 한다면 다음과 같이 섞어서 정의할 수도 있다.

interface User {
  id: string;
  name: string;
 [property:string]:string;
}

var seho:User = {
  id : '1',
  name : 'seho',
  address : 'seoul'
} 