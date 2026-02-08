// Kakao Maps initialization script
document.addEventListener('DOMContentLoaded', function() {
    // Kakao Maps SDK will be loaded by the script tag in HTML.
    // Ensure that 'kakao.maps' is available before using it.
    if (typeof kakao !== 'undefined' && kakao.maps) {
        console.log("Kakao Maps API loaded. Initializing map...");
        
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = { 
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        
        // 여기에 마커 추가 등의 지도 관련 스크립트를 작성합니다.
        // 예: 마커 추가
        var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    } else {
        console.error("Kakao Maps API not loaded or 'kakao.maps' is undefined.");
    }
});
console.log("지도 엔진 준비 완료");