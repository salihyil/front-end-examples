import styled, {css} from 'styled-components';
import SideBarBg from '../../assets/images/bg-sidebar-desktop.svg';

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: url(${SideBarBg}) no-repeat;
  background-size: cover;
  padding: 24px;
  border-radius: 8px;
  color: var(--white);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ItemNumber = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.isActive) {
      return css`
        background-color: var(--magnolia);
        color: var(--marine-blue);
        border-color: var(--magnolia);
      `;
    }
  }};
`;

export const ItemBody = styled.div``;

export const SubTitle = styled.h5`
  font-size: 13px;
  text-transform: uppercase;
  opacity: 0.75;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
`;
