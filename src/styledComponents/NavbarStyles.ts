import styled from 'styled-components';
import { Container } from './../globalStyles';

interface IMenuStyledPros {
  show?: boolean;
}

export const Nav = styled.nav`
  background: black;
  color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 50;
  width: 100%;

  transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  ${Container}
`;

export const MenuIconContainer = styled.div`
  z-index: 50;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
`;

export const NavMenu = styled.div<IMenuStyledPros>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 80px;
  left: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transform: translateX(${({ show }) => (show ? '0' : '-100vw')});
  transition: 0.5s ease-in-out;
  background-color: #262626f2;
  gap: 2rem;

  > div {
    transform: translateY(-100px);
    cursor: pointer;

    &:hover {
      color: #ffb600;
      transition: color 0.5s ease;
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media screen and (max-width: 480px) {
    > img {
      display: none;
    }
    font-size: 1rem;
  }

  @media screen and (max-width: 300px) {
    display: none;
  }
`;
