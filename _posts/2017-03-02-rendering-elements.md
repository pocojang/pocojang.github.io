---
layout: post
title: React Docs 번역하기 / QUICK START / Rendering Elements
excerpt: ReactDOM의 렌더링과 Elements 
categories:
  - react
tags:
  - Rendering
comments: true
image:
  feature: view_react.png
---

Elements는 React의 가장 작은 빌딩 블록 중 하나이다.

```javascript
const element = <h1>hello, wolrd!</h1>;
```

브라우저 DOM Elements와 달리 React Elements는 Plain Object이므로 간단하게 만들 수 있다.

React DOM은 React Elements와 일치하도록 DOM을 업데이트합니다.

--------------------------------------------------------------------------------

### Elements DOM 렌더링

```html
<div id='root'></div>
```

위의 코드를 '루트' DOM 노드라고 부른다. 왜냐하면 React에서 내부의 모든 것을 관리하기 때문이다.

React 어플리케이션은 보통 단일 루트 DOM 노드를 사용하며 통합하는 경우에는

분리된 루트 DOM 노드가 있을 수 있다.

React Elements를 루트 DOM 노드로 렌더링하는 경우

React Elements들을 모두 ReactDOM.render()에 전달해야한다.

```javascript
const element = <h1>hello, wolrd!</h1>;
ReactDOM.render(
  element,
  document.getElementById('root');
);
```

--------------------------------------------------------------------------------

### 렌더링 Elements 업데이트

React Element는 불변하는 성격을 가지고 있다.

Element는 한번 만들면 자식 또는 attributes를 변경할 수 없으며

영화의 단 한 장면과도 같다. 특정 시점의 UI를 나타내기 때문이다.

지금까지 배운 것만으로 UI를 업데이트하는 유일한 방법은

새로운 Element를 만들어 ReactDOM.render()에 전달하는 것입니다.

Example :

```javascript
function tick(){
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is{new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
	  element,
	  dcoument.getElementById('root');
  );
}
setInterval(tick, 1000);
```
1초마다 `setInterval(tick, 1000);`를 통해 `ReactDOM.render()`를 호출합니다.

>실제로 대부분의 React 어플리케이션은 ReactDOM.render()를 한 번만 호출합니다.
>다음 섹션에서는 이러한 코드가 어떻게 Stateful Component로 캡슐화되는지 배우게 될 것입니다.

---
### React는 오직 필요한 부분만 업데이트 합니다

React DOM은 Element와 자식 element를 이전 element와 비교하여

DOM을 원하는 상태로 만드는 데 필요한 DOM 업데이트만 적용합니다.

개발자도구를 사용하여 [마지막 예제](http://codepen.io/gaearon/pen/gwoJZk?editors=0010)를 확인할 수 있습니다.

![](https://facebook.github.io/react/img/docs/granular-dom-updates.gif)

내용이 변경된 텍스트 노드만 ReactDOM에 의해 업데이트됩니다.


우리의 경험에서 생각해볼때 어떻게 UI를 변경해야할까보다

시간이 지나며 변경하는 방법은 전체 클래스의 버그를 제거합니다.



####ReactDOM의 이해를 돕는 최고의 동영상
[https://www.youtube.com/watch?v=BYbgopx44vo](https://www.youtube.com/watch?v=BYbgopx44vo)
