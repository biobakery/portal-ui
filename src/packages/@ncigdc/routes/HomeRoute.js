// @flow

import React from 'react';
import { Row, Column } from '@ncigdc/uikit/Flex';
import styled from '@ncigdc/theme/styled';
import ExploringLinks from '@ncigdc/components/ExploringLinks';
import PortalSummary from '@ncigdc/modern_components/PortalSummary';
import { zDepth1 } from '@ncigdc/theme/mixins';

import MLSCLogo from '@ncigdc/theme/images/mlsc_logo.png'
import HutlabLogo from '@ncigdc/theme/images/hutlab_logo.png'
import FirecloudLogo from '@ncigdc/theme/images/firecloud_logo.png'

const Title = styled.div({
  color: 'white',
  fontSize: '3rem',
});

const SubTitle = styled.div({
  color: 'white',
});

const AboutText = styled.div({
  fontSize: '1.5rem',
  height: '25rem',
});

const ImageContainer = styled(Row, {
  margin: '2rem 0',
  justifyContent: 'space-around',
  width: '100vw',
  padding: '0 14rem',
});

const GradientContainer = styled(Row, {
  backgroundColor: '#000',
  backgroundImage:
    'radial-gradient(ellipse at center, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 48%, rgba(73,129,189,1) 100%)',
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

const Home = () => (
  <Column className="test-home">
    <GradientContainer>
      <InsideContainer flex="1">
        <SubTitle style={{ fontSize: '2rem' }}>
          <span>Meta`omic Datasets</span>
        </SubTitle>
        <Title>BIOM-Mass Data Portal</Title>
        <Container className="test-portal-summary">
          <PortalSummary />
        </Container>
      </InsideContainer>
      <InsideContainer flex="1">
        <SubTitle style={{ fontSize: '2rem' }}>
          <span>About</span>
        </SubTitle>
        <AboutText><span>The BIOM-Mass (Biobank for Microbiome Research in Massachusetts) project is funded by the <a href="http://www.masslifesciences.com/">Massachusetts Life Sciences Center (MLSC)</a> as a collaboration with the BWH/Harvard Cohorts Biorespository. The project is managed by groups from <a href="https://www.brighamandwomens.org/">Brigham and Womens Hospital (BWH)</a>, <a href="https://www.massgeneral.org/">Massachusetts General Hospital (MGH)</a>, and the <a href="http://hsph.harvard.edu">Harvard T.H. Chan School of Public Health (HCSPH)</a>. One project goal is to create the largest microbiome sample collection in part from the 25,000 individuals in the Nurses Health Study II. The <a href="http://huttenhower.sph.harvard.edu/">Huttenhower Lab</a> at HCSPH built and maintains the bioinformatics portal.</span>
        </AboutText>
        <SubTitle style={{ margin: '1rem 0' }}>
          <em>Get Started by Exploring:</em>
        </SubTitle>
        <ExploringLinks />
      </InsideContainer>
    </GradientContainer>
    <Column style={{ paddingTop: '7rem', alignItems: 'center' }}>
      <Row style={{ fontSize: '1.3em' }}></Row>
      <Row style={{ textAlign: 'center' }}>
        <ImageContainer>
          <LogoContainer><a href="http://www.masslifesciences.com"><img src={MLSCLogo} border="3"/></a></LogoContainer>
          <LogoContainer><a href="http://huttenhower.sph.harvard.edu/"><img src={HutlabLogo} alt="Huttenhower"/></a></LogoContainer>
          <LogoContainer><a href="https://software.broadinstitute.org/firecloud/"><img src={FirecloudLogo} alt="FireCloud"/></a></LogoContainer>
        </ImageContainer>
      </Row>
    </Column>
  </Column>
);

export default Home;
