export const MapContainer = (level) => {
    const { kakao } = window;
  
    // 지도를 표시할 div
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.417402, 126.682299),
      level: 4
    };
  
    // 지도 생성해서 반환
    return new kakao.maps.Map(container, options);
  };