import React from 'react';
import { NavLink } from 'react-router-dom';
import CatEmoji from 'components/CatEmoji/CatEmoji';
import { metadata } from 'config/config';

const SiteLogo = () => (
  <NavLink
    to='/'
    className='navbar-brand'
  >
    <CatEmoji />
    &nbsp;
    {metadata.title}
  </NavLink>
);

export default SiteLogo;
