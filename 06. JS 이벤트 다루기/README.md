# JS 이벤트 다루기  

## 1. script 실행하기  
- 버튼 클릭으로 알아보는 실행 방식  
- load : 모든 요소가 전부 다운로드 후 실행됨, 지역변수    
```js
window.addEventListener('load', function() {

});
```  

- DOMContentLoaded : 해당 돔 구조의 로드가 끝나면 바로 실행됨, 지역변수  
```js
window.addEventListener('DOMContentLoaded', function() {

});
```  

- 즉시 실행 함수 : 전역변수를 지역변수화 하기 
- 클릭 이벤트   
```js
(function() {
  const ilbuni = document.querySelector('.ilbuni.c');

  function clickInbuniHandler() {
    ilbuni.classList.toggle('special');
  }

  ilbuni.addEventListener('click', clickInbuniHandler);
})();

```  

