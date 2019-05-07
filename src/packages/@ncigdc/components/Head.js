// @flow

import React from 'react';
import { capitalize } from 'lodash';
import { Helmet } from 'react-helmet';
import biomMassFavicon from '@ncigdc/theme/images/biom-mass-server-favicon.png';

export default ({ title }) => (
  <Helmet>
    <meta
      name="description"
      content="BIOM-Mass Portal"
    />
    <title>{capitalize(title) || 'BIOM-Mass'}</title>
    <link rel="icon" href={biomMassFavicon} />
  </Helmet>
);
