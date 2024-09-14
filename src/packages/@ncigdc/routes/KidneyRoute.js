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
        <Title>Kidney Project</Title>
        <ImageContainerSmall>
          <LogoContainer><a href="https://hcmph.sph.harvard.edu/"><img src={HCMPHLogo} alt="HCMPH"/></a></LogoContainer>
        </ImageContainerSmall>
        <AboutText>
          <span>
 The Kidney project includes women from the Nurses Health 2 Study (NHS2) with kidney stones and age/BMI-matched controls, targeting all self-reported stone formers known at time of enrollment. The Nurses’ Health Studies (NHS1, NHS2, and NHS3) are a series of roughly generational parent prospective cohorts launched in 1976, 1989, and 2010, respectively, with ~100,000 initial participants each. We use “NHS” to refer predominantly to NHS2, from which most participants (all women) are still active with an average age of ~69.
<br/>
<br/>
<br/>
To download files from this project, visit the <a href="https://biom-mass.org/repository?facetTab=files">repository page</a>. Search for "Kidney" to access <a href="https://biom-mass.org/repository?facetTab=files&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22Kidney%22%5D%7D%7D%5D%7D">all of the files for this project</a>. 
<br/>
<br/>
<br/>
Reference: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4981810/">Bao, Y. et al. Origin, Methods, and Evolution of the Three Nurses Health Studies. Am J Public Health 106, 1573-1581 (2016) PMC4981810.</a>

        </span>
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