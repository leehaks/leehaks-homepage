
$(document).ready(function () {

    $('.bxslider').bxSlider({
        //work method
        mode: 'horizontal', // 'horizontal' : 좌,우 'vertical' : 상, 하 'fade' : fade in, out
        speed: 700, // m/s ex > 1000 = 1s
        easing: 'ease-out', // 동작 가속도 css와 동일
        sliderMargin: 10, // img 와 img 사이 간격
        startSlide: 0, // 시작시 로드될 이미지 (0부터 시작)
        preloadImages: 'visible', // 'visible'은 보여질때 이미지를 로드,
        //'all'로 설정 하게 되면 모든 이미지가 로드되어야만 slide가 작동
        randomStart: false, // 시작시 랜덤으로 이미지 로드 여부 (boolean)
        adaptiveHeight: true,
        //각 이미지의 높이에 따라 슬라이더 높이의 유동적 조절 여부
        adaptiveHeightSpeed: 500, //adaptiveHeight 동작속도,
        video: true,// slider에 video 사용여부, 사용할 시에
        //plugins/jquery.fitvids.js 파일 include 필요
        captions: false, // img 태그에 title속성값을 출력여부, 단 css .bx-wrapper .bx-caption 수정필요

        //responsive method
        responsive: true, // 반응형 지원 여부
        /*
            responsive 가 false일 경우, slider에 고정폭과 고정높이가 필요하다.
            위치는 jquery.bxslider.css 17번라인 .bx-wrapper class에 width 고정
            height는 이미지 높이에 따라 자동 조정.

            pc 만 지원하는 반응형일 경우
            같은 class인 .bx-wrapper 에게 min-width를 1000px을 지정 하면 된다.
        */
        touchEnabled: true,// 터치스와이프 기능 사용여부
        swipeThreshold: 50,
        // 터치하여 스와이프 할때 변환 효과에 소모되는 시간 설정
        onoToOneTouch: true,
        // fade효과가 아닌 슬라이드는 손가락의 접지상태에 따라 슬라이드를 움직일수있다.
        preventDefaultSwipeX: true,
        //onoToOneTouch 에서 true일 경우, 손가락을따라 x축으로 움직일지에 대한 여부
        preventDefaultSwipeY: false,
        //onoToOneTouch 에서 true일 경우, 손가락을따라 y축으로 움직일지에 대한 여부

        //control method
        controls: true, //좌, 우 컨트롤 버튼 출력  여부
        /*
        nextSelector: '.next', //기본 next 를 대체할 객체
        prevSelector: '.prev', //기본 prev 를 대체할 객체
        nextText: '다음', // 다음 버튼 에 text 삽입
        prevText: '이전', // 이전 버튼 에 text 삽입

            customize controler
            1. 이미지를 수정하는 방법
            images / controls.png 파일 자체를 수정 하여 디자인을 바꿀수있다.
            만약 크기가 커지거나 작아진다면, 그에 맞는 좌표값을 크롬 개발자
            도구에서 찾아내어 수정 해줘야 한다.
            (기존 객체 css 위치 jquery.bxslider.css 파일 내 125번 라인
            .bx-wrapper .bx-controls-direction a 부분을 수정 하면 됨)

            2. 객체삽입방법
            nextSelector와 prevSelector 함수를 삽입하고, 만들어 낼 객체의
            클래스명을 지목한후, body 내에 해당 클래스이름을 가진 객체를
            만들어준다.
            단, 여기서 주의할 점은 객체를 만들고 스타일을 지정할 대상은
            객체 안의 a 태그를 지목해야 한다.
            a 태그가 객체 안에 자동으로 생성 되기 때문에..
        */
        auto: true, // 자동 재생 활성화.
        autoControls: false, //자동재생 제어버튼 활성화 단, auto모드 활성화필요
        /*
            autoControlsSelector: '.newAutoControl', // 기본 autoControl을 대체
            startText: '시작', // 재생 버튼에 text 삽입
            stopText: '중지', // 중지 버튼에 text 삽입
            customizing 방법은 controler 와 동일
        */
        autoControlsCombine: false, // 재생시 중지버튼 활성화(toggle)
        pause: 3000, // 자동 재생 시 각 슬라이드 별 노출 시간
        autoStart: true, // 페이지 로드가 되면, 슬라이드의 자동시작 여부
        autoDirection: 'next', // 자동 재생시에 정순, 역순(prev) 방식 설정
        autoHover: true, // 슬라이드 오버시 재생 중단 여부 (false : 오버무시)
        autoDelay: 0, // 자동 재생 전 대기 시간 설정.
        hideControlOnEnd: true,
        /*
            첫번째 슬라이드 일 경우, 이전 버튼 삭제,
            마지막 슬라이드 일 경우, 다음 버튼 삭제
            단, infiniteLoop: false 일 경우만 사용 가능.
        */
        infiniteLoop: true,
        //마지막에 도달 했을시, 첫페이지로 갈 것인가 멈출것인가

        // pager method
        pager: true, //pager 인디케이터 출력여부
        pagerType: 'full', // pager 타입 설정. full은 default, short 은 1/4 이런 형식의  출력
        pagerShortSeparator: ' | ', //short 타입 일 경우 카운트 사이 문자 설정
        pagerSelector:'.newPager', //기본 pager 를 대체
        pagerCustom: '.thumbPager'  //pager를 커스터마이징 하여 적용


        /*
        //Carousel method
        // minSlides: , Carousel은 여러개의 객체를 보여주게 하는데,
        minSlides는 화면 크기가 줄어도 최저 몇개를 보여줄 것인가 의 값.
        // maxSlides: , maxSlides는 최대 몇개의 객체를 보여줄 것인가 의 값.

        //etc...trash
        //ticker:true : 증권표시계 (사용할일 없음)
        //slideSelector : 기본 직계 자손을 슬라이드 하지만, 내부 특정 객체를
        선택하고자 할때 사용.
        */
    });

});
    