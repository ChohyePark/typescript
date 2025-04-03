class Chatgpt {
  name : string; // 클래스 속성 타입 미리 정의

  constructor(name: string) {
    this.name = name;
  }

  sum(a : number, b : number) : number {
    return a + b;
  }
}

// 클래스 접근 제어자 - public, private, protected
// public - 클래스 외부 접근 가능, 기본값
// private - 클래스 내부에서만 접근 가능
// protected - 클래스 내부와 상속받은 자식 클래스에서만 접근 가능


class WaterPurifier {
  private waterAmount : number;

  constructor(waterAmount: number) {
    this.waterAmount = waterAmount;
  }
  
  public wash () {
    if(this.waterAmount > 0) {
      console.log('세척중');
    }
  }
}

var purifier = new WaterPurifier(100);
// purifier.amount = 10; 접근시 오류 발생


// * 주의할점 타입스크립트의 접근 제어자가 지정되어 있더라도 실행 시점의 에러까지는 보장해주지 못한다. 접근제어자의 실행 결과까지도 클래스 접근제어자와 일치시키고 싶다면 private 문법 (#)을 사용하면 된다. 
