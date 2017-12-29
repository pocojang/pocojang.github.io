title: 에디터 or IDE 터미널 명령어로 실행하기
date: 2017-12-24
tags: [터미널 에디터 실행, run terminal, intellij, vscode]
categories:
- [programming, tip]
banner: http://3.bp.blogspot.com/-0jcOHijYHms/WkY1FitIBkI/AAAAAAAADCo/gUAoMn45E0UkyGTD6Zjq4eBkVVRiSu5RwCK4BGAYYCw/s1600/code-1839406_1280.jpg

---

간단한 설정 한번이면 터미널을 통해 에디터를 실행할 수 있습니다.

<!-- more -->

---

저장소를 새로 만든다던지 git clone을 한다던지 현재 터미널에 있으면서  
`원하는 경로로 에디터를 실행한다는 것이 
귀찮을 때`가 많습니다. :weary::weary::weary:

이런 경우에 정말 너무도 간단하게 명령어 `단 몇 글자`면 해당 경로에서
IDE를 즉시 실행할 수가 있습니다!!

(단. MacOS 환경에서의 팁입니다.)

## Visual Studio Code 명령어로 실행하기
![](http://2.bp.blogspot.com/-5c5ynj6S73k/WkY6xRdcAlI/AAAAAAAADEI/1RmUN-m79rIyaq86dGBPQsOXi2BKD6fXACK4BGAYYCw/s1600/code-1.png)  

![](http://3.bp.blogspot.com/-j9wvE1DG7mQ/WkY6xb9BJrI/AAAAAAAADD0/SzvrqQgSPKUmns6bLjzFyEBATlF-IUL6ACK4BGAYYCw/s1600/code-2.png)  

1. CMD + SHIFT + P 입력 후 위와 같은 검색을 통해 `셸 명령: PATH에 'code' 명령 설치`를 합니다.

![](http://2.bp.blogspot.com/-ZFVH7_wfnX0/WkY6xecUPpI/AAAAAAAADEA/FMfv5yvsru0-RraDIqeCj9uhHF-s45MVwCK4BGAYYCw/s1600/code-3.png)  
2. 실행을 원하는 경로에서 명령어를 통해 실행합니다
```bash
code .    // 주의: code와 . 사이에 공백이 필요합니다.
```

- 실행화면
![](http://1.bp.blogspot.com/-MB8awVyepQU/WkY5D7lx2dI/AAAAAAAADDU/4-iTvaxOGKkjGgrTJ6XY58CJjZfZKxDsACK4BGAYYCw/s1600/code-run.gif)  

---

## IntelliJ 명령어로 실행하기

![](http://4.bp.blogspot.com/-rlIG2xoH5_M/WkY6xb7CWwI/AAAAAAAADEE/lTUYi1nl3tUVOdq6u00I2xzIjhWw3EwgwCK4BGAYYCw/s1600/idea-1.png)  
- IntelliJ 메뉴에서 Tools > `Create Command-line Launcher...` 를 실행합니다

![](http://3.bp.blogspot.com/-F7ZVUtqRVvA/WkY6xaX5J1I/AAAAAAAADD8/hlh7KxmtqpsS4NqkP6EUXeF6ovQHpLA-wCK4BGAYYCw/s1600/idea-2.png)  
- 기본 경로를 제공합니다. 특별한 이유가 없는 이상 여기서 `OK`만 하면 설정은 끝입니다.

![](http://1.bp.blogspot.com/-5k0xxxpCjWs/WkY6xcPX1YI/AAAAAAAADD4/k5GuNoP5IsU0QT4HKSfwhq9DPxu5Ko_9ACK4BGAYYCw/s1600/idea-3.png)  
- 실행을 원하는 경로에서 명령어를 통해 실행합니다.

```bash
idea .    // 주의: idea와 . 사이에 공백이 필요합니다.
```

- 실행화면 (노트북이 느려서...구동에 시간이 소요됩니다)
![](http://4.bp.blogspot.com/-8QalaSvfKWU/WkY4kfESaUI/AAAAAAAADDI/6B1uKe5kM84bWHSf2kTLcZhcnbk_ANyOQCK4BGAYYCw/s1600/idea-run.gif)


---

참고 :  

[Running VS Code on Mac](https://code.visualstudio.com/docs/setup/mac)  
[Running VS Code on Windows](https://code.visualstudio.com/docs/setup/windows)