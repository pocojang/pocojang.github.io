title: 랜덤 게임 만들기
date: 2017-04-16
tags: [up & down 랜덤게임]
categories:
- [study, code game]
---

숫자를 찾는 Up & Down 랜덤게임 만들기

<!-- more -->
> 숫자를 찾는 up & down 랜덤게임을 만들어라  

조건 1. 랜덤 숫자의 범위는 1~100 이다 Math.floor(Math.random() * 100 + 1)  
조건 2. 6번 이상 틀리면 게임이 종료된다.  
조건 3. 게임이 종료되면 say를 외쳐도 게임이 종료되었다는 메시지만 나온다.  

#### Expect
```js
randomGame.start();	=>  게임을 시작합니다.
randomGame.say(40);	=>  업!
randomGame.say(80);	=>  다운!
randomGame.say(47);	=>  정답!
```

#### Solution
```js
const randomGame = {
  coin: 0,

  random: {
    correct: 0,
    min: 1,
    max: 100
  },

  start: function() {
    if (this.coin) {
      return '아직 게임이 진행 중 입니다.';
    }

    this.coin = 6;
    this.random.correct = Math.floor(Math.random() * 100 + 1);

    return '게임을 시작합니다';
  },

  subtractCoin: function() {
    this.coin--;

    console.log(`남은 게임횟수 : ${this.coin}`);
  },

  upAndDownMachine: function(num) {
    var result = this.random.correct > num ? '업!' : '다운!';

    if (num !== this.random.correct) {
      this.subtractCoin();

      return result;
    }

    return '정답!';
  },

  userDefinedException: function(num) {
    var min = this.random.min;
    var max = this.random.max;

    throwable(min > num || max < num, `랜덤 숫자의 범위는 ${min} ~ ${max} 이다`);
    throwable(!num, '몇번인지 제대로 외쳐주세요');
    throwable(typeof num !== 'number', '숫자를 넣어주세요');
    throwable(!this.coin, '게임이 종료되었다');

    let throwable = (condition, message) => {
      if (condition) throw (new Error(message));
    };
  },

  say: function(num) {
    try {
      this.userDefinedException(num);

      return this.upAndDownMachine(num);
    } catch (error) {
      console.error(error.message);
    }
  }
}

console.log(randomGame.start());
console.log(randomGame.random.correct);
console.log(randomGame.say(99));
```