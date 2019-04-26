// @flow

import React from 'react';
import { Row, Column } from '@ncigdc/uikit/Flex';
import styled from '@ncigdc/theme/styled';
import { zDepth1 } from '@ncigdc/theme/mixins';

import ContactLink from '@ncigdc/components/Links/ContactLink';

import MLSCLogo from '@ncigdc/theme/images/mlsc_logo.png'
import HutlabLogo from '@ncigdc/theme/images/hutlab_logo.png'
import TerraLogo from '@ncigdc/theme/images/terra_logo.png'

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

const responseGoogle = (response) => {
  console.log(response);
}
 
const InsideContainer = styled.div(containerStyle);

const NoAuth = () => (
  <Column className="test-noauth">
    <GradientContainer>
      <InsideContainer flex="1">
        <SubTitle style={{ fontSize: '2rem' }}>
          <span>Meta`omic Datasets</span>
        </SubTitle>
        <Title>BIOM-Mass Data Portal</Title>
        <ImageContainerSmall>
          <LogoContainer style={{ border: '4px solid rgb(0, 0, 0)' }}>
            <i class="fa fa-ban fa-5x" aria-hidden="true"></i>
          </LogoContainer>
        </ImageContainerSmall>
        <SubTitle style={{ fontSize: '2rem', color:"black" }}>You do not have access to login to the portal</SubTitle>
        <AboutText>
          <span>The BIOM-Mass portal allows for access with your Google account. Access is restricted. Please <ContactLink>contact us</ContactLink> if you would like to have an account. Accounts allow for access to controlled meta`omic sequencing data and participant and sample metadata. All sequencing data sets are hosted and access controlled by <a href="https://terra.bio/">Terra (Broad Institute).</a></span>
        </AboutText>
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

export default NoAuth;
