// @flow

import React from 'react';
import { compose, withState } from 'recompose';
import { Row, Column } from '@ncigdc/uikit/Flex';
import styled from '@ncigdc/theme/styled';
import { zDepth1 } from '@ncigdc/theme/mixins';

import ContactLink from '@ncigdc/components/Links/ContactLink';
import RepositoryLink from '@ncigdc/components/Links/RepositoryLink';

import MLSCLogo from '@ncigdc/theme/images/mlsc_logo.png'
import HutlabLogo from '@ncigdc/theme/images/hutlab_logo.png'
import TerraLogo from '@ncigdc/theme/images/terra_logo.png'

import { fetchApi } from '@ncigdc/utils/ajax';

import { setAccessToken } from '@ncigdc/utils/siteCookies';

import GoogleLogin from 'react-google-login';

//const clientid = "250496797473-3tkrt8bluu5l508kik1j2ufurpiamgsn.apps.googleusercontent.com";
const clientid = "250496797473-15s2p3k9s7latehllsj4o2cv5qp1jl1c.apps.googleusercontent.com";

const Title = styled.div({
  color: 'white',
  fontSize: '3rem',
});

const SubTitle = styled.div({
  color: 'white',
});

const AboutText = styled.div({
  fontSize: '1.5rem',
  height: '10rem',
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

const responseGoogle = (response, resetButton) => {
  async function requestaccess() {
    const {
      hash_token,
    } = await fetchApi('access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        token: response.tokenObj.id_token,
        email: response.profileObj.email
      },
    });
   if (hash_token === "error") {
       resetButton("error")
   } else {
       setAccessToken(hash_token);
       resetButton(response.profileObj.name);
       window.setTimeout(function(){ location.href="/repository" }, 10000);
   }
  }
  requestaccess();
}
 
const InsideContainer = styled.div(containerStyle);

const LoginContainer = compose(
  withState('showLoginButton', 'resetButton', "login")
  )(
  ({
    showLoginButton,
    resetButton,
  }) => {

  if (showLoginButton === "login") {
    return (
        <div>
        <ImageContainerSmall>
          <LogoContainer>
          <GoogleLogin
            clientId={clientid}
            onSuccess={response => {
              responseGoogle(response, resetButton)
            }}
            onFailure={response => {
              resetButton("error")
            }}
            cookiePolicy={'single_host_origin'}
         /> 
          </LogoContainer>
        </ImageContainerSmall>
        <SubTitle style={{ fontSize: '2rem' }}>Sign in with Google to access controlled data</SubTitle>
        <AboutText>
          <span>The BIOM-Mass portal allows for access with your Google account. Access is restricted. Please <ContactLink>contact us</ContactLink> if you would like to have an account. Accounts allow for access to controlled multi'omic sequencing data and participant and sample metadata. All sequencing data sets are hosted and access controlled by <a href="https://terra.bio/">Terra (Broad Institute).</a></span>
        </AboutText>
        </div>
     )
  }

  if (showLoginButton !== "error") {
    return (
          <div>
            <ImageContainerSmall>
              <LogoContainer style={{ border: '4px solid rgb(0, 0, 0)' }}>
                <i className="fa fa-check-circle fa-5x" />
              </LogoContainer>
            </ImageContainerSmall>
            <SubTitle style={{ fontSize: '2rem' }}>Hello {showLoginButton}, Welcome to the Biom-Mass portal!</SubTitle>
        <AboutText>
          <span>You now have access to view the restricted metadata. <b>You will automatically be redirected to the <RepositoryLink>repository page</RepositoryLink> in 10 seconds.</b> Please <ContactLink>contact us</ContactLink> if you have any questions.</span>
        </AboutText>
          </div>
    )
  }

  return (
        <div>
        <ImageContainerSmall>
          <LogoContainer style={{ border: '4px solid rgb(0, 0, 0)' }}>
            <i className="fa fa-ban fa-5x" />
          </LogoContainer>
        </ImageContainerSmall>
        <SubTitle style={{ fontSize: '2rem', color:"black" }}>You do not have access to login to the portal</SubTitle>
        <AboutText>
          <span>The BIOM-Mass portal allows for access with your Google account. Access is restricted. Please <ContactLink>contact us</ContactLink> if you would like to have an account. Accounts allow for access to controlled multi'omic sequencing data and participant and sample metadata. All sequencing data sets are hosted and access controlled by <a href="https://terra.bio/">Terra (Broad Institute).</a></span>
        </AboutText>
       </div>
     )
});

const Auth = () => (
  <Column className="test-auth">
    <GradientContainer>
      <InsideContainer flex="1">
        <SubTitle style={{ fontSize: '2rem' }}>
          <span>Multi'omic Microbiome Profiles</span>
        </SubTitle>
        <Title>BIOM-Mass Data Portal</Title>
          <LoginContainer />
      <ImageContainerSmall>
        <LogoContainer><a href="https://terra.bio/"><img src={TerraLogo} alt="FireCloud"/></a></LogoContainer>
      </ImageContainerSmall>
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
