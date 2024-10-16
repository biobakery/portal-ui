// @flow

import React from 'react';
import { Row, Column } from '@ncigdc/uikit/Flex';
import styled from '@ncigdc/theme/styled';
import { zDepth1 } from '@ncigdc/theme/mixins';

import MLSCLogo from '@ncigdc/theme/images/mlsc_logo.png'
import HutlabLogo from '@ncigdc/theme/images/hutlab_logo.png'
import TerraLogo from '@ncigdc/theme/images/terra_logo.png'

import { RepositoryFilesLink, RepositoryCasesLink, RepositorySamplesLink } from '@ncigdc/components/Links/RepositoryLink';
import AuthLink from '@ncigdc/components/Links/AuthLink';

const styles = {
  iconPadding: {
    paddingRight: '4px',
  },
  downloadTitle: {
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

const HelpInfo = () => (
  <Column className="test-downloadinfo">
    <GradientContainer>
      <InsideContainer flex="1">
        <SubTitle style={{ fontSize: '2rem' }}>
          <span>Meta`omic Datasets</span>
        </SubTitle>
        <Title>BIOM-Mass Data Portal Help</Title>
        <AboutText>

         <br/>

         <span>The BIOM-Mass project hosts open access and restricted data sets that include sample and participant metadata, sequencing data, and processed data. Restricted and large data sets require login with Google or Globus to download. All downloads can be completed from the repository page.</span>

         <br/>
         <br/>

         <b>Metadata download</b>
         <ol>
         <li><AuthLink>Login to the BIOM-Mass Portal</AuthLink> to access the restricted metadata.</li>
         <li>From the <RepositoryCasesLink>repository page</RepositoryCasesLink>, navigate to the <RepositoryCasesLink>participant table</RepositoryCasesLink> or <RepositorySamplesLink>sample table</RepositorySamplesLink> from the tab in the middle of the page. Filter the table, if needed, from any one of the filter tabs on the left-hand side of the page.</li>
         <li>Click on the TSV button on the upper right of the table to download a tsv formatted file of the metadata.</li>
         </ol>


         <b>Sequencing data download</b>
         <ol>
         <li><a href="https://accounts.google.com">Log-in to your Google account</a> for large open access data or to <a href="https://www.globus.org/">Globus</a> for restricted data. <b>Small open access files are available for direct download by clicking on the file name.</b></li>
         <li>From the <RepositoryFilesLink>repository page</RepositoryFilesLink>, navigate to the <RepositoryFilesLink>file table</RepositoryFilesLink> using the tabs in the middle of the page. Filter the table, if needed, using any one of the filter tabs on the left-hand side of the page.</li>
         <li>Click on the file of interest. If the file is small and open access it will automatically be downloaded. If the file is large and open access, you will be redirected to the Google Cloud Bucket Console page listing all files in the folder. At the top of the page you will be prompted to "Select a billing project" where you can enter in the project to charge the costs for downloading the data. If the file is restricted access and you have been granted access you will see a listing of all files in the folder. If you have not been granted access you will see an error from Google Cloud stating "Sorry, the server was not able to fulfill your request" which indicates that you do not have permission to view a listing or access the files. If the file is restricted and hosted through Globus, you will be redirected to the Globus login to access the file for download.</li>
         </ol>

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

export default HelpInfo;
