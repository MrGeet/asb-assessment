import { NavbarContainer, Nav, MenuIconContainer, NavMenu, NavItem } from '../styledComponents/NavbarStyles';
import MenuIcon from '@mui/icons-material/Menu';
import { SvgIconProps } from '@mui/material/SvgIcon';

export const Navbar = () => {
  const iconProps: SvgIconProps = {
    style: { color: '#ffb600' },
    fontSize: 'large',
  };

  return (
    <Nav>
      <NavbarContainer>
        <MenuIconContainer>
          <MenuIcon {...iconProps} />
        </MenuIconContainer>
        <NavMenu show={false}>
          <div>item </div>
          <div>item </div>
          <div>item </div>
          <div>item </div>
        </NavMenu>
        <NavItem>
          <img src="/asb_logo.png" width="auto" height="20px" alt="ASB logo" />
          <div>Register Card Form</div>
        </NavItem>
      </NavbarContainer>
    </Nav>
  );
};
