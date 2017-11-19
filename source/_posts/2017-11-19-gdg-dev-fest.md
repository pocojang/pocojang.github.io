title: GDG DEVFEST 2017 @Seoul Univ GCP
date: 2017-11-19
tags: [gdg, gdg 2017]
categories:
- conference
banner:
  https://devfest17-seoul.firebaseapp.com/images/logos/devfest-weblogo4@4x.png
---
GDG DEVFEST 2017 관람 후기 (수정 예정)
<!-- more -->
![](http://1.bp.blogspot.com/-ZzaY1ONZaJI/WhFpfUqsbsI/AAAAAAAABrE/6HOIqS-fjnML7b5PIAW8mQ3XkXAEuhU5gCK4BGAYYCw/s1600/gdg-2017-schedule.png)
---
![](http://3.bp.blogspot.com/-o6QBGvuKNtg/WhGLN-lABsI/AAAAAAAABsI/dZ_uzx0hix0-tgwBGTypf0YYGhmyb8NYgCK4BGAYYCw/s1600/20171119_144456.jpg)
두번 다시는 오지 않겠다 다짐했지만 또 오게되었다....

---

<!-- TOC -->

- [Why TypeScript with Clean Architecture by 정유진](#why-typescript-with-clean-architecture-by-정유진)
- [프론트엔드 모던 프레임워크 낱낱히 파헤치기 by 한성민](#프론트엔드-모던-프레임워크-낱낱히-파헤치기-by-한성민)
- [해외 취업이야기 by 정승욱](#해외-취업이야기-by-정승욱)
- [특별한 취업이야기 by 김태호](#특별한-취업이야기-by-김태호)
- [리액트와 장고로 만드는 Progressive Web App: 빠르고 단단한 웹사이트 제작하기 by 진유림](#리액트와-장고로-만드는-progressive-web-app-빠르고-단단한-웹사이트-제작하기-by-진유림)
- [사은품](#사은품)

<!-- /TOC -->

---
#### Why TypeScript with Clean Architecture by 정유진
![](http://1.bp.blogspot.com/-pxpZVZcR_rk/WhGI73M24yI/AAAAAAAABrw/la4cF4w96Lo6G3wfrwnUb74isD7fzUQoACK4BGAYYCw/s1600/gdg-2017-2.png)
>점점 커지는 프로젝트에 관리의 어려움을 느끼기 시작함

- **문제의식**
1. 다양한 지식을 통제
2. 올바른 관점 통일
3. 실수를 최소화 할 수 있는 개발환경

>코드 리뷰가 의미 없는 시간으로 변질되고  
>도메인 간의 관계가 서버에서는 관리가 분산 설계를 통해 관리되지만  
>WEB 환경에서는 굉장히 우려되는 현상을 발견하게 되고 
>Type Safe 기반의 아키텍처를 설계하는 것으로 결정하게 된다.

- **Why TypeScript?**  
수많은 후보들 중 결국 TypeScript를 선택하게 되었다.  
그 이유는 앞으로 지원할 사람을 위한 측면도 있다고 한다.

- **JavaScript -> TypeScript**  
기존의 기술 스택인 React 환경에서 전환하는 데 큰 어려움은 없었다.  
특히 DDD (Domain-driven design)에 가장 큰 포커스를 두었으며  
디렉토리 구조조차 DDD에 상응하는 구조로 설계하여 비즈니스 부분도 고려하였다.

- **TypeScript로 변경한 후기**  
1. 다양하게 혼재되는 관점이 통일되었다.  
2. DDD를 적용하여 이제 비즈니스적인 측면이 고려된 설계로 안정감이 더해졌다.
3. 의미있는 코드리뷰를 진행하게 되었다.

>개발환경도 중요하지만 회사의 비즈니스측면을 고려한 면  
>그리고 문제의식을 뭔저 자각하고 큰 실행에 옮긴 점이 대단하게 느껴졌다.  
>마지막으로 TypeScript로 이전하면서 큰 시행착오는 없었다는 부분에 감탄하게되었다.

---
#### 프론트엔드 모던 프레임워크 낱낱히 파헤치기 by 한성민
![](http://3.bp.blogspot.com/-Uzrvl78FYtA/WhGJySwywGI/AAAAAAAABr8/5mEOCi3Ecc8RP95cvQL8IJ4XZtVJz8fWQCK4BGAYYCw/s1600/gdg-2017-3.png)
- **JavaScript 라이브러리의 역사**

과거에는 객체 사용이 힘들었지만 commonJS 등장 이후에 모듈 개념이 등장하기 시작  
그 후 AMD의 철학을 따른 RequireJS가 등장하며 끝으로 nodeJS까지 등장하였다.  
완전히 모듈 관점의 개발이 진행되기 시작하게 된 계기가 되었다.

- **2017 Front-end의 상황**

이제는 배워야할 게 너무나 많다. 절대로 다 배울수는 없다

중요하다고 생각하는 키워드
1. 동적렌더링
2. 모듈링 & 번들링
3. 타이핑
4. 테스트 자동화

- ** 그 와중에 나타난 프레임워크 **  
모든 걸 쉽게 만들어 주는 프레임워크!  

Angular  
내장된 기능은 좋으나 러닝커브가 크다.

React  
생태계가 넓지만 의존성과 버전에 민감하다. 라이브러리이기때문에 자체적인 기능은 거의 없다.

Vue  
러닝커브와 가벼움에 유리한 점이 많다. 규모가 커지면 재활용성이 떨어진다

- **코드비교**
Angular  
Binding이 강력하다

React  
JSX에 로직이 함께한다. 상태관리가 굉장히 중요하다

Vue  
Angular + React 느낌도 있지만 AngularJS를 떠올리게 된다

- **트렌딩**
1. 검색 순위 & 스택오버플로우  
Angular > React > Vue  
(AngularJS + Angular의 경우 가장 큰 사용자를 보유한다  )

2. Github Star
  React > Vue > Angular

- **진입장벽**  
(쉬움) Vue > React > Angular (어려움)

>Angular => 사전에 프레임워크 경험 권장  
>React => 상태관리와 생명주기가 상대적으로 어려움  
>AngularJS 사용 경험자는 Vue 학습에 유리하다

- **속도**  
Vue가 가장 빠른 벤치마크를 보인다  
하지만 Angular에 AOT를 적용한다면 엄청난 퍼포먼스를 보인다

- **컴포넌트**  

Angular  
대규모 프로젝트에 권장  

React  
SSR의 경우에 유리  

Vue  
소규모 프로젝트에 권장

- **템플릿**  

Angular  
체계적이지만 다양한 패턴이 존재하여 어려울때가 많다

React  
템플릿 미지원

Vue  
간단하고 명시적이다 (AngularJS와 비슷)

>개인적인 의견이 많이 들어가긴 한 발표라고 느껴지긴 했다.  
>이제 지겨운 주제라서 보기 싫다는 사람도 많이 봤지만 결국 강당을 다 메울정도로 많은 참가자가 있었다.  
>발표자분께서는 정말 꼼꼼하게 분석해서 좋은 강연을 해주었지만 Vue에 대해서는 약간 부족한 정보가 보였고  
>너무 Vue만 찬밥아니냐는 참가자도 있었던 좋지만 아쉬운 발표였다


- 발표자료
: <https://www.slideshare.net/KennethCeyer/gdg-devfest-2017-seoul-82177288>
---

#### 해외 취업이야기 by 정승욱
> Grab에서 근무하고 계신 정승욱님의 해외취업 경험기  
> 한국 개발자들의 많은 지원을 기다린다고 한다.

- **해외취업을 준비하게된 계기**  
오픈소스 활동으로 Linkedin을 통해 다양한 유수의 헤드헌터에 제의가 많이 들어옴

- **해외취업 준비과정**  
다니고 있던 회사를 퇴직 후 반년을 영어공부에 매진하였다.  
거의 하루에 8시간은 영어 공부를 하며 지냈다고 한다.

- **지원**  
지원은 직접 Apply하였으며 실제로 접촉했던 회사는 AWS, Grab, Shopify

- **채용프로세스**  
운이 좋아 1개월이 조금 넘는 기간만에 취업에 성공한 케이스하고한다.  
하지만 그 과정은 굉장히 타이트했음을 강조하였다.  
레퍼런스를 요구하는 등 영어이기때문에 하고 싶은 말도 다 표현할 수 없는 답답한 점까지 있기 때문이다.

1. 영어면접  
열심히 공부하고 준비했지만 굉장한 현실은 상대방의 말이 잘 들리지 않아 큰 고생을 했다고한다.

2. 테스트  
*구글 독스를 통해 실시간으로 테스트*를 보게 되었다고한다.  
IDE의 지원도 없기 때문에 오히려 한국에서의 테스트보다 더욱 더 힘들 수 밖에 없었으며  
*컴퓨터 공학 기초인 자료구조와 알고리즘*도 당연하게 확인을 하고는 했다고 한다.

- **해외 개발자 생활**  
이미 다양한 인종의 개발자들과 생활하는 환경이였다  
특히 인상적인 부분은 같은 언어를 구사함에도 불구하고 너무나 다른 억양으로  
애로상황이 많기때문에 업무가 지연되기도 한다곻한다

- **Q&A**
1. 영어는 어느 정도를 해야 가능한지  
당연히 의사소통이 되야한다. 특히 IELTS 점수가 7점을 필히 넘어야만 지원이 가능하다고 본다.  
(해외에서 1년 이상 거주한 경험과 사회 경력등까지 반영되는 점수라고 한다.)

2. 개발 경력은 어느정도가 되야 해외취업에 적당한지  
보통 만 3년이상은 되야 지원에 적당하다.  
특히 인도와 아시아 개발자는 경력에 대한 뻥튀기가 심하기 때문에 그런 인식도 고려해야한다

3. 협업을 하며 언어가 잘 통하지 않는 경우 어떻게 대처하였는 지  
어쩔 수 없다. 이해할 때까지 계속 되 물어야 한다.  
결국에는 적어서 의사소통을 하는 경우가 있다.

---
#### 특별한 취업이야기 by 김태호
>구글 한국 지사 근무중인 김태호님의 이야기를 들어보았다.

- **구글에 지원**  
재직 중에 직접 지원하게 되었으며 12월에 지원하고 3월에 최종합격하게되었다

- **면접**  
오히려 외국인 면접관이 더욱 편했다.  
특히 한국인 면접관은 압박 질문을 시도하여 어려울 때가 많았다.  
기술지원 직무였지만 똑같이 구글 독스를 통해 테스트를 하는 경우가 있다고 한다.  
한때 유행했던 구글의 신기한 면접방법 (ex. 전 세계의 셔틀버스는? 버스에 들어가는 농구공의 개수는?)  
이제 그런 질문은 안한다고 하니 걱정하지 말라고 한다.

- **영어공부**  
1. 오버워치 영어로 하기(농담이 아니라 진심임을 강조)
2. 컨퍼런스 동영상들 많이 보기
등등 다양한 시도를 했다

- **다양한 문화의 사람들과의 협업**  
굉장히 친하게 지내고 있기때문에 허물없이 잘 지내고 있다.  
(의사소통이 통하지 않을때 What?!이라고 할 수 있는 정도)
---

#### 리액트와 장고로 만드는 Progressive Web App: 빠르고 단단한 웹사이트 제작하기 by 진유림
![](http://4.bp.blogspot.com/-kysSQDPL5mM/WhGI70AxsuI/AAAAAAAABrs/ZsqSMaKI--8ItnM4IqOfsHpf3kocX_qqACK4BGAYYCw/s1600/gdg-2017-1.png)
- **PWA 제작 계기**
1. 기존에 운영하던 재고관리 시스템(Boxture)을 앱으로 보게 해달라는 요청을 받음
2. 다양한 플랫폼 중 변화에 유동적으로 대처할 수 있는 PWA 고려
3. IOS와 Safari가 미지원인 점이 아쉽지만 강력한 Service Worker에 감탄하여 적용하게됨  
(Apple측에서도 지원을 준비하고 있으니 기다려보자)

- **PWA 개발에 좋았던 점**
1. 기존에 사용하던 CRA(Create React App)을 사용하여 바로 적용할 수 있었다.
2. Service Worker에서 도와주는 부분이 굉장히 많았다.
3. 쉽게 쉽게 적용할 수 있는 부분이 많았다.
4. 완벽하지는 않지만 네이티브의 푸쉬도 가능하다.

- **PWA 시행착오..**
1. 쉽게 쉽게 할 수 있지만 만만치 않았다. 특히 캐시관련 이슈가 골칫거리였다.
2. 네이티브 기능의 모든 부분을 대처할수는 없다.
3. 꼭 필요할때만 적용하자.. 꼭 다양한 관점으로 고려할 것.
4. Boxture를 빡쳐라고...

>React와 django에 대한 얘기는 거의 없었던 부분이 아쉽긴하지만 굉장히 인상적인 부분이였다.  
>사내시스템이 아닌 실제 소비자에게 넘어가는 프로젝트라면 아직 어렵겠지만 개인 프로젝트를 하며  
>익혀보는 것도 나중을 위해 좋아보인다. PWA의 장점을 확실하게 느낄 수 있는 발표였다.

---
#### 사은품
![](http://1.bp.blogspot.com/-mC7QgeSWDm8/WhGLz8ZqNxI/AAAAAAAABsk/ic386Sx29UQjfxkG1yHpsdMSFuEKLuNvwCK4BGAYYCw/s1600/20171119_144030.jpg)
역시나 엄청난 인파

![](http://3.bp.blogspot.com/-lVHjBOmOaOc/WhGLzb2iquI/AAAAAAAABsc/m8Jb79bAzzIpngR8V-33HVlwflv3FBOYACK4BGAYYCw/s1600/20171119_154250)
끊임없이 고생하신...

![](
http://4.bp.blogspot.com/-mjANMrwPkh4/WhGL29wF6LI/AAAAAAAABss/2r7kqUqbm_QACcW-Wl4LSZY3UFLfXMbVwCK4BGAYYCw/s1600/20171119_154724.jpg)
마우스 & 티셔츠