// @flow

import React from 'react';
import { Row, Column } from '@ncigdc/uikit/Flex';
import styled from '@ncigdc/theme/styled';
import { zDepth1 } from '@ncigdc/theme/mixins';

import MLSCLogo from '@ncigdc/theme/images/mlsc_logo.png'
import HutlabLogo from '@ncigdc/theme/images/hutlab_logo.png'
import TerraLogo from '@ncigdc/theme/images/terra_logo.png'

const styles = {
  iconPadding: {
    paddingRight: '4px',
  },
  protocolTitle: {
    paddingTop: '1rem' , 
    paddingBottom: '1rem',
    fontSize: '2rem'
 },
};

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

const Protocol = () => (
  <Column className="test-protocol">
    <GradientContainer>
      <InsideContainer flex="1">
        <SubTitle style={{ fontSize: '2rem' }}>
          <span>Meta`omic Datasets</span>
        </SubTitle>
        <Title>BIOM-Mass Data Portal</Title>
        <AboutText>
          <span>The BIOM-Mass project follows the same protocols as the <a href="https://ibdmdb.org/">Inflammatory Bowel Disease Multi`omics Database (IBDMDB)</a>.</span>
        <SubTitle style={styles.protocolTitle}><span>Metabolomics</span></SubTitle>
         <i class="fa fa-file" style={styles.iconPadding} aria-hidden="true"/>
         <a href="https://www.ibdmdb.org/cb/document/Data%20Generation%20Protocols/MetabolomicsHMP2Protocol.pdf">Metabolomics Protocol</a> :  Methods for sample preparation and processing metabolomics data
        <SubTitle style={styles.protocolTitle}><span>Metatranscriptomics</span></SubTitle>
         <i class="fa fa-file" style={styles.iconPadding} aria-hidden="true"/>
         <a href="https://www.ibdmdb.org/cb/document/Data%20Generation%20Protocols/Host_Transcriptomics_HMP2_protocol.pdf">Metatranscriptomics Protocol</a> :  Methods for library construction and sequencing for metatranscriptomics data
        <SubTitle style={styles.protocolTitle}><span>Sample Extraction</span></SubTitle>
         <div style={{ paddingBottom: '8px' }}>
         <i class="fa fa-file" style={styles.iconPadding} aria-hidden="true"/>
         <a href="https://www.ibdmdb.org/cb/document/Sample%20Handling%20Protocols/Whole_Blood_DNA_Isolation_HMP2_protocol.pdf">Blood Isolation Protocol</a> :  Methods for extracting DNA from whole blood
         </div>
         <div style={{ paddingBottom: '8px' }}>
         <i class="fa fa-file" style={styles.iconPadding} aria-hidden="true"/>
         <a href="https://www.ibdmdb.org/cb/document/Sample%20Handling%20Protocols/Co-Isolation_DNA_RNA_HMP2_protocol.pdf">Frozen Tissue Isolation Protocol</a> :  Methods for extracting DNA and RNA from frozen tissue
         </div>
         <div style={{ paddingBottom: '8px' }}>
         <i class="fa fa-file" style={styles.iconPadding} aria-hidden="true"/>
         <a href="https://www.ibdmdb.org/cb/document/Sample%20Handling%20Protocols/DNA_and_RNA_Stool_Isolation_HMP2_protocol.pdf">Stool Isolation Protocol</a> :  Methods for extracting DNA and RNA from stool
         </div>
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

export default Protocol;
