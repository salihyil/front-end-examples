import styled from 'styled-components';

export const Step = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  padding: 24px;
`;

export const StepHeader = styled.div``;

/* Normalde h2 değilde Title diye component olurdu o kullanılırdı. Gerçek projede 
export const Title = styled.(Title)`` gibi
*/
export const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  color: var(--cool-gray);
`;

export const Body = styled.div`
  flex: 1;
`;

export const StepFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.button`
  color: var(--cool-gray);

  &:hover {
    color: inherit;
  }
`;

export const GoNextButton = styled.button`
  margin-left: auto;
  background-color: var(--marine-blue);
  color: var(--white);
  padding: 12px 24px;
  border-radius: 8px;
`;
