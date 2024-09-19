const fontGenerator = (
  fontFamily,
  fontSize = "1rem",
  fontWeight = "400",
  lineHeight = "1.5",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});
export const theme = {
  colors: {
    // 버튼 관련 색상
    confirmButton: "#FF7F2A", // 확인 버튼
    cancelButton: "#EBEBEB", // 취소 버튼

    // 테마 및 배경 색상
    fall: "#ED6308", // 가을 테마 색상
    bottomDefault: "#FF9D52", // 하단 기본 색상
    boothLocation: "#FFD5D5", // 부스 위치 색상
    boothType: "#FFD9A1", // 부스 타입 색상

    // 부스 관련 색상
    dayBooth: "#FFF2AD", // 낮 부스 색상
    nightBooth: "#D4EAFF", // 밤 부스 색상

    // 폰트 색상
    dayBoothFont: "#6D5C00", // 낮 부스 폰트 색상
    nightBoothFont: "#00326D", // 밤 부스 폰트 색상
    boothLocationFont: "#FF0000", // 부스 위치 폰트 색상 (빨간색)
    boothTypeFont: "#FFD9A1", // 부스 타입 폰트 색상

    // 추가적인 색상
    subText: "#2A2A2A", // 보조 텍스트 색상 (rgba 변환)
    siteLink: "#EB8F00", // 사이트 바로가기 링크 색상
    buttonFall: "#FF6601", // 가을 버튼 색상
    default: "#000000", // 기본 검정색
    noneSelected: "#B6B6B6", // 선택되지 않은 상태 색상
    separator: "#FFBA85", // 구분선 색상
    detailText: "#5A5A5A", // 상세 텍스트 색상
    white: "#FFFFFF",
  },

  fonts: {
    default: fontGenerator(
      "AppleSDGothicNeoL00",
      "1rem",
      "400",
      "1.5",
      "normal"
    ),

    // Apple SD 산돌고딕 Neo 폰트 설정
    AppleSDGothicNeoH00: fontGenerator("AppleSDGothicNeoH00"),
    AppleSDGothicNeoB00: fontGenerator("AppleSDGothicNeoB00"),
    AppleSDGothicNeoL00: fontGenerator("AppleSDGothicNeoL00"),
    AppleSDGothicNeoUL00: fontGenerator("AppleSDGothicNeoUL00"),
    AppleSDGothicNeoT0C: fontGenerator("AppleSDGothicNeoT0C"),
  },
};
