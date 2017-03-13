---
layout: post
title: React / QUICK START / State and Lifecycle
excerpt: Component 내부에서 값을 변경할 수 있는 State와 프로세스의 특정 시간에 코드를 재정의 할 수 있는 Life Cycle에 대하여 알아봅니다.

categories:
  - react
tags:
  - state
comments: true
image:
    feature: https://github.com/react-study/reactStudy/raw/master/4_ReactBasic2/component-life-cycle.png
    credit: 하코사_고무곰님
    creditlink: https://gomugom.github.io
---
지금까지는 Props를 활용하는 업데이트하는 한가지 방법만 배웠었습니다.

이전 섹션 중에 있던 시계 예제를 확인해보겠습니다.  
이 예제는 ReactDOM.render()를 호출하여 렌더링 된 출력을 변경합니다.
```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```
[코드실행](http://codepen.io/gaearon/pen/gwoJZk?editors=0010)

이번 섹션에서는 Clock Component를 정확히 재사용하고 캡슐화하는 방법을 학습합니다.  
매초마다 자체 타이머를 설정하여 업데이트 합니다.

```js
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```
[코드실행](http://codepen.io/gaearon/pen/dpdoYR?editors=0010)  
그러나 위 코드의 Clock에서는 중요한 것이 빠져있습니다.  
타이머를 설정하고 매초마다 UI를 업데이트해야한다는 것 입니다.

우리는 아래와 같은 코드를 한 번 쓰고 `<Clock />` 자체를 업데이트하려고 합니다.
```js
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
이것을 구현하려면 Clock Component에 `state`를 추가해야합니다.  
`State`는 `Props`와 비슷하지만 **Component에 완전히 제어됩니다.**

이전에 Class에 정의된 Component에는 몇 가지 추가된 기능이 있습니다.  
`Locat state`는 **클래스에서만 사용할 수 있는 특징**이 있습니다.

---
### Function -> Class 변환
Clock 같은 functional component를 Class로 변환시킬 수 있습니다.
1. React.Component를 extends하는 같은 이름의 Class를 만든다.
2. 단일 메서드 render()를 비어있는 상태로 추가한다.
3. 함수안에 있던 본문을 render()메서드로 옮긴다.
4. props를 this.props로 대체한다.
5. 껍데기로 남아있는 함수 선언문을 삭제한다.

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
[코드실행](http://codepen.io/gaearon/pen/zKRGpo?editors=0010)  
Clock은 이제 더 이상 함수가 아닌 Class로 정의되었습니다.  
이것을 통해 `local state`와 `lifecycle hooks` 같은 부가적인 기능을 사용할 수 있게 되었습니다.

---

### Class에 Local State 추가하기
날짜를 props에서 state로 3단계의 과정으로 옮길 것입니다.

###### 1) render() 메서드에서 this.props.date를 this.state.date로 대체합니다.

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
  
###### 2) this.state를 초기화하는 class 생성자를 추가합니다.

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
> 기본 생성자에 props를 전달하는 방법 :

```js
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```
Class component는 항상 **기본 생성자를 props와 함께** 호출해야합니다.


###### 3) `<Clock />` element에서 날짜 prop을 제거하세요.
```js
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
나중에 타이머 코드를 component에 다시 추가할 예정입니다.

결과 : 
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

```
[코드실행](http://codepen.io/gaearon/pen/KgQpJd?editors=0010)  

그 다음, Clock를 자체 타이머 설정하고 매 초마다 스스로 업데이트합니다.

---

### Class에 LifeCycle Methods 추가하기
많은 Component들과 함께하는 어플리케이션은 Component들이 destoryed되는 시점에
자유로워진 리소스를 확보하는 것이 매우 중요합니다.

Clock가 DOM에 처음으로 렌더링 될 때마다 타이머를 설정하려고 합니다.  
이것을 React에서는 `mounting`이라고 부릅니다.

또한 Clock에서 만들어진 DOM이 제거 될 때마다 해당 타이머를 지우고 싶을 때 이것을 React에서는 `unmounting`라고 합니다.  

Component가 `mounts` or `unmounts`될 때 몇 몇 코드를 실행하려면 **component class에 특수한 메서드를 선언 할 수 있습니다.**

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
이러한 방법을 `lifecycle hooks`라고합니다.  
componentDidMount()는 component출력이 DOM에 렌더링 된 후에 실행되며 타이머를 설정하기에 좋은 장소입니다.
```js
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```
이곳에 타이머 ID를 어떻게 저장하는지 유의하세요 

this.props는 React 자체적으로 설정되고 this.state는 특별한 의미를 가지지만  
View 출력이 아닌 경우에는 클래스에 수동으로 필드를 추가 할 수 있다.  
render()는 안에서 아무것도 사용하지 않는다면 state가 되서는 안됩니다.

componentWillUnmount() lifecycle hook에서 타이머를 종료한다 :
```js
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```
마지막으로 매초마다 실행되는 tick()메서드를 구현했습니다.  
this.setState() 사용하여 component local state에 관한 업데이트를 합니다.
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
[코드실행](http://codepen.io/gaearon/pen/amqdNA?editors=0010)  
이제는 매초마다 시계가 똑딱 거립니다.  

무슨 일이 일어나고 있는지와 메서드가 호출되는 순서를 다시 되돌아봅시다.

1) `<Clock />`이 `ReactDOM.render()`에 전달되면 React가 `Clock Copmonent`의 생성자를 호출합니다.  
`Clock`은 현재 시간을 표시해야하기때문에 `this.state`에 현재 시간을 객체로 포함시킵니다. 나중에는 이 상태를 업데이트 할 것입니다.

2) 그 다음 React는 `Clock Component`의 `render()` 메서드를 호출합니다.  
이것이 React가 화면에 무엇을 표시해야 하는지를 배우는 방법입니다. 그리고 나서 React는 DOM을 업데이트 하여 `Clock`의 렌더링 출력과 일치시킵니다.

3) `Clock`의 출력이 DOM에 삽입될 때 React는 `componentDidMount()` lifecycle hook를 호출합니다.  
그 안에는 `Clock Component`가 브라우저에 `tick()`을 1초에 한 번씩 호출하는 타이머를 설정하도록 요구합니다.

4) 브라우저는 매초마다 `tick()`메서드를 호출합니다.   
그 안에 `Clock Component`는 현재 시간을 포함하는 객체와 `setState()`를 호출하여 UI 업데이트를 예약합니다.  
`setState()`의 호출 덕분에 React는 상태가 변경된 것을 알아채고 `render()`메서드를 다시 호출하여 화면에 무엇이 있어야 하는지 학습합니다.  
이번에는 `render()`메서드의 `this.state.date`가 달라지므로 출력에 업데이트 된 시간이 포함됩니다. React는 그에 따라서 DOM을 업데이트합니다.

5) `Clock component`가 DOM에서 제거되면 React가 `componentWillUnmount()` lifecycle hook를 호출하여 타이머가 중지됩니다.

---

### State 올바르게 사용하기
setState에 대해 알아야 하는 세가지가 있습니다.

### State를 직접 수정하지 마십시오.
예를 들어 다음과 같이 Component를 다시 렌더링하지 않습니다 : 
```js
// 잘못된 예
this.state.comment = 'Hello';
```

대신에 `setState()`를 사용합니다 : 
```js
// 올바른 예
this.setState({comment : 'Hello'});
```

`this.state`를 할당 할 수 있는 유일한 장소는 생성자입니다.

---

### State는 업데이트는 비동적일 수 있다.
React는 성능을 위해 다양한 `setState()`호출을 단 한번에 업데이트 한다.  
왜냐하면 `this.props`와 `this.state`는 비동기적으로 업데이트 될 수 있으므로
다음 상태를 계산할 때 그것들의 값에 의지해서는 안됩니다.

예를 들어, 이 코드는 `counter` 업데이트에 실패하게 됩니다.
```js
// 잘못된 예
this.setState({
  counter : this.state.counter + this.props.increment,
});
```

이것을 고치려면 객체보다는 함수를 받아들이는 `setState()`의 두 번째 형태를 사용합니다.  
이 함수는 이전 `state`를 첫번째 인수로 받고, 두번재 인수 업데이트가 적용되는 시점에 `props`를 받습니다 : 
```js
// 올바른 예
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```

위의 코드에서 `화살표 함수(ES6)`을 사용했지만, `일반적인 함수`에서도 작동합니다.
```js
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});
```
---

### State 업데이트 병합
`setState()`가 호출될때 React
예를 들어, `state`에는 각각의 독립된 변수가 포함될 수 있습니다.
```js
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

