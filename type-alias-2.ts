import axios from "axios";

// 타입 확장이란 이미 정의되어 있는 타입들을 조합해서 더 큰 의미의 타입을 생성하는 것을 의미한다. 인터페이스는 타입을 확장할 때 상속이라는 개념을 이용한다. extends 라는 키워드를 사용해 부모 인터페이싀 타입을 자식 인터페이스에 상속해서 사용할 수 있다. 반면 타입 별칭은 인터섹션 타입으로 객체 타입을 2개 합쳐서 사용할 수 있다. 

type Animal = {
  name : string;
  age : number;
}

type Dog = {
  breed : string
}

type Nick = Animal & Dog; // & 연산자를 사용한 인터섹션 타입으로 합쳐 Nick 이라는 변수에 name, age, brede 속성을 가진 타입을 정의

var nick : Nick = {
  name : "Nick",
  age : 5,
  breed : "Golden Retriever"  
}

// 인터페이스의 선언 병합 이라는 성질이 있다. 인터페이스는 동일한 이름으로 인터페이스를 선언하면 인터페이스 내용을 합치는 특성이 있다. 

interface Vegetable {  
  name : string,
  color : string
}

interface Vegetable {
  size : number
}

var carrot : Vegetable = {
  name : "Carrot",
  color : "Orange",
  size : 10
}

// 이렇게 동일한 이름으로 인터페이스를 여러 번 선언했을 때 해당 인터페이스의 타입 내용을 합치는 것을 선언 병합이라고 한다. 

// 1. 타입 별칭으로 API 함수의 응답 형태를 정의

type TypeUser = {
  id : string,
  name : string
}

function fetchData() : TypeUser {
  return axios.get("https://api.example.com/user");
}

// 2. 인터페이스로 API 함수의 응답 형태를 정의

interface InterfaceUser {
  id : string,
  name : string 
}
function fetchData2() : InterfaceUser {
  return axios.get("https://api.example.com/user");
}


// 타입 별칭을 사용하여 사용자 객체를 정의하거나 인터페이스를 이용해서 사용자 객체를 정의할 수도 있다. 

// 이럴경우 인터페이스를 이용했을 때 이점이 크다. 서비스 요구사항이 변경되어 화면에 노출해야 하는 데이터 구조가 바뀌었다고 가정했을때, 사용자 객체의 속성에 role, address 등이 추가되거나 다른 객체 정보와 결합하여 표시 되어야 한다면 기존 타입의 확장이라는 측면에서 인터페이스로 정의하는 것이 더 수월하다


interface Admin {
  role : string,
  department : string;
}

// 상속을 통한 인터페이스 확장

interface User extends Admin {
  id : string,
  name : string
}

// 선언 병합을 통한 타입 확장

interface User {
  skill : string;
}

// 최종적으로 User 인터페이스는 마치 다음과 같이 정의한 것처럼 동작한다

interface User {
  id : string,
  name : string,
  role : string,
  department : string,
  skill : string
}


// 타입 별칭은 언제 쓰는 것이 좋을까? 타입 별칭으로만 정의할 수 있는 타입들에 대해 알아보자. 인터페이스가 아닌 타입 별칭으로만 정의할 수 있는 타입은 주요 데이터 타입이나 인터섹션, 유니언 타입이다. 인터페이스는 객체 타입을 정의할 때 사용하는 타입이기 때문에 다음 타입은 인터페이스로 정의할 수 없다.

type MyString = string;
type MyNumber = number;
type MyBoolean = boolean;
type StringOrNumber = string | number;

// 또한 제네릭, 유틸리티 타입, 맵드 타입과도 연동하여 사용할 수 있다.

// 제네릭
type Dropdown<T> = {
  id : string,
  title : T;
}

// 유틸리티 타입 
type Admin2 = {name : string; age : number; role : string};
type OnlyName = Pick<Admin2, 'name'>

// 맵드  타입
type Picker<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 유틸리티 타입이나 맵드 타입은 기존에 정의된 타입을 변경하거나 일부만 활용할 때 사용한다.