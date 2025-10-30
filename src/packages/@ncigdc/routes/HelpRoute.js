/ @flow

import React from 'react';
import { Row, Column } from '@ncigdc/uikit/Flex';
import styled from '@ncigdc/theme/styled';
import { zDepth1 } from '@ncigdc/theme/mixins';

import MLSCLogo from '@ncigdc/theme/images/mlsc_logo.png';
import HutlabLogo from '@ncigdc/theme/images/hutlab_logo.png';
import TerraLogo from '@ncigdc/theme/images/terra_logo.png';

import {
  RepositoryFilesLink,
  RepositoryCasesLink,
  RepositorySamplesLink,
} from '@ncigdc/components/Links/RepositoryLink';
import AuthLink from '@ncigdc/components/Links/AuthLink';

const Title = styled.div({
  color: 'white',
  fontSize: '2.75rem',
  fontWeight: 600,
  lineHeight: 1.3,
  textAlign: 'center',
  marginTop: '0.5rem',
});

const SubTitle = styled.div({
  color: 'white',
  fontSize: '1.75rem',
  fontWeight: 400,
  textAlign: 'center',
});

const AboutText = styled.div({
  fontSize: '1.25rem', // slightly larger
  lineHeight: 1.7,
  maxWidth: '1100px',
  margin: '2rem auto 0',
  padding: '0 1.5rem',
  overflowWrap: 'anywhere',
  textAlign: 'left',
  '@media (max-width: 1024px)': {
    fontSize: '1.1rem',
    padding: '0 1rem',
  },
});

const ImageContainer = styled(Row, {
  margin: '2rem 0',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1.5rem',
  width: '100%',
  padding: '0 1.25rem',
  boxSizing: 'border-box',
});

const GradientContainer = styled(Row, {
  backgroundColor: '#000',
  backgroundImage:
    'radial-gradient(ellipse at center, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 48%, rgba(73,129,189,1) 100%)',
  width: '100%',
  boxSizing: 'border-box',
});

const containerStyle = {
  flex: 1,
  padding: '3rem 0 4rem',
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',
};

const LogoContainer = styled(Column, {
  ...zDepth1,
  backgroundColor: 'white',
  border: '2px solid rgb(37, 208, 182)',
  margin: 'auto',
  padding: '0.75rem',
  borderRadius: '0.5rem',
  maxWidth: '220px',
  width: '100%',
  boxSizing: 'border-box',
  alignItems: 'center',
});

const InsideContainer = styled.div(containerStyle);

const HelpInfo = () => (
  <Column className="test-downloadinfo">
    <GradientContainer>
      <InsideContainer flex="1">
        <SubTitle>Meta-omic Datasets</SubTitle>
        <Title>BIOM-Mass Data Portal Help</Title>

        <AboutText>
          <br />
          <p>
            The BIOM-Mass portal hosts multi&apos;omic datasets and metadata from a
            variety of microbiome epidemiology and environmental studies. This includes
            metagenomic and metatranscriptomic sequencing (FASTQ files), metabolomic
            data, and processed data products (e.g. taxonomic and functional profiling).{' '}
            <b>
              Most of the data on BIOM-Mass is freely available for download and does
              not require an account.
            </b>
          </p>
          <br />
          <p>
            BIOM-Mass accounts are needed only to access restricted datasets. If your
            project requires access to restricted data, please email the BIOM-Mass admin
            team(link) and include a statement from an authorized PI indicating which
            project(s) the requestor should access. Accounts will only be provisioned for
            authorized individuals.
          </p>
          <br />
          <p>
            All non-restricted small files (e.g. data products and metadata) hosted on
            BIOM-Mass are freely available for download without an account. Large data
            (e.g. FASTQ files) are hosted in the Google cloud, with user-pays download,
            linked from the repository page. These FASTQs do not require a BIOM-Mass
            account to download, but you will be prompted to log in with your Google
            account to pay download fees.
          </p>
          <br />
          <br />
          <b>Download instructions</b>
          <p>
            <b>Processed data download (most common use case)</b>
          </p>
          <ol>
            <li>
              Click on the “Projects” tab, then click on the link for the project whose
              data you would like to download. This will take you to the information page
              for your project.
            </li>
            <li>
              From this page, click on the link that says “all of the files for the ####
              project”. This will take you to the “files” page and show you all possible
              files to download for your project.
            </li>
            <li>
              Use the check boxes on the left side of the page to filter for the types of
              data you would like to download. The most common use case is to download all
              taxonomic and functional profiles from a project for analysis. To find these
              quickly, click “Data Merged = yes” on the left side. This will select the
              data tables containing merged profile products for the entire dataset.
            </li>
            <li>
              Right click on the file you want to download, choose “save linked file as”,
              and save your file.
            </li>
          </ol>
          <br />
          <p>
            <b>Metadata download</b>
          </p>
          <ol>
            <li>
              To find metadata for a project, find your project files by following steps 1
              and 2 described in “Processed Data Download”.
            </li>
            <li>
              Click “Data format = csv” on the left side. This will again select any
              merged tabular files containing all covariates for the chosen project.
            </li>
            <li>
              Right click on the file you want to download, choose “save linked file as”,
              and save your file.
            </li>
          </ol>
          <br />
          <p>
            <b>Sequencing data (FASTQ) download</b>
          </p>
          <ol>
            <li>
              Click on the “Projects” tab, then click on the link for the project whose
              data you would like to download. This will take you to the information page
              for your project. If the sequencing data of interest is on SRA, this page
              will include an SRA link. Note that in this case, you may be able to
              download a raw version of the equivalent data freely from the SRA.
            </li>
            <li>
              To download the FASTQ files from BIOM-Mass, click on the link that says “all
              of the files for the #### project”. This will take you to the “files” page
              and show you all possible files to download for your project.
            </li>
            <li>Click “Data Category = raw reads” on the left side. </li>
            <li>
              Click on the link to the file(s) you would like to download. You will be
              prompted to{' '}
              <a href="https://accounts.google.com/">log-in to your Google account</a> to
              pay for data download costs.
            </li>
          </ol>
        </AboutText>
      </InsideContainer>
    </GradientContainer>

    <Column style={{ paddingTop: '7rem', alignItems: 'center' }}>
      <Row style={{ textAlign: 'center' }}>
        <ImageContainer>
          <LogoContainer>
            <a href="http://huttenhower.sph.harvard.edu/">
              <img
                src={HutlabLogo}
                alt="Huttenhower"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          </LogoContainer>

          <LogoContainer>
            <a href="http://www.masslifesciences.com">
              <img
                src={MLSCLogo}
                alt="Massachusetts Life Sciences Center"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          </LogoContainer>
          <LogoContainer>
            <a href="https://terra.bio/">
              <img
                src={TerraLogo}
                alt="Terra"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          </LogoContainer>
        </ImageContainer>
      </Row>
    </Column>
  </Column>
);
export default HelpInfo;