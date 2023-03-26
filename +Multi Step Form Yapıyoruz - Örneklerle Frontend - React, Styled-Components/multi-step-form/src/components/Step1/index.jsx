import React from 'react';

import Step from '../Step';

import * as S from './styled.jsx';

const Step1 = ({formData, onStepSubmit, ...props}) => {
  const hasError = false;

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProperties = Object.fromEntries(formData);

    // Validation rule

    onStepSubmit('step1', 'step2', formProperties);
  };

  return (
    <>
      <Step {...props} handleSubmit={onSubmit}>
        <S.Step1 hasError={hasError}>
          <S.FormItem>
            <S.Label htmlFor='name'>Name</S.Label>
            <S.Input
              id='name'
              name='name'
              type={'text'}
              placeholder={'Enter your name'}
              defaultValue={formData.step1.name}
            />
            {hasError && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.FormItem>
          <S.FormItem>
            <S.Label htmlFor='email'>Email Address</S.Label>
            <S.Input
              id='email'
              name='emailAddress'
              type={'email'}
              placeholder={'e.g. stephenking@lorem.com'}
              defaultValue={formData.step1.emailAddress}
            />
            {hasError && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.FormItem>
          <S.FormItem>
            <S.Label htmlFor='phoneNumber'>Phone Number</S.Label>
            <S.Input
              id='phoneNumber'
              name='phoneNumber'
              type={'number'}
              placeholder={'e.g. +1 234 567 890'}
              defaultValue={formData.step1.phoneNumber}
            />
            {hasError && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.FormItem>
        </S.Step1>
      </Step>

      {/* 
      <S.Label children='children propuna yazılı' />
      <S.Label >Normal içine yazılı</S.Label> 
       */}
    </>
  );
};

export default Step1;
