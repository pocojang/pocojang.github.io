title: VS 코드 콘솔에서 TypeScript 실행하기
date: 2018-04-29
tags: [visual studio code, intellij, CodePen, JS Bin, JSFiddle, CodeSandbox, typescript, run console]
categories:
- [programming, tip]
banner: 

---

타입스크립트 개발 환경없이 작성하기

<!-- more -->

---

타입스크립트를 작성하다 보면 간단히 콘솔로 코드를 찍어보고 싶을 때도 있고 컴파일 없이 작업하고 싶은데 그렇지 못해 답답할 때가 있습니다

자바스크립트는 개발자 도구에서 간편하게 작성해볼 수 있으니 접근성이 이 엄청나기 때문에 비교가 될 수 있죠.

이러한 부분 때문에 포기하시는 분들을 위한 자료를 준비했습니다.

# Front-end Playground 활용하기

기본 설정으로 타입스크립트를 제공하는 웹서비스를 이용할 수 있습니다.

## [CodePen](https://codepen.io)
![](https://1.bp.blogspot.com/-h-85nGQvZ4E/WuVyg7Te0PI/AAAAAAAADRo/wVtqatYQ00Y3aUgvvpS3MpWgfw06xE9DwCK4BGAYYCw/s640/CodePen.png)

설정 > JavaScript Preprocessor > TypeScript

![](http://4.bp.blogspot.com/-6RWLp4ZxyvQ/WuVyuPo4LoI/AAAAAAAADSI/gYStwhmccxcRehuQL8ox1fKG5SinINRAQCK4BGAYYCw/s640/CodePen%2B%25282%2529.png)

너무나 유명한 서비스인만큼 이미 되어있는 템플릿으로 간단히 사용 가능합니다.

---

## [JS Bin](https://jsbin.com)

![](http://2.bp.blogspot.com/-9qhJDMR09rY/WuVzdMXeuwI/AAAAAAAADSc/VIyr2GDe8GUdf3Z3-wybBSDM7344mTTkgCK4BGAYYCw/s640/JS%2BBin.png)

JavaScript 탭 선택 > JavaScrip 클릭 > TypeScript 선택

![](http://4.bp.blogspot.com/-wX3DK-7fCGY/WuVzdDzEJKI/AAAAAAAADSg/Qga1joLrt38VoiLlfFkoTU3oNBBLlOjCACK4BGAYYCw/s640/JS%2BBin%2B%25282%2529.png)

마찬가지로 몇번의 클릭만으로 사용가능합니다.

---

## [JSFiddle](https://jsfiddle.net)

![](http://2.bp.blogspot.com/-2q3O1zE3VKA/WuV0APcK6RI/AAAAAAAADS4/N3oNrAhnS_glQmUMMXFm7bfjJ-wI4qaKgCK4BGAYYCw/s640/JSFiddle.png)

JavaScript 클릭 > TypeScript 선택

![](http://1.bp.blogspot.com/--MdTnteqe3I/WuV0AMoR_OI/AAAAAAAADS0/xDARUbc07cIdBZNnh1p2k7gcR8UGpNCEACK4BGAYYCw/s640/JSFiddle%2B%25282%2529.png)

마찬가지로 몇번의 클릭만으로 사용가능합니다.

---

## [TypeScript Playground](https://www.typescriptlang.org/play/index.html)

![](http://4.bp.blogspot.com/-zbbfPCyvN_c/WuV8AQkjoBI/AAAAAAAADUM/Mm_zuctkxNcn7OGXAOFjdJNW7lqKVRhOQCK4BGAYYCw/s640/Playground.png)

`별도의 설정과 도구없이 JS코드로 바로 컴파일 되어 비교`할 수 있기 때문에 학습에는 가장 좋다고 생각이 듭니다.

타입스크립트의 코드가 자바스크립트의 어떤 코드로 변환되는지 항상 볼 수 있기에 흥미로우며 **`Run`** 버튼을 활용하여 `브라우저에서 실행`해볼 수 있습니다.

>VS 코드가 내장되어 VS 코드에 익숙한 사용자분들은 IntelliSense와 단축키를 그대로 사용할 수 있습니다.

---

## [CodeSandbox](https://codesandbox.io)

![](http://2.bp.blogspot.com/-H-unRpsqD4g/WuV0XMi2w6I/AAAAAAAADTQ/TcJ7mVbcBRoOKIBh3RlbGc-wAUiEMc7LACK4BGAYYCw/s640/CodeSandbox.png)

Create Sandbox 클릭 > New Sandbox > `Vanilla` 선택 

![](http://1.bp.blogspot.com/-0M990pdbRsI/WuV0XE4xepI/AAAAAAAADTM/QaqtaMvPwPEuJ2wAZP4d8xy7AnhijsUXgCK4BGAYYCw/s640/CodeSandbox%2B%25282%2529.png)

기본적인 Parcel 번들러 프로젝트가 생성됩니다 > `Add Dependency` 클릭

![](http://1.bp.blogspot.com/-wtpHRxG0az4/WuV6immz97I/AAAAAAAADTs/qaT0MrA-tRUbFfYGe5e8GKfQIYRuj4jqACK4BGAYYCw/s640/CodeSandbox%2B%25283%2529.png)

TypeScript 검색 > 검색된 TypeScript 설치

![](http://2.bp.blogspot.com/-GAOFp_cyru0/WuV6itDsyBI/AAAAAAAADTo/Ed1DIkIe6MMF3LA51nRjp_3XkGR8jGhdACK4BGAYYCw/s640/CodeSandbox%2B%25284%2529.png)

index`.js`를 `.ts`로 변경 **(index.html내에 삽입된 스크립트도 마찬가지)**

![](http://4.bp.blogspot.com/-0ahE1epEngg/WuV7YukqtWI/AAAAAAAADUA/ml7Uxff98wAZX3f41L5v7iAMZSYOoIBvQCK4BGAYYCw/s640/CodeSandbox%2B%25286%2529.png)

설정이 완료된 후 바로 TS 코드를 작성할 수 있습니다

![](http://1.bp.blogspot.com/-FC8Vy9GHgSE/WuV7YiMjZQI/AAAAAAAADT8/QgHdxjqY7Y4E3RgAyV8JN4A-TEp_-LUxQCK4BGAYYCw/s640/CodeSandbox%2B%25285%2529.png)

VS code의 `IntelliSense`

간단한 플레이그라운드 그 이상으로 다양한 기능을 지원합니다.

또한 위에 이미 설명한 서비스들 보다 간편하지는 못하고 `무겁다`는 단점이 있지만

`Github 연동, 로컬 파일 연동, Live(유료), npm 가능, 번들러 및 실제 파일 관리 가능` 엄청난 확장성이 존재합니다.

한마디로 모듈화 및 파일을 나누고 싶을때 온라인에서 간단히 사용할 수 있습니다
(이럴 거면 그냥 로컬이 낫다고 판단될 수도...)



>VS 코드가 내장되어 VS 코드에 익숙한 사용자분들은 IntelliSense와 단축키를 그대로 사용할 수 있습니다.


# 에디터 활용하기

## VS code

이번에는 에디터로 넘어와 VS code에서 간단한 콘솔 출력을 방법을 알아보겠습니다.

![](http://4.bp.blogspot.com/-kxQO1zfPJ5A/WuV8M_HJLhI/AAAAAAAADUc/UIdtdR5kTIEN-vnpaAYcEC9jgi1m6Z2YgCK4BGAYYCw/s640/VS%2Bcode.png)

[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) 확장 플러그인 설치

![](http://2.bp.blogspot.com/-czYAV06UjoA/WuV8M4ILU3I/AAAAAAAADUY/zkAJXEUFlsEnVmsCpEWsiZ3WOOBG2T_BwCK4BGAYYCw/s640/VS%2Bcode%2B%25282%2529.png)

[ts-node](https://github.com/TypeStrong/ts-node) 설치
```bash
$ npm i -g ts-node // 전역 설치를 하시면 됩니다 (-g 또는 -global)
```

![](http://4.bp.blogspot.com/-JFWufuvwWto/WuV9murmEQI/AAAAAAAADU0/eNfmX-6nNBE_4-NOlEKAzLHfS3pOc_zrwCK4BGAYYCw/s640/VS%2Bcode%2B%25283%2529.png)

마우스 우클릭 > `Run Code` 클릭 또는 단축키 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>n</kbd>  
(기본 단축키가 다른 플러그인과 겹치는 경우가 많습니다)

![](http://2.bp.blogspot.com/-zrxaIx0VdQc/WuV9mkoc96I/AAAAAAAADU4/KUI-NDayfp8Xzd8u_90kIOdATuQvbnWHACK4BGAYYCw/s640/VS%2Bcode%2B%25284%2529.png)

위와 같은 출력 결과를 간단하게 볼 수 있습니다.

> **주의사항**  
간혹 설정에 문제가 있는 경우 아래와 같은 옵션을 확인해주시면 됩니다
```json
"code-runner.executorMap" : {
  "typescript": "ts-node"
}
```

>모던 자바스크립트를 접하며 혼란스러운 것들 중 하나는 환경설정일 것입니다.   
물론 알고 넘어가야 하지만 입문자의 경우 이런 다양한 방법을 통해 학습하시는 것도  
초반에 러닝 커브를 이겨내는 데 큰 도움이 될 수 있을 것 입니다.
