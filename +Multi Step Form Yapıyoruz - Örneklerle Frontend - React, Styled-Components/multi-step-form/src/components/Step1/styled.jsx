import styled, {css} from 'styled-components';

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  border: 1px solid var(--light-gray);
  color: var(--marine-blue);
  font-weight: 500;
  transition: border-color 200ms ease;

  &:hover {
    border-color: var(--purplish-blue);
  }

  &:focus {
    border-color: var(--purplish-blue);
    outline: none;
  }

  &::placeholder {
    color: var(--light-gray);
  }
`;

export const Step1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  /* Burdaki case: Step1 component de hasError prop'u varsa Step1 component altındaki Input border-color:var(--strawberry-red); olsun */
  ${Input} {  
    ${({hasError}) =>
      hasError &&
      css`
        border-color: var(--strawberry-red);
      `}
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--strawberry-red);
  font-size: 12px;
`;
