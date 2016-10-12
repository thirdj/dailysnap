import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render (
  <App />,
  document.getElementById('root')
);

/*
  1. 모든건 컴포넌트입니다.
  2. 로케이션은 방문자가 어떤 곳에서 있는지 혹은 어딜 갈 것인지 알려주는 데이터 임.
  3. Match 는 location 에 따라 UI 를 보여줍니다.
*/
