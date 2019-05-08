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
    <title>{'BIOM-Mass'}</title>
    <link rel="icon" href={biomMassFavicon} />

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139875427-1"></script>
    <script>
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-139875427-1');
      `}
    </script>
  </Helmet>
);
