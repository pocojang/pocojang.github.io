title: [번역] 멋진 ES6 - var, let 그리고 const를 깊이 살펴보다
date: 2018-11-25
tags: [es6, var, let, const]
categories:
- [programming, javascript]
banner: https://cdn-images-1.medium.com/max/1600/1*SntGwD7Wfd2v0S7aPybdzg.png

---
이 글에서 ES6의 몇 가지 멋진 것들에 대해 탐구할 것입니다.
(고전적인 `var`에 상반된 `let`, `const`에 대해)

시작합시다!

<!-- more -->

---

> JavaScript 변수는 데이터의 값을 저장하는 컨테이너(그릇, 용기)입니다.

일반적으로 JavaScript에서 새로운 변수를 어떻게 만들까요?  
좋아요. 저는 이 질문이 바보같은 질문이라는 걸 압니다. (우리는 모두 "**var**" 를 사용합니다)

# Var

```js
var firstVar; // firstVar 의 기본값을 선언하세요 - undefined
var secondVar = 2; // secondVar 변수를 선언하고 2를 할당하세요.
```

누군가를 위해 설명하자면 `var`는 영어로 "변수"를 의미합니다 (확실히 😆).

많은 현대 언어와 마찬가지로 JavaScript는 유연함을 제공하므로 변수를 선언할 때 특정 타입을 결정할 필요가 없습니다.

정수형? 문자열? 객체? 함수? … — _모두 var 하나면 딱_

다음과 같은 상황을 만나기 전까지는 어렵지 않습니다.

```js
var increment = 1;

if (increment === 1) {
  var increment; // 기본값을 사용하여 increment를 다시 선언합니다.
  // 무엇이든 해보세요.
}

console.log(increment); // 무엇이 출력될까요?
```

도대체 무슨 일이 벌어지고 있는 걸까요? 우선 **호이스팅**에 대해 언급할 필요가 있습니다.


# 호이스팅 면밀하게 관찰하기

>호이스팅은 **모든 변수 및 함수 선언**을 코드가 작성된 위치와 관계없이 **실행 컨텍스트**의 컴파일 단계 중에 먼저 **메모리에 저장되는 JavaScript의 기본 동작**을 말합니다.

좀 더 일반적으로 설명하자면 _**모든**_ 선언을 현재 스코프의 _**맨 위**_ 로 이동시키는 JavaScript의 동작입니다. (**물리적인** 코드 변경은 전혀 없으며) 다른 모든 작업보다 먼저 처리됩니다.

위의 예제를 살펴보면 컴파일 단계에서 코드는 다음과 같이 **이해**할 수 있습니다.

```js
var increment;
var increment;
increment = 1;

if (increment === 1){
    ...
}

console.log(increment); // 1
```

또 다른 예제:
```js
var x = 0;
y = 1;

console.log(sumOf(x, y));

var y;
function sumOf(a, b) {
  return a + b;
}
```

다음과 같이 처리됩니다:

```js
var x;
var y;

function sumOf(a, b) {
  return a + b;
}

x = 0;
y = 1;

console.log(sumOf(x,y));
```

**주의사항**
JavaScript의 호이스팅은 **선언이 _아닌_ 할당에만 적용됩니다.**  
모든 값 할당은 코드에 작성 또는 위치하는 곳과 같은 위치에서 처리며 다음 결과를 얻습니다.

```js
console.log(x); 
x = 3; 
var x = 1; 
console.log(x);
```

`1, 3` 출력을 예상할 수 있지만 출력 결과는 `undefined, 1` 입니다.

또한 위에서 언급한 실행 컨텍스트는 _(JavaScript 문서에 따르면)_ **선언된 `var` 변수의 스코프**입니다.  
그렇다면 `var` 변수 선언 & 할당에 어떤 영향을 미칠까요?

# 실행 컨텍스트는 무엇일까요?

실행 컨텍스트는 **Javascript 코드가 실행 / 평가되는 환경**입니다. 다음 중 하나가 될 수 있습니다.

- 전역 — 기본 환경
- 함수 — 함수 내부 환경
- Eval — `eval` 함수 내부 환경

따라서 여기서 `var` 변수의 스코프는 함수 내부 또는 전역 컨텍스트에 있습니다.

