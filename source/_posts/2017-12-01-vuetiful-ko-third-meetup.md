title: Vuetiful Korea 세 번째 밋업
date: 2017-12-01
tags: [Vuetiful Korea, Vuetiful Korea 세 번째 밋업, Vue 한국 사용자 모임]
categories:
- conference
banner: http://2.bp.blogspot.com/-4-ydgyAgdJA/WiGG-rBE66I/AAAAAAAABvA/v42eqTVlB-EFGIeiNTwZ4_Je23S5O22QQCK4BGAYYCw/s1600/24577703.png

---
Vuetiful Korea 세 번째 밋업 참가 후기!

<!-- more -->

![](http://1.bp.blogspot.com/-n9miFD4sKOc/WiGICB5RXvI/AAAAAAAABwE/8G-ylQulbsAZntPsD3ppfjMpjNY9cZNWQCK4BGAYYCw/s1600/20171201_190849.jpg)
- 마루180

![](http://3.bp.blogspot.com/-iff45k2g3Io/WiGH7j5hFhI/AAAAAAAABvk/g4RYC6D4FNcVlXGNXH-whDhlBsMz1KVXgCK4BGAYYCw/s1600/IMG_20171201_191027.jpg)

![](http://3.bp.blogspot.com/-VK5CakHnrK4/WiGH7ilZ_NI/AAAAAAAABvg/kuRAfH5tsAsyqbxKkl9Q_Ffptm1loUbBACK4BGAYYCw/s1600/IMG_20171201_191152.jpg)

---

### Virtual dom to render (우경화 @뉴링크)
![](http://1.bp.blogspot.com/-0gvMmsUKVe4/WiGH-j3_nLI/AAAAAAAABv0/cCFCjYx3clAIgsfgzUJbaTQQSdlxxwy0gCK4BGAYYCw/s1600/20171202_013857.jpg)
- **SnabbDom**  
가장 신기했던 부분이었다.  
기존에 React & Vue에서 제공하는 VirtualDOM을 더 강력하게 만든다.  
코드는 그렇게 어려워 보이지 않았으며 Hook과 patch function을 활용한 방법이 재미있었다.

```js
var snabbdom = require('snabbdom');

var patch = snabbdom.init([
  require('snabbdom/modules/class').default,
  require('snabbdom/modules/style').default,
]);
```
- **patch function**  
  VNode의 변화만 보기 때문에 요소에는 관심이 없다.  
  OLD VNode & NEW VNode로 나뉘게 된다.

  
```js
// 선택된 모듈과 함께 patch function 초기화
var patch = snabbdom.init([
  // 토글 class
  require('snabbdom/modules/class').default,
  // DOM 요소 프로퍼티 설정
  require('snabbdom/modules/props').default,
  // 애니메이션을 지원하는 요소 스타일 핸들링
  require('snabbdom/modules/style').default,
  // 이벤트 리스너 연결
  require('snabbdom/modules/eventlisteners').default,
]);

// vnode 생성 핼퍼 함수
var h = require('snabbdom/h').default;

var container = document.getElementById('container');

// patch function 사용
patch(oldVnode, newVnode);
```
- **process**  
  [keep alive](https://kr.vuejs.org/v2/api/#keep-alive)를 주로 활용하였다는 데 [Life Cycle](https://kr.vuejs.org/v2/api/#옵션-라이프사이클-훅)과 관련이 있는 걸로 보인다.


`마지막 한마디 => Vue is JavaScript`

우경화님의 예제 : <https://kellywoo.github.io/vnode>    
SnabbDom : <https://kellywoo.github.io/vnode/vnode>

---

### Vue.js로 Unit Test하기 (박성호 @마이리얼트립)
![](http://2.bp.blogspot.com/-XhLSJ_Lq6rM/WiGH-oHgAfI/AAAAAAAABv8/_uxvYq00DVYwHQqXpjQYKYWLNFB5NMyOwCK4BGAYYCw/s1600/20171202_013813.jpg)

- **TDD를 도입하게 된 계기**  
웹과 앱을 통신하는 복잡한 과정을 개선하기 위해 테스트를 도입하기로 결정

- **테스트 도구 선택**  
다양한 선택 중 VueCLI의 Karma & Mocha를 선택

- **테스트의 종류**  
TDD라고 다 같은 테스트가 아니다. 
테스트의 종류는 다양하기 때문에 다 하는 게 좋다.

- **컴포넌트 테스트**  
VueCLI의 초기화면 테스트를 예를 들어 보여준 후 간단한 Todo 앱의 컴포넌트 테스트를 보여주었다
[Vue.nextTick](https://kr.vuejs.org/v2/api/index.html#Vue-nextTick)을 활용할 것을 추천했다.

---

### PWA 시작하기 (최준석 @NHN 벅스)
![](http://1.bp.blogspot.com/-r-Dwf3nNp6M/WiGH-i2jQQI/AAAAAAAABv4/__9GccJaAGYBcAkF4vlHIJuV69j2wcXmACK4BGAYYCw/s1600/20171202_013754.jpg)


- **지루한 pwa 설명**  
모든 브라우저 && 모든 디바이스  
오프라인 작동 가능 & 앱과 유사하다  
업데이트 프로세스 => 최신 상태 유지 
HTTPS 제공  
설치 가능  
레진코믹스나 AWS는 사용 중

- **application shell**  
캐시 사용 => 빠른 로딩 속도
컨텐츠 동적 이용  
정말 사용해야 하는 기본적인 구성(데이터, 리소스)만 넣어야 한다  

참조 : <https://developers.google.com/web/fundamentals/architecture/app-shell?hl=ko>

- **서비스 워커**  
브라우저가 백그라운드에서 실행하는 스크립트  
설치  
푸시 알림  
백그라운드 동기화  

참조 : <https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ko>

- **사용하면서 어려웠던 부분**
1. SWPrecacheWebpackPlugin  
기본적인 설정 내용에 따라 추가 Service Worker를 자동으로 생성
2. 기본으로 앱 코드 안에 서비스워커를 등록시켜주는 register & Service Worker 파일 필요
3. vue-pwa-template의 dev버전에 register 부분은 없다.
4. Production register => Service Worker를 자동 생성 (설정필요)
5. 튜토리얼대로만 하면 될 정도로 간단하다고 한다.

발표자료 : <http://jicjjang.github.io/2017/11/30/vue-pwa-start>

---

### 스폰서 광고
![](https://media.rocketpunch.com/images/2017/02/11/08db9c99ca0b.jpg)
- 많은 프론트엔드 개발자의 지원을 기다리고 있다고 한다.  
(Vuetiful Korea 세 번째 밋업의 간식 후원)

---

### OX 퀴즈 (Bob Lee)
![](http://3.bp.blogspot.com/-dYTMRjgyOFU/WiGH7l_5esI/AAAAAAAABvc/SxursRZabE0k2_6WX3VCgVwlOJXuy1c4QCK4BGAYYCw/s1600/IMG_20171201_204107.jpg)
- 전체적으로 문제가 너무 어려웠다...

![](http://1.bp.blogspot.com/-BzDpz3NrLr0/WiGH7s1fAfI/AAAAAAAABvY/Jq7dLpN9Bo0gZycrWkKDAmNRSU6RgyVggCK4BGAYYCw/s1600/IMG_20171201_205811.jpg)


---

### Q&A

- **Q :** PWA 개발 후 패키징은 뭐로 하나요? cordova? 같은 걸까요? 요즘 핫한게 뭐가 있는지 궁금합니다.  
  **A :** 앱스토어 배포가 필요 없다. 레진코믹스를 예로 설명

- **Q :** PWA의 Push는 firebase를 이용하신 건가요?  
  **A :** Yes!

- **Q :** react native처럼 vue로도 native app을 만들수 있는 뭔가가 있다고 들었는데,  
용어가 기억이 안납니다. 아시는 분 언급좀 부탁드려요!  
  **이승민 :** [Weex](https://weex.apache.org)!  

- **Q :** Vue가 Angular에 비해 낫다고 생각하는 점을 설명해주세요  
  **이선협 :**  당연히 좋다.
  TypeScript와 Angular는 어렵고 인기 또한 깃헙 Star까지 Vue가 높다

- ​**Q :** 저희도 Vue.js 하는 사람 뽑아요..  
**A :** 웍스모바일에서 뽑는다고 한다

- ​**Q :** 서비스에 PWA 적용하니 정말 좋나요? 실서비스 사례도 궁금해요  
**최준석 :** pwa 발표자입니다. 실서비스에서 안써봤습니다 흑흑 회사에서 vue 안씁니다...

---

### Vue 한국 사용자 모임
- Github : <https://github.com/vuejs-kr>
- Facebook : <https://www.facebook.com/groups/1152461054807344>
- 블로그 : <http://vuejs.kr>
- Slack : <https://vuejs-korea.signup.team>
