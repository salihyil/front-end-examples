import React, {useState} from 'react';
import Step from '../Step';
import * as S from './styled';
import formJson from '../../../form.json';
import {
  Icons,
  DEFAULT_PLAN,
  DEFAULT_BILLING_TYPE,
  MONTHLY,
  YEARLY,
} from './constant';

const Step2 = ({formData, onStepSubmit, ...props}) => {
  const [plan, setPlan] = useState(formData.step2.plan ?? DEFAULT_PLAN);
  const [billingType, setBillingType] = useState(
    formData.step2.billingType ?? DEFAULT_BILLING_TYPE
  );
  const [check, setCheck] = useState(billingType === MONTHLY ? false : true);

  console.log(plan);
  console.log(billingType);

  const changePlan = (newPlan) => {
    setPlan(newPlan);
  };

  const handleChange = (isCheck) => {
    setCheck(isCheck);
    isCheck ? setBillingType(YEARLY) : setBillingType(MONTHLY);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validation rule

    onStepSubmit('step2', 'step3', {billingType, plan});
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step2>
        <S.RadioGroup>
          {formJson.step2[billingType].map((item) => (
            <S.RadioLabel key={item.id} isSelected={item.id === plan.id}>
              <S.RadioInput
                name='plan-type'
                type='radio'
                onChange={() => changePlan(item)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.SubTitle isActive={billingType === YEARLY}>
                {item.price}
              </S.SubTitle>
              {billingType === YEARLY && (
                <S.SubTitle>{item.description}</S.SubTitle>
              )}
            </S.RadioLabel>
          ))}
        </S.RadioGroup>

        <S.BillingGroup>
          <S.BillingDiv isActive={billingType === MONTHLY}>
            Monthly
          </S.BillingDiv>
          <S.BillingSwitch>
            <S.BillingInput
              type='checkbox'
              onChange={(e) => handleChange(e.target.checked)}
              checked={check}
            />
            <S.BillingSpan className='slider round'></S.BillingSpan>
          </S.BillingSwitch>
          <S.BillingDiv isActive={billingType === YEARLY}>Yearly</S.BillingDiv>
        </S.BillingGroup>
      </S.Step2>
    </Step>
  );
};

export default Step2;
