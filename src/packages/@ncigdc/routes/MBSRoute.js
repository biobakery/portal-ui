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
        <Title>MBS Project</Title>
        <ImageContainerSmall>
          <LogoContainer><a href="https://hcmph.sph.harvard.edu/"><img src={HCMPHLogo} alt="HCMPH"/></a></LogoContainer>
        </ImageContainerSmall>
        <AboutText>
          <span>
Mind Body Study (MBS): Stool sequencing data from women (NHS2) who had an email address available, previous blood and urine biospecimen collection, and either a secondary biospecimen collection between 2008-2011 or 2011-2012. Subjects are sampled at four timepoints. 
<br/>
<br/>
<br/>
Visit the repository page and search for "MBS" to list <a href="https://biom-mass.org/repository?facetTab=files&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22MBS%22%5D%7D%7D%5D%7D">all of the files for the MBS project</a>. 
<br/>
<br/>
<br/>
References: <a href="https://pubmed.ncbi.nlm.nih.gov/31049751/">Huang T, Trudel-Fitzgerald C, Poole EM, Sawyer S, Kubzansky LD, Hankinson SE, Okereke OI, Tworoger SS. The Mind-Body Study: study design and reproducibility and interrelationships of psychosocial factors in the Nurses Health Study II. Cancer Causes Control. 2019 Jul;30(7):779-790.</a> and <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4981810/">Bao Y, Bertoia ML, Lenart EB, Stampfer MJ, Willett WC, Speizer FE, Chavarro JE. Origin, Methods, and Evolution of the Three Nurses Health Studies. Am J Public Health 106, 1573-1581 (2016) PMC4981810.</a> and <a href="https://pubmed.ncbi.nlm.nih.gov/33883746/">Everett C, Li C, Wilkinson JE, Nguyen LH, McIver LJ, Ivey K, Izard J, Palacios N, Eliassen AH, Willett WC, Ascherio A, Sun Q, Tworoger SS, Chan AT, Garrett WS, Huttenhower C, Rimm EB, Song M. Overview of the Microbiome Among Nurses study (Micro-N) as an example of prospective characterization of the microbiome within cohort studies. Nat Protoc. 2021 Jun;16(6):2724-2731. PMC9240631.</a>

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