**다른 모든 블록 컨텍스트** - {} 중괄호, 문, 표현식 등의 내부 코드 블록을 의미합니다...
-**위에서 정의한 3가지 유형이 아닌 경우** 언급된 변수의 스코프에는 영향을 미치지 않습니다.

결과적으로 코드 문 블록, 표현식 _(if…else … 문, 반복문 등)_ 에서 변수를 선언하는 것은  컴파일러 / 작성 단계의 맨 위에 선언하는 것으로 이해할 수 있습니다.

```js
function testMe() {
  while(true) {
    var x = 2;
    break;
  }
  console.log(x); 
  // while 문 내부에 x가 선언되어 있음에도 불구하고 2 가 출력됩니다
}
```

이게 바로 `var`입니다.  
보시다시피 이 var 문은 개발자에게 필요한 모든 유연성을 제공합니다 _(하지만 남용해서는 안됩니다!)._

그렇다면 왜 ES6에서는 두 개의 문(`let` 과 `const`)을 더 도입하려고 애쓸까요?
자 이제 알아봅시다.

# Let

`var`와 유사하게 변수를 선언하고 값을 할당할 수 있습니다(선택적으로).  
그러나 var와 **달리** 변수 선언이 **블록 스코프 내부의** 값으로만 선언됩니다.

이것은 변수가 `표현식 또는 문, 블록 ({}) 내부에서만` 선언되고 `존재하도록 제한`되며 일반적인 실행 컨텍스트 외에 하위 블록에서도 사용할 수 있음을 의미합니다. (둘러쌓인 함수 등)

따라서 위 예제의
`x`는 대부분의 언어와 마찬가지로 `while` 블록 스코프 내에서 제한되지 않지만 `var`를 `let`로 바꾸면 결과가 변경됩니다

```js
function testMe() {
  while(true) {
    let x = 2;
    break;
  }
  console.log(x); //ReferenceError: x는 정의되지 않았습니다.
}
```

네. undefined가 아닌 null이 아닌 2가 아닌 대신 `ReferenceError`입니다.

이렇게하면 _변수의 지역성_ 이 보장되므로 이전에 같은 이름으로 선언된 변수를 실수로 변경하지 않으므로 안심할 수 있습니다.

이 상황에서와 같이 :

```js
var x = 1;
{
  let x = 3;
}
console.log(x); // 여전히 1
```

_Yippie (hippie와 New Left의 중간을 자처하는 미국의 젊은이), 🐛가 숨겨질 기회가 줄어듭니다!_

잠깐! 더 있습니다. 블록 스코프로 제한되기 때문에 마침내 _클로저의 도움_**없이** private 멤버을 구현할 수 있습니다.

```js
var Person;
{
  let name;
  Person = function(_name){ 
      name = _name;
  };
  Person.prototype.getName = () => name;
}
var person = new Person('Maya');

console.log(name); // 아무것도 출력되지 않습니다
console.log(person.getName()); // Maya
```

`var`와 다른 중요한 차이점은 **변수 호이스팅이** `let`**에는 적용되지 않는다**는 점입니다.   
즉 컴파일 단계에서 `let` 선언은 **현재 위치에 그대로 유지**되고 다른 코드에서 먼저 처리되지 **않습니다**.  
(일명 `var`처럼 컨텍스트의 맨 위로 이동하지 않습니다.)

따라서 이 예제를 실행할 때
```js
x = 5;
y = 2;

let y; 
var x;
```
`y`에 ReferenceError를 다시 나타내지만 `x`에는 그렇지 않습니다.

마지막으로 `let`을 전역 컨텍스트에서 사용할 때 `var`와는 달리 **전역 객체 대한 프로퍼티를 생성하지 않습니다.**  
우연이라도 전역 객체를 **어지럽히지 않습니다**!!! 🚀

```js
var x = 5;
let y = 4;

console.log(this.x); // 5
console.log(window.x); // 5
console.log(this.y); // undefined
console.log(window.y); // undefined
```

var와 달리 **`let` 변수를 다시 선언하면 SyntaxError가 발생합니다.**

