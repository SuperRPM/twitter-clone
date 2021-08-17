# 트위터 클론 코딩

트위터 클론 코딩을 진행합니다.
Node.js의 사용법과 백엔드 개발의 전반에 대해 배웁니다.


## 구동방법
```
/server/
npm start
/client-template
npm start

이 Application은 
http://localhost:8080/
에서 작동합니다.
```


- 목표:
 
    1. Node.js로 서버를 만듭니다.
    2. 트위터에 필요한 기능을 REST API로 구현합니다.
    3. 2에서 만든 기능을 MVC 디자인으로 리팩토링합니다.
    4. validation으로 유효성 검사 middleware를 추가합니다.
    5. authentication: bcrypt와 jwt로 인증 단계를 추가합니다.
    6. 4~5단계를 바탕으로 유저의 가입과 로그인 기능을 추가합니다.(진행중)
    7. 데이터를 메모리가 아닌 SQL, nonSQL방식으로 관리합니다.
    8. 보안을 위해 CSRF와 XSS 어택과 대응방법을 추가합니다.
    9. 배포

- 기능:

    기능의 logic부분은 server/controller에서 구현합니다.

    - Create: 새로운 트윗을 입력받아 data에 배열의 element로 추가하고 json형태로 client에 response합니다.

    - Read: data에 존재하는 트윗을 불러와 json형태로 response합니다.
     이 때, 특정 트윗 혹은 특정한 유저정보로 filtering해서 가져올 수 있습니다.

    - Update: update할 내용을 유저로부터 받아와 해당트윗에 덮어쓰고 이를 response합니다. 덮어쓴 트윗은 data에 반영됩니다.

    - Delete: 삭제할 트윗의 id를 받아와 해당하는 데이터를 data에서 splice 해줍니다.


Backend는 Node.js를 사용합니다.

framework는 express를 사용합니다.

Frontend는 React를 사용합니다. 

단, 백엔드 전반을 이해하는 것을 목표로 하기 때문에 직접 작성하기보다 제공되는 React 템플릿을 이용합니다.
