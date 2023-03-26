import React from 'react';
import * as S from './styled';
import {Items} from './constant';

const SideBar = ({activeStep}) => {
  return (
    <S.SideBar>
      {Items.map((item) => (
        <S.Item key={item.id}>
          <S.ItemNumber isActive={activeStep === item.id}>
            {item.number}
          </S.ItemNumber>
          <S.ItemBody>
            <S.SubTitle>{item.subTitle}</S.SubTitle>
            <S.Title>{item.title}</S.Title>
          </S.ItemBody>
        </S.Item>
      ))}
    </S.SideBar>
  );
};

export default SideBar;
