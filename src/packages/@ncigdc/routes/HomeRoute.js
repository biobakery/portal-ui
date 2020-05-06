// @flow

import React from 'react';
import { Row, Column } from '@ncigdc/uikit/Flex';
import styled from '@ncigdc/theme/styled';
import ExploringLinks from '@ncigdc/components/ExploringLinks';
import PortalSummary from '@ncigdc/modern_components/PortalSummary';
import { zDepth1 } from '@ncigdc/theme/mixins';

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

const containerStyleSmall = {
  flex: 1,
  padding: '1rem',
  width: '75rem',
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
const InsideContainerSmall = styled.div(containerStyleSmall);

const Home = () => (
  <Column className="test-home">
    <GradientContainer>
      <InsideContainer flex="1">
        <SubTitle style={{ fontSize: '2rem' }}>
          <span>Multi'omic Microbiome Profiles</span>
        </SubTitle>
        <Title>BIOM-Mass Data Portal</Title>
        <Container className="test-portal-summary">
          <PortalSummary />
        </Container>
      </InsideContainer>
      <InsideContainer>
      <InsideContainerSmall flex="1">
        <SubTitle style={{ fontSize: '2rem' }}>
          <span>About</span>
        </SubTitle>
        <AboutText><span>The BIOM-Mass Data Portal is provided by the <a href="https://hcmph.sph.harvard.edu/">Harvard Chan Microbiome in Public Health Center (HCMPH)</a> to manage and share microbiome profiles, sample, and population information from microbiome epidemiology studies carried out through the HCMPH <a href="https://hcmph.sph.harvard.edu/resources/">BIOM-Mass platform</a>. It supports both open- and controlled-access dissemination of microbiome multi-omics (16S rRNA gene amplicon profiles, metagenomes, metatranscriptomes, metabolomes, etc.), raw and processed data products (sequences, taxonomic profiles, functional profiles, etc.), and sample and subject covariates (phenotypes, demographics, biometrics, technical protocols, etc.). Data can be shared publicly, controlled-access, or securely protected on a project-specific basis. The BIOM-Mass Data Portal was initially supported by the <a href="http://www.masslifesciences.com/">Massachusetts Life Sciences Center (MLSC)</a> as a collaboration between the <a href="https://www.hsph.harvard.edu/">Harvard T.H. Chan School of Public Health</a>, <a href="https://www.brighamandwomens.org/">Brigham and Womens Hospital (BWH)</a> <a href="https://www.brighamandwomens.org/research/departments/channing-division-of-network-medicine/overview">Channing Division of Network Medicine</a>, and <a href="https://www.massgeneral.org/">Massachusetts General</a> to support a flagship collection of oral and gut microbiome samples from 25,000 participants in the <a href="https://www.nurseshealthstudy.org/">Nurses Health Study II</a>.</span>
        </AboutText>
      </InsideContainerSmall>
      <InsideContainerSmall flex="1">
        <SubTitle style={{ margin: '1rem 0' }}>
          <em>Get Started by Exploring:</em>
        </SubTitle>
        <ExploringLinks />
      </InsideContainerSmall>
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

export default Home;
