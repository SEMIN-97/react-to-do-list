# TO DO LIST
![to_do_list.jpg](public%2Fto_do_list.jpg)

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"/><img src="https://img.shields.io/badge/18.2.0-515151?style=flat-square">
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=black"/><img src="https://img.shields.io/badge/6.1.6-515151?style=flat-square">
<img src="https://img.shields.io/badge/MSW-FF6A33?style=flat-square&logo=mockserviceworker&logoColor=black"/><img src="https://img.shields.io/badge/2.0.14-515151?style=flat-square">

<br />

배포 URL: https://semin-97.github.io/react-to-do-list/

기록 블로그: https://mini-space.tistory.com/category/PROJECT/TO%20DO%20LIST

<br /><br />

## 프로젝트 개요
리액트를 학습한 뒤, 코드 학습의 기본이라고 생각하는 투 두 리스트를 만듦으로써 리액트를 직접 경험하고 기본기를 다지고자 했습니다.


디자인부터 기능 구현까지, 부족한 실력이지만 최선을 다해 제작해 보았습니다.

<br /><br />

## 시작하기
프로젝트 디렉토리 내에서 아래 커맨드를 입력하면, development mode로 확인하실 수 있습니다.
```
npm ci
npm start
```

<br /><br />

## 기능 소개

아이템 추가|아이템 수정
----|----
![add_item.gif](public%2Fadd_item.gif)|![update_item.gif](public%2Fupdate_item.gif)

아이템 삭제|테마 변경
----|----
![delete_item.gif](public%2Fdelete_item.gif)|![change_theme.gif](public%2Fchange_theme.gif)

<br /><br />

## 회고
> 구조

여러 파일을 어떻게 폴더링 해야 할지 고민하는 시간이 생각보다 길었다.
<br />
Best practice를 검색하거나 다른 프로젝트를 참고하면서 작성해 보았다.

<br />

> 리액트 기술 확용

리액트를 처음 다뤄보는 것이라 리액트 본연의 기술만을 활용하자고 생각했다.
<br />
하지만 편의성을 위한 axios, CSS-in-JS를 위한 StyledComponent와 같은 라이브러리를 사용한 것이 원래 생각한 본질과 멀어진 것 같아 아쉽다.
<br />
물론, CSS-in-JS는 꼭 경험해보고 싶었던 기술이라 사용하며 큰 재미를 느꼈다.

<br />

> 단방향 데이터 바인딩
> 
리액트를 사용하면서 가장 익숙하지 않았던 개념이다. 호기롭게 코드를 작성하다 단방향 데이터 바인딩 때문에 로직을 다시 작성하기도 했다.
<br /><br />
예를 들어, 아이템이 추가/삭제되었을 때 리스트를 다시 불러오고 싶었는데, 하위 컴포넌트에서 상위로 시그널을 보낼 수 없어서 ToDoLayout.tsx에 HTTP 통신 로직을 넣고, 이벤트를 하위 컴포넌트로 전달하는 방향으로 진행했다.
<br /><br />
이 접근 방식이 리액트의 단방향 데이터 흐름을 따르는 올바른 방법인지에 대해 고민이 많았다. 상위 컴포넌트에서 상태를 관리하고, 해당 상태를 하위 컴포넌트에 props로 전달하며, 하위 컴포넌트에서 발생한 이벤트를 상위 컴포넌트로 전달하는 방식이 최선의 방법일까? 익숙지 않은 흐름이라 잘하고 있는지 잘 모르겠다.
<br /><br />
더 나은 방법이 있는지 지속적으로 학습하고 개선해 나가야 할 부분이라고 느꼈다.

<br />

> 접근성

auto focus와 tab index를 고려해서 작성했다.
<br />
접근성을 잘 지켰다고 생각했는데, 돌아보니 시각적으로 보이는 부분만 신경 쓴 것 같아 아쉬움이 남는다.
<br />
aria-tag를 활용하거나 다른 사용자를 고려하는 방향으로 더 보강해야겠다.

<br /><br />

## 앞으로의 과제
* axios를 사용하지 않기
* 접근성 보강하기 (aria-tag 등)
* 테스트 코드 작성하기
