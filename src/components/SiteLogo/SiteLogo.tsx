import React from 'react';
import { NavLink } from 'react-router-dom';
import { metadata } from 'config/config';

const SiteLogo = () => (
  <NavLink to="/" className="navbar-brand">
    <span role="img" aria-label="cat">😺</span>
    &nbsp;
    {metadata.title}
  </NavLink>
);

export default SiteLogo;
