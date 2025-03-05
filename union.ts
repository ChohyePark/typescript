// 유니언 타입 (Union Type)은 여러개의 타입 중 한 개만 쓰고 싶을 때 사용하는 문법

function logText(text: string | number) {
  console.log(text);
}

logText('hello');
logText(10);

// 이 logText() 함수는 문자열과 숫자를 모두 입력받아 콘솔에 출력할 수 있게 한다. 

// any 타입은 타입이 없는 것과 마찬가지이기 때문에 타입스크립트의 장점을 살리지 못하지만 유니언 타입을 사용하면 중복된 코드를 줄이고 타입을 더 정확히 선언할 수 있다.

// 유니언 타입 사용할 때 주의할 점

interface Person {
  name: string;
  age: number;  
}

interface Developer {
  name: string;
  skill: string;
}

function introduce(someone: Person | Developer) {
  console.log(someone.name);
}



