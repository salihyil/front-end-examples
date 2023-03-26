import styled, {css} from 'styled-components';

const rowCommonCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Step4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 12px;
`;

export const Title = styled.h4`
  color: var(--cool-gray);
`;

export const MainRow = styled.div`
  ${rowCommonCss}
  border-bottom: 1px solid var(--light-blue);
  padding: 24px;

  ${Title} {
    color: var(--marine-blue);
    font-weight: 500;
  }
`;

export const RowWrapper = styled.div`
  background-color: var(--magnolia);
  border-radius: 8px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ChangeButton = styled.button``;

export const Price = styled.h6``;

export const SubRow = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 24px;
`;

export const TotalRow = styled.div`
  ${rowCommonCss}

  padding: 24px;
`;

export const TotalAmount = styled.h3`
  color: var(--purplish-blue);
  font-weight: 700;
  font-size: 18px;
`;
