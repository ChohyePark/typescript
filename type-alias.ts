// 타입 별칭은 특정 타입이나 인터페이스 등을 참조할 수 있는 타입 변수를 의미한다. 자바스크립트의 변수처럼 해당 타입이 어떤 역할을 하는지 이름을 짓고싶을 때 사용할수도 있고, 여러번 반복되는 타입을 변수화해서 쉽게 표기하고싶을때 사용한다.

type Myname = string;
var capt : Myname = 'chohye';

type MyMessage = string | number;
function logText (text : MyMessage) {
    console.log(text);
}

var messageText: MyMessage = 'hello';
logText(messageText);

// note : 타입 변수라고 표현했다고 해서 타입을 선언하고 다시 다른 타입을 할당할 수는 없다.

// 타입 별칭과 인터페이스의 차이점, 타입 별칭으로도 객체 타입을 정의할수 있고 인터페이스도 객체 타입을 정의할 수 있다. 코드 에디터 표기 방식 차이때문에 변수에 연결된 타입이 구체적으로 어떤 모양인지 파악 할때는 타입 별칭이 더욱 가독성이 좋다. 

// 인터페이스는 주로 객체의 타입을 정의하는 데 사용하는 반면, 타입 별칭은 다음과 같이 일반 타입에 이름을 짓는 데 사용하거나 유니언 타입, 인터섹션 타입 등에도 사용할 수 있다.

type ID = string;
type Product = TShirt | Shoes;
type Teacher = Person & {teaching : string};

// 또한 인터페이스와 타입의 별칭의 정의를 함께 사용할 수도 있다.

interface Test1 {
  name : string;
  age : number;
}

type Test2 = {
  old : boolean;
}

type AllTest = Test1 & Test2;


