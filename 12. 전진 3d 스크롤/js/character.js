function Character(info) {
  this.mainElem = document.createElement('div');
  this.mainElem.classList.add('character');
  this.mainElem.innerHTML = ''
    + '<div class="character-face-con character-head">'
      + '<div class="character-face character-head-face face-front"></div>'
      + '<div class="character-face character-head-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-torso">'
      + '<div class="character-face character-torso-face face-front"></div>'
      + '<div class="character-face character-torso-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-arm character-arm-right">'
      + '<div class="character-face character-arm-face face-front"></div>'
      + '<div class="character-face character-arm-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-arm character-arm-left">'
      + '<div class="character-face character-arm-face face-front"></div>'
      + '<div class="character-face character-arm-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-leg character-leg-right">'
      + '<div class="character-face character-leg-face face-front"></div>'
      + '<div class="character-face character-arm-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-leg character-leg-left">'
      + '<div class="character-face character-leg-face face-front"></div>'
      + '<div class="character-face character-arm-face face-back"></div>'
    + '</div>';

  document.querySelector('.stage').appendChild(this.mainElem);

  this.mainElem.style.left = info.xPos + '%';
  this.scrollState = false; // 스크롤 상태 체크
  this.lastScrollTop = 0; // 바로 이전 스크롤 위치
  this.xPos = info.xPos;
  this.speed = 0.3; // 스피드 값 만큼씩 이동
  this.init();
}
/* es6 : `<code>`백틱을 톡해 html 작성 가능 */
/* Character.prototype.xxxx = funtion () {} 
- 원래 존재하는 프로타입 객체에 메서드는 추가하는 형태  */

// 프로토타입 객체를 재정의 하는 형태
/* 이벤트 핸들러의 this : 이벤트 핸들러 안의 this는 이벤트를 실행한 주체
이벤트 밖에서 this를 저장하여 사용한다.
*/

Character.prototype = {
  constructor: Character,
  init: function() {
    const self = this;

    window.addEventListener('scroll', function() {
      this.clearTimeout(self.scrollState);
      
      if (!self.scrollState) {
        self.mainElem.classList.add('running');
        console.log('runnig 클래스 붙었음');
      }

      // 500ms 뒤에 실행되는데 clearTimeout으로 계속 실행을 췩소함
      // 스크롤이 멈추면 500ms 뒤에 실행
      self.scrollState = setTimeout(function() {
        self.scrollState = false;
        self.mainElem.classList.remove('running');
      }, 500);

      // console.log('lastScrollTop:' + self.lastScrollTop);
      // console.log('pageYOffset:' + pageYOffset);

      // 이전 스크롤 위치와 현재 스크롤 위치를 비교
      // window.pageYOffset === window.scrollY; // 항상 true
      if (self.lastScrollTop > this.scrollY) {
        // 이전 스크롤 위치가 크다면 : 스크롤 업 
        self.mainElem.setAttribute('data-direction', 'backward');
      } else {
        // 현재 스크롤 위치가 크다면 : 스크롤 다운
        self.mainElem.setAttribute('data-direction', 'forward');
      }
      self.lastScrollTop = scrollY;
    });

    // 키코드 값을 통해 이벤트 제공
    window.addEventListener('keydown', function(e) {
      if (e.keyCode == 37) {
        // 왼쪽
        self.mainElem.setAttribute('data-direction', 'left');
        self.mainElem.classList.add('running');
        self.xPos -= self.speed;
        self.mainElem.style.left = self.xPos + '%';

      } else if (e.keyCode == 39) {
        // 오른쪽
        self.mainElem.setAttribute('data-direction', 'right');
        self.mainElem.classList.add('running');
      }
    });

    window.addEventListener('keyup', function(e) {
      self.mainElem.classList.remove('running');
    });
  }

}