// @flow
/* eslint no-restricted-globals: 0 */

import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { connect } from 'react-redux';
import LogoutIcon from 'react-icons/lib/fa/sign-out';
import styled from '@ncigdc/theme/styled';
import { rmAccessToken } from '@ncigdc/utils/siteCookies';


const styles = {
  marginLeft: {
    marginLeft: '0.7rem',
  },
};

const LogoutButton = () => (
    <Link to='/' className="test-logout-button" onClick={() => rmAccessToken()} >
      <span>
        <LogoutIcon />
        <span style={styles.marginLeft}>Logout</span>
      </span>
    </Link>
);


export default connect()(LogoutButton);
