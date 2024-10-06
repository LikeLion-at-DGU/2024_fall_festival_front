import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:12px;line-height:16px;color:#202020;font-family: "NanumSquareRoundR", -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, sans-serif}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}

#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
}

// 애플 SD 산돌고딕 Neo 폰트 설정
@font-face {
    font-family: "AppleSDGothicNeoH00";
    src: url("/fonts/AppleSDGothicNeoH.ttf") format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeoB00";
    src: url("/fonts/AppleSDGothicNeoB.ttf") format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeoL00";
    src: url("/fonts/AppleSDGothicNeoL.ttf") format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeoUL00";
    src: url("/fonts/AppleSDGothicNeoUL.ttf") format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeoT0C";
    src: url("/fonts/AppleSDGothicNeoT.ttf") format("truetype");
}
@font-face {
    font-family: "AppleSDGothicNeoR00";
    src: url("/fonts/AppleSDGothicNeoR.ttf") format("truetype");
}
@font-face {
    font-family: "AppleSDGothicNeoM00";
    src: url("/fonts/AppleSDGothicNeoM.ttf") format("truetype");
}
@font-face {
    font-family: "NanumSquareRoundOTF";
    src: url("/fonts/NanumSquareRoundOTFB.ttf") format("truetype");
}


//나눔 스퀘어 라운드 폰트 설정
@font-face {
    font-family: "NanumSquareRoundB";
    src: url("/fonts/NanumSquareRoundB.ttf") format("truetype");
}
@font-face {
    font-family: "NanumSquareRoundEB";
    src: url("/fonts/NanumSquareRoundEB.ttf") format("truetype");
}
@font-face {
    font-family: "NanumSquareRoundR";
    src: url("/fonts/NanumSquareRoundR.ttf") format("truetype");
}

@font-face {
    font-family: "NanumSquareRoundL";
    src: url("/fonts/NanumSquareRoundL.ttf") format("truetype");
}


// 초기 html 설정
html {
	/* background-color: ${({ theme }) => theme.colors.fall};	 */
	display: flex;
	justify-content: center;
	align-items: center;

	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

	@media (max-width: 360px) {
		font-size:12px;
	}
}

body {
	width: 100%;
	max-width: 540px;
	overflow-x: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.default};
	font-family: "NanumSquareRoundB", "NanumSquareRoundEB","NanumSquareRoundR", "NanumSquareRoundL", sans-serif;
}

`;

export default GlobalStyle;
