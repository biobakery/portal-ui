// @flow

import React from 'react';
import Color from 'color';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withTheme } from '@ncigdc/theme';
import { ExternalLink as ELink } from '@ncigdc/uikit/Links';
import HomeLink from './Links/HomeLink';

const styles = {
  footer: theme => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    height: 'auto',
    backgroundColor: theme.greyScale1,
    borderTop: `6px solid ${Color(theme.greyScale1)
      .lighten(2)
      .rgbString()}`,
    borderBottom: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  outerContainer: {
    fontSize: '85.714%',
    padding: '15px 0',
    color: '#97abb6',
    textAlign: 'center',
  },
  innerContainer: {
    margin: '5px auto 0',
    textAlign: 'center',
  },
  link: {
    color: '#c2cfd5',
  },
};

const ExternalLink = ({
  children,
  hasExternalIcon = false,
  style,
  ...props
}) => (
  <ELink
    hasExternalIcon={hasExternalIcon}
    style={{ ...styles.link, ...style }}
    {...props}
  >
    {children}
  </ELink>
);

export default compose(
  connect(state => state.versionInfo),
  withTheme,
)(
  ({
    theme,
    uiVersion,
    uiCommitHash,
    apiVersion,
    apiCommitHash,
    dataRelease,
  }) => (
    <footer
      style={styles.footer(theme)}
      className="test-footer"
      role="contentinfo"
    >
      <div style={styles.outerContainer}>
        <div style={styles.innerContainer}>
          <span>Data sets and metadata hosted and access controlled by the </span>
          <ExternalLink href="https://portal.firecloud.org/">
            Broad Institute FireCloud
          </ExternalLink>
        </div>
        <div style={styles.innerContainer}>
          <span>Portal UI developed from the open source framework provided by the </span>
          <ExternalLink href="https://gdc.cancer.gov/">
            National Cancer Institute Genomic Data Commons
          </ExternalLink>
        </div>
      </div>
    </footer>
  ),
);
