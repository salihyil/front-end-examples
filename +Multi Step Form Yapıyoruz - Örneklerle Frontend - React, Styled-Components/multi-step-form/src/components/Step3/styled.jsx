import styled, {css} from 'styled-components';

export const Step3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Item = styled.label`
  display: flex;
  align-items: center;
  gap: 24px;

  border-radius: 8px;
  border: 1px solid var(--light-gray);
  padding: 12px;

  ${({isSelected}) =>
    isSelected &&
    css`
      border-color: var(--purplish-blue);
      background-color: var(--alabaster);
    `}

  &:hover {
    border: 1px solid var(--purplish-blue);
    cursor: pointer;
  }
`;

export const Input = styled.input``;

export const Body = styled.div`
  flex: 1;
`;

export const Title = styled.h4`
  color: var(--marine-blue);
  font-weight: 700;
`;

export const SubDescription = styled.p`
  font-size: 14px;
  color: var(--cool-gray);
`;

export const Price = styled.p`
  color: var(--purplish-blue);
  font-weight: 500;
`;
