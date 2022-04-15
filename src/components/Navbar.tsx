import { useState } from 'react';
import { NavbarContainer, Nav, MenuIconContainer, NavMenu, NavItem } from '../styledComponents/NavbarStyles';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SvgIconProps } from '@mui/material/SvgIcon';

const menuData = ['About', 'Contact us', 'Learn More', 'Log in'];

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const iconProps: SvgIconProps = {
    style: { color: '#ffb600' },
    fontSize: 'large',
  };

  return (
    <Nav show={showMenu}>
      <NavbarContainer>
        <MenuIconContainer onClick={() => setShowMenu((prevValue) => !prevValue)}>
          {showMenu ? <ArrowBackIcon {...iconProps} /> : <MenuIcon {...iconProps} />}
        </MenuIconContainer>
        <NavMenu show={showMenu}>
          {menuData.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </NavMenu>
        <NavItem>
          <img src="/asb_logo.png" width="auto" height="20px" alt="ASB logo" />
          {showMenu ? <div>Menu</div> : <div>Register Card Form</div>}
        </NavItem>
      </NavbarContainer>
    </Nav>
  );
};
