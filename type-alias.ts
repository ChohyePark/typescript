// 타입 별칭은 특정 타입이나 인터페이스 등을 참조할 수 있는 타입 변수를 의미한다. 자바스크립트의 변수처럼 해당 타입이 어떤 역할을 하는지 이름을 짓고싶을 때 사용할수도 있고, 여러번 반복되는 타입을 변수화해서 쉽게 표기하고싶을때 사용한다.

type Myname = string;
var capt : Myname = 'chohye';

type MyMessage = string | number;
function logText (text : MyMessage) {
    console.log(text);
}

var messageText: MyMessage = 'hello';
logText(messageText);