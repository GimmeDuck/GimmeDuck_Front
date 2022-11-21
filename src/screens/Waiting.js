import React from 'react';
import {Background, LoadingText} from '../screen_js/Styles';

export default () => {
  return (
    <Background>
      <LoadingText>1분정도 소요됩니다...<br/>잠시만 기다려 주세요!</LoadingText>
        <img src='img/spinner.gif' alt="로딩중" width="30%" />
    </Background>
  );
};