![](https://cdn-images-1.medium.com/max/1600/1*T6GieUKgH7ew68zuEvw26Q.png)  
x에 대한 SyntaxError

따라서 `let`를 사용할 때 `var` 선언의 일반적인 방법보다 **더 많은 제한 / 한계**(더 좋게 말하면)가 있을 것입니다. `const`는 어떨까요?

# Const

예를 들어 템플릿, 기본 메시지 등과 같은 데이터 변수가 있습니다.  
(상수로 사용하기 위함) _JavaScript를 사용하여 애플리케이션 전체에서 이러한 데이터가 변경되지 않도록 하려면 어떻게 해야할까요?_

ES6 이전 한 가지 방법 - **작성하는 것에 주의하세요**
(또는 다른 개발자가 상수에 사용하는 네이밍 컨벤션을 알아채고 이해하도록 기도하라).

ES6 이후 (하나님 감사합니다) 우리는 const를 가집니다.

`const` - `let`과 동일하게 `지역 블록 스코프 변수`를 선언하고 초기화할 수 있습니다.  
따라서 `let`에는 다음과 같은 모든 제한이 있습니다:

- 선언된 변수는 일반적인 실행 컨텍스트 외에 **표현식, 문 코드의 {} 블록 내부에서만 사용할 수 있습니다.**

- const에 **호이스팅이 적용되지 않습니다.**

- 전역 컨텍스트에서 사용될 때 **전역 객체에 프로퍼티가 생성되지 않습니다.**

- 선언된 변수를 **다시 선언할 수 없습니다.**

또한 누구나 추측할 수 있듯이 `const`는 상수를 뜻합니다:

- 선언된 변수는 값으로 **초기화해야 합니다.**

```js
const myConstants; // SyntaxError: const 선언에 초기화 누락
```

- 선언된 변수는 **한 번의** 값으로**만** 할당할 수 있습니다. **재할당 없음**(상수 값에 대한)

하지만 한 가지 `단점`은 **할당된 값 자체가 객체**(객체, 배열 등)의 **형태**일 경우에도 여전히 **수정할 수 있다**는 것입니다.

예:
```js
const myConstant = {name: "Constant"};
myConstant = {name: "new Constant"}; // 오류
myConstant.name = "new Constant"; // 좋아요

console.log(myConstant.name); // 새로운 상수

const arr = [1, 2];
arr = [2,3]; // 오류
arr[0] = 2; // 좋아요

console.log(arr); //[2,2]
```

확실하고 이해하기 쉽지 않습니까?

일반적으로 이 새로운 문이 가져다주는 장점을 알아차렸을 것입니다.  
그러니 요약해 봅시다.

# let 그리고 const의 장점

- 오염 방지 - 불필요한 프로퍼티를 지닌 전역 객체

- **숨겨진 🐛 피하기** - 실수로 상수 값을 수정하거나 서로 다른 범위 블록에 있지만 동일한 이름으로 선언된 잘못된 변수를 업데이트 등

- **불필요한** 호이스팅 **피하기**

- **더 많은 제한을 추가**하여 보다 안정적이고 체계적이며 읽기 쉬운 코드
(`var`로 선언된 변수가 const가 되어야할 경우를 알 수 있습니까??).


# 결론

실제로 `let`과 `const`가 `var`에 비해 얼마나 많은 장점을 가지고 `var`를 **대체하기 위한 것이 아니라** **더 많은 강제** 사항를 JavaScript에 제공하고 개발자의 코드 리뷰와 읽기에 드는 시간을 절약하는 데 도움이 됩니다.

기억하세요 - 저의 조언은 항상 그렇듯이 **먼저 필요한 것을 분석한 다음 작은 변수조차도 적절한 선언문을 선택**하라는 것입니다.   
_많은 작고 하찮은 것들에 대해 처음부터 주의를 기울이지 않는다면 언젠가는 커다랗고 무서운 악몽으로 이어질 수 있습니다._

_결국 깨끗하고 안전한 코드를 작성하는 것을 좋아하지 않는 사람이 있을까요?_ 😃

---

이 아티클은 원작자 [MayaShavin](https://twitter.com/MayaShavin)의 동의를 얻어 번역되었습니다.

원본 아티클: <https://medium.com/front-end-hacking/es6-cool-stuffs-var-let-and-const-in-depth-24512e593268>