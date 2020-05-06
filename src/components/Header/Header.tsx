import React from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'components/Container/Container';
import SiteLogo from 'components/SiteLogo/SiteLogo';
import SiteMenu from 'components/SiteMenu/SiteMenu';

const Header = () => (
  <Navbar
    bg='dark'
    variant='dark'
    collapseOnSelect
    expand='sm'
    className='fixed-on-desktop-only'
  >
    <Container>
      <SiteLogo />
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <SiteMenu />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
