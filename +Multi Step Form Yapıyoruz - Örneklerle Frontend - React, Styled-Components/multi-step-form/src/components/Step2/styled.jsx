import styled, {css} from 'styled-components';

export const Step2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const RadioLabel = styled.label`
  flex: 1;
  border: 1px solid var(--light-gray);
  padding: 16px;
  border-radius: 8px;
  transition: border-color 300ms ease;

  &:hover {
    border-color: var(--purplish-blue);
  }

  ${({isSelected}) =>
    isSelected &&
    css`
      border-color: var(--purplish-blue);
      background-color: var(--alabaster);
    `}
`;

export const RadioInput = styled.input`
  display: none;
`;

export const Icon = styled.img`
  margin-bottom: 36px;
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const SubTitle = styled.h6`
  font-size: 14px;
  color: var(--cool-gray);
  transition: all 200ms ease;

  ${({isActive}) =>
    isActive &&
    css`
      margin-top: 30px;
    `};
`;

export const BillingGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const BillingDiv = styled.div`
  ${({isActive}) =>
    isActive &&
    css`
      font-weight: 700;
    `}
`;

export const BillingSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const BillingInput = styled.input`
  &:checked + .slider {
    background-color: var(--marine-blue);
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const BillingSpan = styled.span`
  &.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--marine-blue);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  &.slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &.slider.round {
    border-radius: 34px;
  }

  &.slider.round:before {
    border-radius: 50%;
  }
`;
