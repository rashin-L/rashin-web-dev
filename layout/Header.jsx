"use client";

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
library.add(faGraduationCap);

import PortfolioImage from '@/components/PortfolioImage';

const Header = () => {

  return (
    <>
      <PortfolioImage />
      <Navbar />


    </>
  );
};

Header.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default React.memo(Header);
