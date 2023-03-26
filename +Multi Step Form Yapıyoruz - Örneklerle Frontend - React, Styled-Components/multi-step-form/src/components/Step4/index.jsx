import React from 'react';
import Step from '../Step';

import * as S from './styled';

const Step4 = ({formData, ...props}) => {
  let {billingType, plan} = formData.step2;
  let {selectedAddons} = formData.step3;

  return (
    <Step {...props}>
      <S.Step4>
        <S.RowWrapper>
          <S.MainRow>
            <S.Body>
              <S.Title>
                {plan.title} (
                {billingType.charAt(0).toUpperCase() + billingType.slice(1)})
              </S.Title>
              <S.ChangeButton>Change</S.ChangeButton>
            </S.Body>
            <S.Price>{plan.price}</S.Price>
          </S.MainRow>

          {selectedAddons.length > 0 &&
            selectedAddons.map((addon) => (
              <S.SubRow key={addon.id}>
                <S.Title>{addon.title}</S.Title>
                <S.Price>{addon.price}</S.Price>
              </S.SubRow>
            ))}
        </S.RowWrapper>
        <S.TotalRow>
          <S.Title>Total (per {billingType})</S.Title>
          <S.TotalAmount>
            {selectedAddons.reduce(
              (acc, curr) => acc + curr.priceAmount,
              plan.priceAmount
            )}
          </S.TotalAmount>
        </S.TotalRow>
      </S.Step4>
    </Step>
  );
};

export default Step4;
