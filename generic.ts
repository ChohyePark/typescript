
// 제네릭은 타입을 미리 정의하지 않고 사용하는 시점에 원하는 타입을 정의해서 쓸 수 있는 문법 (like 함수 파라미터)


// 제네릭의 기본 문법
function getText<T>(text: T): T {
  return text;
} 

// 이렇게 하면 getText() 라는 함수를 실행할 때 아무 타입이나 넘길 수 있다. 

getText<string>('hello');  
getText<number>(100);

// 왜 제네릭을 사용할까? - 1. 중복되는 타입 코드의 문제점

function getString(text:string) : string {
  return text;
}

function getNumber (text:number) : number {
  return text;
}

function getArray (arr : []) {
  return arr;
}


// 제네릭을 사용하면 위와같이 불필요하게 중복되던 코드를 줄일 수 있고 타입이 정확하게 지정 되면서 타입스크립트 이점을 가져갈 수 있다 


// 인터페이스에 제네릭 사용하기
 

interface ProductDropdown {
  value : string;
  selected : boolean; 
}

interface StockDropdown<T> {
  value : number;
  selected : boolean;
}

interface AddressDropdown<T> {
  value : {city : string; zipcode : number};
  selected : boolean;
}

// 위 코드들을 제네릭을 사용해보자

interface Dropdown<T> {
  value : T;
  selected : boolean;
}

// 인터페이스 이름 오른 쪽에 <T> 를 붙여주고 인터페이스의 내부 속성 중 제네릭으로 받은 타입을 사용할 곳에 T를 연결한다. 이렇게 하면 타입을 유연하게 확장 할 수 있다. 

var product : Dropdown<string> ;
var stok : Dropdown<number>;
var address : Dropdown<{city : string; zipcode : number}>;


// 제네릭의 타입 제약 - extends, keyof 등 새로운 키워드를 사용하여 타입을 제약하는 방법을 알아보자

// 1. extends를 사용한 타입제약


function embraceEverything<T extends string>(thing : T) {
  return thing;
}

embraceEverything<string>('hello');
embraceEverything<number>(100); // error

// ** length 속성을 갖는 타입만 취급하는 경우

function lengthOnly<T extends {length : number}>(value : T) {
  return value.length;
}

lengthOnly<string>('hello');
lengthOnly<number>(100); // error
lengthOnly<number[]>([1,2,3,4,5]);
lengthOnly<{title : string, length : number}>({title : "test", length : 100}); // length 속성을 갖는 객체도 가능

// 2. keyof를 사용한 타입 제약 - keyof는 특정 타입의 키 값을 추출해서 문자열 유니언 타입으로 변환해준다

type DeveloperKey = keyof {name : string; skills : string;}

// type DeveloperKey = "name" | "skills"

function printKeys<T extends keyof {name : string, skill : string}>(value : T) {
  console.log(value);
}

// ** 헷갈릴 수 있음 224p 

// 위 함수의 제네릭은 파라미터인 value에 연결 되어 있기 때문에 함수를 호출 할 때 넘길 수 있는 문자열은 name과 skill 뿐이다. 다른 값을 넘기면 에러가 발생한다.

printKeys("name");
printKeys("skill");
printKeys("age"); // error
printKeys("address"); // error




