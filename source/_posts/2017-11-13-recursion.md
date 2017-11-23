title: 홀수 or 짝수 재귀함수
date: 2017-11-13
tags: [algorithm, 재귀함수, recursion]
categories:
- [study, algorithm]
---

홀수 또는 짝수로 재귀함수 출력하기

<!-- more -->

---

>자연수 N을 입력받아 N이 홀수인 경우에는 N부터 1까지의 홀수를  
>짝수인 경우는 N부터 2까지의 짝수를 모두 출력하는 프로그램을 재귀함수로 작성하세요.


#### Expect
```js
getOddEvenDesc(7);

// output
7  6  5  4  3  1
```

#### Solution
```js

function getOddEvenDesc(num) {
  const isEven = num % 2 === 0 && 2;
  const isOdd = num % 2 !== 0 && 1;

  if ((isOdd && num < 1) || (isEven && num < 2)) return;

  console.log(num)

  return getOddEvenDesc(num - 2);
}

getOddEvenDesc(15);
```