// @flow

import React from 'react';
import { Row, Column } from '@ncigdc/uikit/Flex';
import styled from '@ncigdc/theme/styled';
import { zDepth1 } from '@ncigdc/theme/mixins';

import MLSCLogo from '@ncigdc/theme/images/mlsc_logo.png'
import HutlabLogo from '@ncigdc/theme/images/hutlab_logo.png'
import TerraLogo from '@ncigdc/theme/images/terra_logo.png'
import HMACLogo from '@ncigdc/theme/images/microbiome_core-reduced-size-square.png'
import HCMPHLogo from '@ncigdc/theme/images/HCMPH_logo_35.png'

const Title = styled.div({
  color: 'white',
  fontSize: '3rem',
});

const SubTitle = styled.div({
  color: 'white',
});

const SubTitleH2 = styled.div({
  color: 'white',
  padding: '0.25rem 0',
});

const AboutText = styled.div({
  fontSize: '1.25rem',
  height: '25rem',
});

const PrivacyText = styled.div({
  fontSize: '1.25rem',
  padding: '0.25rem 0',
});

const ImageContainer = styled(Row, {
  margin: '2rem 0',
  justifyContent: 'space-around',
  width: '100vw',
  padding: '0 14rem',
});

const ImageContainerSmall = styled(Row, {
  margin: '2rem 0',
  justifyContent: 'space-around',
  width: '95vw',
  padding: '0 14rem',
});

const GradientContainer = styled(Row, {
  backgroundColor: '#000',
  backgroundImage:
    'radial-gradient(ellipse at center, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 48%, rgba(73,129,189,1) 100%)'
});

const containerStyle = {
  flex: 1,
  padding: '3rem',
  height: '50rem',
  position: 'relative',
};

const Container = styled(Column, {
  ...zDepth1,
  marginTop: '3rem',
  backgroundColor: 'white',
  borderTop: '3px solid rgb(37, 208, 182)',
});

const LogoContainer = styled(Column, {
  ...zDepth1,
  backgroundColor: 'white',
  border: '2px solid rgb(37, 208, 182)',
  margin: 'auto',
});

const InsideContainer = styled.div(containerStyle);

const Auth = () => (
  <Column className="test-auth">
    <GradientContainer>
      <InsideContainer flex="1">
        <SubTitle style={{ fontSize: '2rem' }}>
          <span>Multi'omic Microbiome Profiles</span>
        </SubTitle>
        <Title>BIOM-Mass Data Portal</Title>
        <SubTitleH2 style={{ fontSize: '2rem', color: 'black', padding: '0.5rem 0' }}>
          <span>Privacy Policy</span>
        </SubTitleH2>
        <AboutText>
        <PrivacyText>
          Protecting your private information is important to us. This Statement of Privacy applies to the BIOM-Mass website application at <a href="https://biom-mass.org">biom-mass.org</a>. By using the BIOM-Mass application, you consent to the data practices described in this statement.
        </PrivacyText>
        <SubTitleH2 style={{ fontSize: '1.5rem', color: 'black' }}>
          <span>Collection of your Personal Information</span>
        </SubTitleH2>
        <PrivacyText>
          We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to access the authenticated portions of the BIOM-Mass application. These may include: (a) registering for an account; (b) viewing or downloading access controlled metadata; (c) downloading access controlled data files through Google Cloud buckets. 

When you access authenticated portions of this site we collect your email and name. We use your email address to determine what portions, if any, of this site you may access. With a successful login to the BIOM-Mass application, your name is temporarily stored in the browser while your email address is permanently stored in our database. With a failed login to the BIOM-Mass application, your name and email address are permanently logged.

We use Google OAuth to login users to the web application. We use Google Analytics to track usage of this website application. Please see the documentation on <a href="https://www.google.com/policies/privacy/partners/">how Google uses collects and processes data</a>. We use cookies solely for the purposes of tracking authenticated user sessions with a token and your email address serving as the session identifiers. 
        </PrivacyText>
        <SubTitleH2 style={{ fontSize: '1.5rem', color: 'black' }}>
          <span>Sharing Information with Third Parties</span>
        </SubTitleH2>
        <PrivacyText>We do not sell, rent, or lease user lists to third parties.
        </PrivacyText>
        <SubTitleH2 style={{ fontSize: '1.5rem', color: 'black' }}>
          <span>Right to Deletion</span>
        </SubTitleH2>
        <PrivacyText>
        Subject to certain exceptions, on receipt of a verifiable request from you, we will delete your personal information from our records. Please note we may not be able to comply with request to delete your personal information if it is necessary to: (a) detect security incidents, protect against malicious, deceptive fraudulent, or illegal activity; or prosecute those responsible for that activity; (b) debug to identify and repair errors that impair existing intended functionality; (c) comply with an existing legal obligation.
        </PrivacyText>
        <SubTitleH2 style={{ fontSize: '1.5rem', color: 'black' }}>
          <span>Changes to this Statement</span>
        </SubTitleH2>
        <PrivacyText>
We reserve the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we collect, store, and treat personal information by sending a notice to the email address on your account, by placing a prominent notice on our application, and/or by updating any privacy information. Your continued use of the BIOM-Mass application after such modifications will constitute your: (a) acknowledgement of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
        </PrivacyText>
        <SubTitleH2 style={{ fontSize: '1.5rem', color: 'black' }}>
          <span>Contact Information</span>
        </SubTitleH2>
        <PrivacyText>
We welcome your questions and comments regarding this Statement of Privacy. If you believe that we have not adhered to this Statement, please <a href="https://biom-mass.org">contact us</a>.
        </PrivacyText>
        </AboutText>
      </InsideContainer>
    </GradientContainer>
    <Column style={{ paddingTop: '7rem', alignItems: 'center' }}>
      <Row style={{ fontSize: '1.3em' }}></Row>
      <Row style={{ textAlign: 'center' }}>
        <ImageContainer>
          <LogoContainer><a href="http://huttenhower.sph.harvard.edu/"><img src={HutlabLogo} alt="Huttenhower"/></a></LogoContainer>
          <LogoContainer><a href="http://www.masslifesciences.com"><img src={MLSCLogo} border="3"/></a></LogoContainer>
          <LogoContainer><a href="https://terra.bio/"><img src={TerraLogo} alt="FireCloud"/></a></LogoContainer>
        </ImageContainer>
      </Row>
    </Column>
  </Column>
);

export default Auth;