그 다음에는 별도의 `setState()`호출로 독립적인 업데이트를 할 수 있다. 
```js
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```
얕은 병합으로 `this.setState({ comments )}`는 `this.state.posts`를 그대로 두지만
`this.state.comments`를 완전히 대체합니다

---

### 데이터 흐름은 아래
**부모** `component`나 **자식** `component`는 **특정** `component`가 **`stateful(상태저장)` 또는 `stateless(비상태저장)`인지 알 수 없으며,**  
`function`로 정의되어있는지 `Class`로 정의되어있는지 신경 쓸 필요 없습니다.
  
이것이 `state`가 종종 `local` 또는 `캡슐화`라고 불리우게 된 이유입니다.  
자신의 것만 소유하고 설정할 수 있으며 다른 component에는 접근할 수 없습니다.

Component는 하위 component에 **props로 state를 내려줄 수 있습니다.**
```js
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```

이것은 또한 사용자 정의를 위해 적용될 수 있습니다.
```js
<FormattedDate date={this.state.date} />
```
`FormattedDate component`는 props를 받아 `날짜`를 받을 수 있으며  
이것이 Clock의 props인지 수동으로 입력되었는지는 **Clock의 state을 통해 알 수 있습니다.**
```js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```
[코드실행](http://codepen.io/gaearon/pen/zKRqNB?editors=0010)

이것을 일반적으로는 **"top-down"** 또는 **"단방향"**데이터 흐름이라고 부릅니다.  
**모든 state는 항상 특정 component에 의해 소유**되며 그 state에서 파생된 모든 데이터 또는 UI는 해당 트리의 **Component "이하"에만 영향 미칩니다.**

Component의 트리를 props의 폭포로 상상한다면 제각기 Component의 state는 **아무 데서나 멋대로 추가된
물**과 같지만 마찬가지로 아래로 흐릅니다.

모든 Component들이 정말로 분리가 되었다는 것 보여주기 위해 3개의 `<Clock>`을 렌더링 하는 `App component`를 만들 수 있습니다.
```js
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
[코드실행](http://codepen.io/gaearon/pen/vXdGmd?editors=0010)

각각의 `<Clock>`은 자체 타이머를 설정하고 독립적으로 업데이트됩니다.

React App에서, component가 `stateful`인지 `stateless`인지는 시간이 지나게되며 변경될 수 있는 component의 세부적 구현체라고 할 수 있습니다.  
`stateful` component 안에서  `stateless` component를 사용할 수 있며 그 반대로도 마찬가지입니다.