// 이넘 (enum)은 특정 값의 집합을 의미하는 데이터 타입이다. 
// 먼저, 변하지 않는 고정 값(const)을 상수라고 하는데 상수는 단순히 고정된 값을 저장하는 것뿐만 아니라 이 값이 어떤 의미를 갖는지 알려 줌으로써 가독성을 높이는 장점이 있다. 변수의 역할인 값에 의미를 부여하는 것과 같은 맥락이다.
// note : 상수는 보통 모두 대문자로 작성해서 일반 변수와 구분하낟.
// 이러한 여러개의 상수를 하나의 단위로 묶으면 이넘이 된다. 비슷한 성격이나 같은 범주에 있는 상수를 하나로 묶어 더 큰 단위의 상수로 만드는 것이 이넘의 역할이다.
var ShoesBrand;
(function (ShoesBrand) {
    ShoesBrand[ShoesBrand["Nike"] = 0] = "Nike";
    ShoesBrand[ShoesBrand["Adidas"] = 1] = "Adidas";
    ShoesBrand[ShoesBrand["NewBalance"] = 2] = "NewBalance";
})(ShoesBrand || (ShoesBrand = {}));
// 이 이넘의 값의 각 속성은 다음과 같은 형태로 사용한다.
var myShoes = ShoesBrand.Nike; // 0이 할당
// 숫자형 이념 - 이넘에 선언된 속성은 기본적으로 숫자값을 가진다. 다음과 같이 이넘을 선언하면 첫번째 속성부터 0,1,2,3이 할당된다.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
