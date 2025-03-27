// 유니언 타입 (Union Type)은 여러개의 타입 중 한 개만 쓰고 싶을 때 사용하는 문법 - (주로 in, typeof 등 연산자와 함께 사용) 

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
  if ('age' in someone) {
    console.log(someone.age);
  } else {
    console.log('Age is not available');
  }
}

// 위 함수에서 someone 파라미터의 속성으로는 name 속성만 제공된다. 타입스크립트 입장에서는 함수에 인자를 넘겨 실행할 때 Person과 Developer 중 어떤 타입인지 알 수 없기 때문에 어느타입이 오더라도 문제없을 공통 속성인 name 속성만 자동완성 해준다

// 함수 내부에서 파라미터 타입의 종류에 따라 특정 로직을 실행하고 싶다면 in 연산자를 사용해서 로직을 작성하면 된다.


// 인터섹션 타입
// 인터섹션 타입은 타입은 타입 2개를 하나로 합쳐서 사용할 수 있는 타입. 

interface Avenger {
  name : string;
}

interface Hero {
  skill : string;
}

function introduceAvenger(someone: Avenger & Hero) {
  console.log(someone.name);
  console.log(someone.skill);
}

// 위 코드에서 Avenger 타입과 Hero 타입을 인터섹션 타입으로 정의했기 때문에 someone 파라미터에는 두 타입의 name과 skill 속성을 모두 사용 할 수 있다. 

introduceAvenger({name: 'Thor', skill: 'Hammer'});

// 만약 인자로 넘길때 name이나 skill 속성 중 하나라도 누락하여 객체로 넘긴다면 에러가 발생한다.

