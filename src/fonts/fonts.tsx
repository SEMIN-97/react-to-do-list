import { createGlobalStyle } from 'styled-components';

import NotoSansRegularTTF from './NotoSansKR-Regular.ttf';
import NotoSansRegularWOFF from './NotoSansKR-Regular.woff';
import NotoSansRegularWOFF2 from './NotoSansKR-Regular.woff2';
import NotoSansBoldTTF from './NotoSansKR-Bold.ttf';
import NotoSansBoldWOFF from './NotoSansKR-Bold.woff';
import NotoSansBoldWOFF2 from './NotoSansKR-Bold.woff2';
import NotoSansBlackTTF from './NotoSansKR-Black.ttf';
import NotoSansBlackWOFF from './NotoSansKR-Black.woff';
import NotoSansBlackWOFF2 from './NotoSansKR-Black.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: normal;
    font-style: normal;
    src: local('Noto Sans Regular'),
    local('NotoSans-Regular'),
    url(${NotoSansRegularTTF}) format('truetype'),
    url(${NotoSansRegularWOFF}) format('woff'),
    url(${NotoSansRegularWOFF2}) format('woff2')
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: bold;
    font-style: normal;
    src: local('Noto Sans Bold'),
    local('NotoSans-Bold'),
    url(${NotoSansBoldTTF}) format('truetype'),
    url(${NotoSansBoldWOFF}) format('woff'),
    url(${NotoSansBoldWOFF2}) format('woff2')
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 900;
    font-style: normal;
    src: local('Noto Sans Black'),
    local('NotoSans-Black'),
    url(${NotoSansBlackTTF}) format('truetype'),
    url(${NotoSansBlackWOFF}) format('woff'),
    url(${NotoSansBlackWOFF2}) format('woff2')
  }
`;
