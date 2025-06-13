// 문서가 준비되면 함수를 실행
$(document).ready(function(){
    // 1. 공지사항의 첫 번째 li를 클릭하면
    $('.notice li:first-of-type').click(function(){
        // 2. 팝업 창이 보인다.
        $('.modal').show();
    });
    // 3. 팝업 창의 닫기 버튼을 클릭하면
    $('.modal a').click(function(){
        // 4. 팝업창이 숨겨진다.
        $('.modal').hide();
    });
});