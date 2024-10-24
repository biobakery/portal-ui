// @flow

import React from 'react';
import { compose, pure, lifecycle, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import { dismissNotification } from '@ncigdc/dux/bannerNotification';
import biomMassLogo from '@ncigdc/theme/images/biom_mass_logo_tiny.png'
import HomeLink from '@ncigdc/components/Links/HomeLink';
import RepositoryLink from '@ncigdc/components/Links/RepositoryLink';
import CartLink from '@ncigdc/components/Links/CartLink';
import ProjectsLink from '@ncigdc/components/Links/ProjectsLink';
import ProgramsLink from '@ncigdc/components/Links/ProgramsLink';
import ProtocolLink from '@ncigdc/components/Links/ProtocolLink';
import HelpLink from '@ncigdc/components/Links/HelpLink';
import HPFSLink from '@ncigdc/components/Links/HPFSLink';
import KidneyLink from '@ncigdc/components/Links/KidneyLink';
import MBSLink from '@ncigdc/components/Links/MBSLink';
import OHMRLink from '@ncigdc/components/Links/OHMRLink';
import MLSCLink from '@ncigdc/components/Links/MLSCLink';
import PDGMLink from '@ncigdc/components/Links/PDGMLink';
import ContactLink from '@ncigdc/components/Links/ContactLink';
import PrivacyLink from '@ncigdc/components/Links/PrivacyLink';
import GDCAppsDropdown from '@ncigdc/components/GDCApps/GDCAppsDropdown';
import UserDropdown from '@ncigdc/components/UserDropdown';
import Hidden from '@ncigdc/components/Hidden';
import { setModal } from '@ncigdc/dux/modal';
import { forceLogout } from '@ncigdc/dux/auth';
import SessionExpiredModal from '@ncigdc/components/Modals/SessionExpiredModal';
import withRouter from '@ncigdc/utils/withRouter';
import Banner from '@ncigdc/uikit/Banner';
import { withTheme } from '@ncigdc/theme';
import DatabaseIcon from '@ncigdc/theme/icons/Database';
import { Row } from '@ncigdc/uikit/Flex';
import LoginButton from '@ncigdc/components/LoginButton';
import LogoutButton from '@ncigdc/components/LogoutButton';

import { isUserAuth } from '@ncigdc/utils/siteCookies';

import './Header.css';

const styles = {
  iconPadding: {
    paddingRight: '4px',
  },
  activeNavLink: theme => ({
    backgroundColor: theme.greyScale2,
    color: theme.white,
  }),
};

const Header = compose(
  withState('isCollapsed', 'setIsCollapsed', true),
  withRouter,
  connect(state => ({
    notifications: state.bannerNotification,
    user: state.auth.user,
    error: state.error,
  })),
  withHandlers({
    handleApiError: ({ dispatch }) => ({ status, user }) => {
      if (user && status === 401) {
        dispatch(setModal(<SessionExpiredModal />));
        dispatch(forceLogout());
      }
    },
  }),
  lifecycle({
    componentDidMount(): void {
      if (this.props.error) {
        this.props.handleApiError({
          ...this.props.error,
          user: this.props.user,
        });
      }
    },
    componentWillReceiveProps(nextProps: Object): void {
      if (nextProps.error !== this.props.error) {
        this.props.handleApiError({ ...nextProps.error, user: nextProps.user });
      }
    },
  }),
  withTheme,
  pure,
)(
  ({
    user,
    notifications,
    dispatch,
    theme,
    isCollapsed,
    setIsCollapsed,
  }) => (
    <header
      id="header"
      className="navbar navbar-default navbar-static-top"
      role="banner"
    >
      {notifications.map(n => (
        <Banner
          {...n}
          key={n.id}
          handleOnDismiss={() => dispatch(dismissNotification(n.id))}
        />
      ))}
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="sr-only test-toggle-navigation">
              Toggle navigation
            </span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <HomeLink
            className="navbar-brand"
            tabIndex="0"
            style={{ padding: 0 }}
          >
            <img src={biomMassLogo} alt="biommass-logo" />
            <Hidden>
              <h1>BIOM-Mass Home</h1>
            </Hidden>
          </HomeLink>
        </div>
        <nav
          style={{ outline: 'none' }}
          className={`navbar-collapse ${isCollapsed ? 'collapse' : ''}`}
          data-uib-collapse="hc.isCollapsed"
          tabIndex="-1"
          aria-label="Site Navigation"
          onClick={() => setIsCollapsed(true)}
        >
          <ul className="nav navbar-nav">
            <li>
              <HomeLink exact activeStyle={styles.activeNavLink(theme)}>
                <i className="fa fa-home" style={styles.iconPadding} />
                <span className="header-hidden-sm">Home</span>
                <Hidden>Home</Hidden>
              </HomeLink>
            </li>
            <li>
              <ProgramsLink exact activeStyle={styles.activeNavLink(theme)}>
                <i className="fa fa-folder-open-o" style={styles.iconPadding} />
                <span className="header-hidden-sm">Programs</span>
                <Hidden>Programs</Hidden>
              </ProgramsLink>
            </li>
            <li>
              <ProjectsLink exact activeStyle={styles.activeNavLink(theme)}>
                <i className="icon-gdc-projects" style={styles.iconPadding} />
                <span className="header-hidden-sm">Projects</span>
                <Hidden>Projects</Hidden>
              </ProjectsLink>
            </li>
            <li>
              <RepositoryLink exact activeStyle={styles.activeNavLink(theme)}>
                <DatabaseIcon style={styles.iconPadding} />
                <span className="header-hidden-sm">Repository</span>
                <Hidden>Repository</Hidden>
              </RepositoryLink>
            </li>
            <li>
              <HelpLink exact activeStyle={styles.activeNavLink(theme)}>
                <i className="fa fa-question-circle" style={styles.iconPadding} />
                <span className="header-hidden-sm">Help</span>
                <Hidden>Help</Hidden>
              </HelpLink>
            </li>
            <li>
              <ProtocolLink exact activeStyle={styles.activeNavLink(theme)}>
                <i className="fa fa-file" style={styles.iconPadding} />
                <span className="header-hidden-sm">Protocols</span>
                <Hidden>Protocols</Hidden>
              </ProtocolLink>
            </li>
            <li>
              <PrivacyLink exact activeStyle={styles.activeNavLink(theme)}>
                <i className="fa fa-lock" style={styles.iconPadding} />
                <span className="header-hidden-sm">Privacy</span>
                <Hidden>Privacy</Hidden>
              </PrivacyLink>
            </li>
            <li>
              <ContactLink exact activeStyle={styles.activeNavLink(theme)}>
                <i className="fa fa-envelope-o" style={styles.iconPadding} />
                <span className="header-hidden-sm">Contact</span>
                <Hidden>Contact</Hidden>
              </ContactLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {!isUserAuth() && (
                <li>
                  <LoginButton />
                </li>
              )}
            {isUserAuth() && (
                <li>
                  <LogoutButton />
                </li>
              )}
          </ul>
        </nav>
      </div>
    </header>
  ),
);

export default Header;
