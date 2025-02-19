
var age: number = 100;
var isLogin: boolean = false;
var chohye: object = {name : 'chohye', age : 100};

// 배열은 두가지 방법으로 선언할 수 있다
// 문자열 배열
var companies: Array<string> = ['네이버', '삼성', '인프런'];
var companies: string[] = ['네이버', '삼성', '인프런']

//숫자 배열 
var cards: Array<number> = [11,12,13]
var cards: number[] = [11,12,13];

// 튜플 tuple 타입
// 특정 형태를 갖는 배열, 배열 길이가 고정되고 각 요소 타입이 정의 된 배열을 튜플이라고 한다.

var items: [string, number] = ['hi', 11];

// any 타입은 아무데이터나 취급하겠다는 의미. 타입스크립트에서 자바스크립트 유연함을 취하려고 할 때 사용하는 타입

var myName:any = 'chohye';
myName = 100;

// any는 이미 작성된 자바스크립트 코드를 타입스크립트로 변환할 때 유용하게 사용할 수 있는 타입

// 자바스크립트에서 null은 의도적인 빈값을 의미. undefined는 변수를 선언할 때 값을 할당하지 않으면 기본적으로 할당되는 초깃값. 타입스크립트에서는 이 두값을 타입으로 정의할 수 있다.


var empty:null = null;
var nothingAssigned: undefined;

// 함수 파라미터와 반환값 모두 타입 지정

function sayWord(word:string): string {
  return word;
}

// 자바스크립트 함수에서는 파라미터와 인자의 개수가 일치하지 않아도 프로그래밍상 문제가 없었다. 그러나 타입스크립트에서는 파라미터와 인자의 개수가 다르면 에러가 발생

// 옵셔널 파라미터 - 파라미터의 개수 만큼 인자를 넘기지 않고 싶을 때

function sayMyname (firstName:string, lastName?:string):string {
  return 'myname' + firstName + ' ' + lastName;
}

sayMyname('chohye');

