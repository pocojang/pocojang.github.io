---
layout: post
title: React / QUICK START / Handling Events
excerpt: Component 내부에서 값을 변경할 수 있는 State와 프로세스의 특정 시간에 코드를 재정의 할 수 있는 Life Cycle에 대하여 알아봅니다.

categories:
  - react
tags:
  - Handling Events
comments: true
image:
    feature: open_graph.png
---
React elements를 핸들링하는 것은 DOM elements를 핸들링하는 것과 매우 비슷합니다.  
여기에 조금의 구문 차이가 있다.
* React 이벤트의 네이밍은 소문자보다는 camelCase를 사용하는 것이 좋습니다.
* JSX에서는 함수를 통해 이벤트 핸들러로 전달하는 것이 문자열보다 낫습니다.

HTML 예 :
```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

React에서는 약간 다릅니다.
```html
<button onclick={activateLasers}>
  Activate Lasers
</button>
```

또 다른 차이점은 React에서 기본 동작을 막기 위해 `false`를 리턴 할 수 없으며 `preventDefault`를 명시적으로 불러와야합니다.  
예를 들어 순수 HTML을 사용하면 새 페이지를 여는 기본 링크를 막기 위해 다음과 같이 쓸 수 있습니다.
```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

React에서는 위의 코드 대신에 이렇게 할 수 있습니다.
```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```
이 시점에서 `e`는 인위적인 이벤트입니다.  
React에서는 [W3C 사양](https://www.w3.org/TR/DOM-Level-3-Events/)에 따라서 이렇게 인위적인 이벤트를 정의합니다.
때문에 크로스-브라우징 호환성에 대해서 걱정할 필요가 없습니다.  
`SyntheticEvent`에 대해 더 배우고 싶다면 [공식가이드](https://facebook.github.io/react/docs/events.html)를 참조하세요.

React를 사용할 때는 일반적으로 `addEventListener`를 호출하여 리스너를 추가할 필요가 없습니다.  
DOM elements를 생성한 후에 리스너를 추가해야 합니다.
대신 elements가 초기 렌더링 되는 시점에 리스너를 제공합니다.

[ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)를 사용하여 component를 정의 할 때 일반적인 패턴은 이벤트 핸들러가 클래스의 메서드가 되는 것입니다.  
예를 들어 이 `Toggle` component는 사용자가 "ON"과 "OFF" 상태를 토글 할 수 있는 버튼을 렌더링합니다.
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 이 바인딩은 "this"가 콜백에서 작동하도록 만들기 위해 필요합니다
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```
[코드실행](http://codepen.io/gaearon/pen/xEmzGg?editors=0010)  
JSX 콜백에서의 의미에 대해서 세심함을 가져야합니다.  
JavaScript에서는 클래스 메서드가 기본으로 바인딩 되지 않습니다.  
만약 `this.handledClick` 바인딩을 잊고 `onClick`에 전달하지 않는다면 함수가 호출 되는시점 `undefined`가 됩니다. 

이것은 React와 관련 특징이 아닙니다; 
[JavaScript에서 함수가 작동하는 방법](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)의 일부분입니다.  
일반적으로 `()`없이 메서드를 참조하는 경우 그 후 `onClick={this.handleClick}`와 같은 방법으로 바인딩 해야합니다.

만약 `바인딩`이 번거롭다면, 두 가지 방향으로 극복할 수 있습니다.  
실험적인 [Property initializer syntax](https://babeljs.io/docs/plugins/transform-class-properties/)를 사용한다면, `property initializers`를 사용하여 콜백을 볼바르게 바인딩할 수 있습니다 : 
```js
class LoggingButton extends React.Component {
  // 이 구문은 "this"가 handleClick안에서 바인딩되도록합니다.
  // 주의 : 이것 *실험적인* 구문이다.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```
이 구문은 [React Create App](https://github.com/facebookincubator/create-react-app)에서 기본적으로 사용됩니다.  
`property initializer syntax`를 사용하지 않는 경우, 콜백에서 [Arrow Function(화살표 함수)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)를 사용할 수 있습니다
```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 이 구문의 "this"는 handleClick의 바인딩을 보장한다.
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```
이 구문의 문제점은 `LoggingButton`이 렌더링 되는 시점에 **다시 콜백이 생성되는 것**입니다.  
대부분의 경우, 이것은 훌륭하지만 이 콜백이 하위 components에 props으로 전달된다면 이런 components는 특별히 다시 렌더링해야된다.

이런 종류의 퍼포먼스 문제를 방지하려면 일반적으로 생성자에서 바인딩하거나 또는 `property initializer syntax`을 권합니.