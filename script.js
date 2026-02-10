// Kakao Maps initialization script
document.addEventListener('DOMContentLoaded', function() {
    // Kakao Maps SDK will be loaded by the script tag in HTML.
    // Ensure that 'kakao.maps' is available before using it.
    if (typeof kakao !== 'undefined' && kakao.maps) {
        console.log("Kakao Maps API loaded. Initializing map...");
        
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = { 
                center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표로 변경
                level: 9 // 지도의 확대 레벨 조정
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        
        // 여기에 마커 추가 등의 지도 관련 스크립트를 작성합니다.
        // 마커를 표시할 위치와 내용을 담은 배열입니다
        var positions = [
            {
                title: '도토리 화로구이', 
                latlng: new kakao.maps.LatLng(37.796, 127.060)
            },
            {
                title: '해변의 카프카', 
                latlng: new kakao.maps.LatLng(35.153, 129.118)
            },
            {
                title: '산골 손두부', 
                latlng: new kakao.maps.LatLng(37.785, 128.916)
            }
        ];

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
            
        for (var i = 0; i < positions.length; i ++) {
            // 마커 이미지의 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35); 
            
            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
            
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마우스 오버 시 보인다
                image : markerImage // 마커 이미지 
            });
        }

    } else {
        console.error("Kakao Maps API not loaded or 'kakao.maps' is undefined.");
    }
});
console.log("지도 엔진 준비 완료");