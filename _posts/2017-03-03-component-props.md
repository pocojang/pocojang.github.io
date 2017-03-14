---
layout: post
title: React Docs 번역하기 / QUICK START / Components and Props
excerpt: Component를 사용하여 UI를 독립적으로 재사용 가능한 조각으로 분할하고 Props를 통해 입력 받는 방법을 배운다
categories:
  - react
tags:
  - component
comments: true
image:
    feature: https://facebook.github.io/react/img/blog/thinking-in-react-components.png
    credit: facebook.github.io
    creditlink: https://facebook.github.io/react/docs/thinking-in-react.html
---
Component는 UI를 독립적인 재사용 가능한 조각으로 나눌 수도 있으며  
개별적인 Component로 생각할 수 도있다.

또한 개념적으로 Component들은 JavaScript 함수와 같으며 
Component들이 임의의 입력을 받는 것을 Props라고 한다.

---
### Class Components 및 기능
JavaScript 함수를 통해 Component를 정의 할 수 있다.
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
이 함수는 매개변수로 객체 'props'를 데이터와 함께 받으며 React Element를 반환한다  
이런 Component들은 JavaScript 함수이기때문에 기능적이라고 한다.  
(해석이 미비한 부분입니다.)

ES6 Class Component 정의
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

위의 두 코드는 React에서 동일하게 사용된다.

---
### Component 렌더링
이전에는 DOM태그를 나타내는 React element들만 있었다.
```js
const element = <div />;
```
그러나 이제 사용자 정의 Component 사용할 수 있게 되었다.
```js
const element = <Welcome name ="Sara />;
```

React에서는 사용자 정의 Component를 사용하여 JSX 속성을
Component 단일 객체로 전달할 수 있습니다.  
그리고 이 객체를 바로 `Props`라고 부른다
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />
  ReactDOM.render(
    element,
    document.getElementById('root')
);
```
[CodePen](http://codepen.io/gaearon/pen/YGYmEG?editors=0010)  
위의 코드에 대한 설명 :
1. ReactDOM.render()와 <Welcome name="Sara" /> Element를 함께 호출한다.
2. React에서는 `{name : 'Sara'}`가 있는 Welcome Component를 `Props`로 호출한다.
3. Welcome Component는 `<h1>Hello, Sara</h1>` Element를 반환한다.
4. ReactDOM은 `<h1>Hello, Sara</h1>`를 효율적으로 업데이트하여 DOM과 일치시킨다.


>주의  
항상 대문자로 Component의 네이밍을 시작해야 한다.  
예를 들면 `<div />`는 DOM 태그이지만 `<Welcome />`은 Component를 나타낸다.

---

### Component 작성
Component들은 외부로 출력될때 다른 Component들을 참조 할 수 있다.  
이를 통해 다양한 계층에 Component를 추상화하여 사용 할 수 있으며 버튼, 폼, 상자, 화면 등  
React 어플리케이션의 모든 것은 일반적으로 Component로 표현됩니다.

*예를 들어 Welcome Component를 여러번 렌더링하는 App Component를 만들 수 있다.*
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

[CodePen](http://codepen.io/gaearon/pen/KgQKPr?editors=0010)  
보통 새로운 React 어플리케이션의 맨 위에 단일 App Component가 있지만  
React를 기존의 어플리케이션에 통합하는 경우 Button Component와 같은 작은 단위의
Component로 시작할 수 있으며  
차후에는 View의 최상의 계층까지 만들 수 있습니다.

>경고  
Component는 단일 루트 element를 반환해야하기때문에
element를 모두 포함한 `<div>`가 추가 되어있다.

---
### Component 추출
Component들을 더 작은 Component로 분할하는 것을 두려워하지 마세요.

하단의 Comment Component를 고려해보세요
```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

[CodePen](http://codepen.io/gaearon/pen/VKQwEo?editors=0010)  
author(객체), text(문자), date(날짜)를 Props로 받고 있습니다.  
위의 Component는 모든 것이 내포되었기때문에 변경하기 어려우며 개별 Component로 부품화하여 재사용하기도 어렵습니다.  
이 코드에서 몇 개의 Component를 추출해봅시다.

###### Avatar 추출
```js
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```
Avatar는 Comment에서 렌더링 여부를 알 필요가 없습니다.
이것이 우리가 props에 더 포괄적인 네이밍을 한 이유입니다  
: `user` => `author`  
Component 자체의 관점의 Context가 아닌 Component의 네이밍을 지정하는 것이 좋습니다.
  
---
###### 이제 Comment를 심플하게 할 수 있습니다.
```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        // 변화된 부분 --------------
        <Avatar user={props.author} />
        //---------------------------
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```
---
###### 다음으로 Avatar를 렌더링하는 UserInfo Component를 추출합니다.
```js
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```
---
###### 더욱 더 심플해진 Comment Component
```js
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

[CodePen](http://codepen.io/gaearon/pen/rrJNJY?editors=0010)  
Component를 분리하는 것은 쓸데없는 작업이라고 생각할 수 있지만  
재사용 가능한 Component를 팔레트화면 더욱 더 큰 어플리케이션에 성공적으로 사용할 수 있습니다.

---
### Read-Only 속성을 가진 Props
Component를 함수쓰든 클래스로쓰든 선언관계 상관없이 props는 수정해서는 안됩니다.

sum function 예제:
```js
function sum(a, b) {
  return a + b;
}
```
이러한 함수는 항상 동일한 입력에 대한 동일한 결과를 반환하기때문에 `순수`라고 합니다.    


반대로 아래 함수는 자신의 입력을 변경하기 때문에 `순수하지 않습니다`.
```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React는 매우 융퉁성있지만 한가지 엄격한 규칙이 있습니다.  
**모든 React Component들은 props에 순수한 function만 취해야합니다.**

물론 어플리케이션의 UI는 동적이며 시간이 흐르며 변화합니다.  
다음 차례에서는 새로운 `state`의 개념을 소개합니다.
`State`는 React Component가 이 규칙을 어기지 않고 사용자의 행동,  
네트워크 응답 및 시간의 변화에 따라 출력을 변경할 수 있게 해줍니다.