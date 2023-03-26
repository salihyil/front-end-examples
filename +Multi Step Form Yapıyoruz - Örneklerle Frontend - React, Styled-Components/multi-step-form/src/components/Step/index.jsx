import React from 'react';

import * as S from './styled';

const Step = ({
  onBack,
  title,
  subTitle,
  hasBackButton,
  hasNextButton,
  handleSubmit,
  children,
}) => {
  return (
    <S.Step onSubmit={handleSubmit}>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.StepFooter>
        {hasBackButton && (
          <S.GoBackButton onClick={onBack}>Go Back</S.GoBackButton>
        )}
        {hasNextButton ? (
          <S.GoNextButton type='submit'>Next Step</S.GoNextButton>
        ) : (
          <S.GoNextButton type='submit'>Confirm</S.GoNextButton>
        )}
      </S.StepFooter>
    </S.Step>
  );
};

export default Step;
