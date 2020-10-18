import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    /* 여백 초기화 */
    body,div,ul,li,dl,dd,dt,ol,h1,h2,h3,h4,h5,h6,input,fieldset,legend,p,select,table,th,td,tr,textarea,button,form,figure,figcaption{margin:0; padding:0;}
    /* header, 탭메뉴 공간값 관련 세팅 */
    body{
        padding-top:50px;
        padding-left:150px;
    }

    /* a 링크 초기화 */
    a {color: #222; text-decoration: none;}
    a:hover {color: #2698cb;}

    /* 폰트 초기화 
    body, input, textarea, select, button, table {font-family:'Noto Sans KR', AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif; color: #222; font-size: 13px; line-height: 1.5;}*/

    /* 폰트 스타일 초기화 */
    em,address {font-style: normal;}

    /* 블릿기호 초기화 */
    ul,li,ol {list-style:none;}

    /* 제목 태그 초기화 */
    h1,h2,h3,h4,h5,h6 {font-size: 13px; font-weight: normal;}

    /* 테두리 초기화 */
    img,fieldset {border:0 none;}


    /* 반응형 */
    video,img {width: 100%;}

    /* clearfix */
    .cf:after{
        content:"";
        display:block;
        clear:both;
    }

    /* IR 효과 */
    .ir_pm {display:block; overflow:hidden; font-size:0; line-height:0; text-indent:-9999px;} /* 의미있는 이미지의 대체 텍스트를 제공하는 경우(Phark Method) */
    .ir_wa {display:block; overflow:hidden; position:relative; z-index:-1; width:100%; height: 100%;} /* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때(WA IR) */
    .ir_so {overflow: hidden; position:absolute; width:0; height:0; line-height:0; text-indent:-9999px;} /* 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때 */
`;

export default globalStyles;