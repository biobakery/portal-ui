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
  height: '55rem',
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
        <Title>HPFS Project</Title>
        <ImageContainerSmall>
          <LogoContainer><a href="https://hcmph.sph.harvard.edu/"><img src={HCMPHLogo} alt="HCMPH"/></a></LogoContainer>
        </ImageContainerSmall>
        <AboutText>
          <span>
HPFS - Health Professions Followup Study: This dataset comprises longitudinally-collected sequenced stool  collected from men from the Men’s Lifestyle Validation Study (MLVS) sub-cohort of HPFS.  Study participants were adults 65-82 years old at the time of sample collection, and who were members of the Harvard Pilgrim Health Care insurance plan at time of enrollment. This dataset also has metatranscriptomic data. The associated publication examined the stability of the metagenome and metatranscriptome within individuals over time.
<br/>
<br/>
<div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
  <p
    style={{
      fontWeight: 600,
      fontSize: '1.1rem',
      marginBottom: '0.75rem',
    }}
  >
    <a
      href="https://biom-mass.org/repository?facetTab=files&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22HPFS%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D"
      target="_blank"
      style={{
        display: 'inline-block',
        backgroundColor: '#d32f2f',
        color: '#ffffff',
        padding: '10px 20px',
        borderRadius: '6px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = '#b71c1c')}
      onMouseLeave={(e) => (e.target.style.backgroundColor = '#d32f2f')}
    >
      Access or download all data for HPFS Project
    </a>
  </p>
</div>
<br/>
<br/>
SRA bioproject: <a href="https://www.ncbi.nlm.nih.gov/bioproject/354235">354235</a>
<br/>
<br/>

References: <a href="https://pubmed.ncbi.nlm.nih.gov/24843156/">Franzosa EA, Morgan XC, Segata N, Waldron L, Reyes J, Earl AM, Giannoukos G, Boylan MR, Ciulla D, Gevers D, Izard J, Garrett WS, Chan AT, Huttenhower C. Relating the metatranscriptome and metagenome of the human gut. Proc Natl Acad Sci U S A. 2014 Jun 3;111(22):E2329-38. </a> and <a href="https://pubmed.ncbi.nlm.nih.gov/29335554/">Mehta RS, Abu-Ali GS, Drew DA, Lloyd-Price J, Subramanian A, Lochhead P, Joshi AD, Ivey KL, Khalili H, Brown GT, DuLong C, Song M, Nguyen LH, Mallick H, Rimm EB, Izard J, Huttenhower C, Chan AT. Stability of the human faecal microbiome in a cohort of adult men. Nat Microbiol. 2018 Mar;3(3):347-355. </a> and <a href=""></a>.

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
