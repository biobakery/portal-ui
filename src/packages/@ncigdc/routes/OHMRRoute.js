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
  height: 65rem',
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
        <Title>OHMR Program</Title>
        <ImageContainerSmall>
          <LogoContainer><a href="https://hcmph.sph.harvard.edu/"><img src={HCMPHLogo} alt="HCMPH"/></a></LogoContainer>
        </ImageContainerSmall>
        <AboutText>
          <span>
The One Health Microbiome Resource (OHMR) is a collaboration between academia and industry with a research focus on the microbiome in companion animals. This repository holds processed metagenomic data for 20 cat and dog microbiome studies, where each study's directory contains the output for assembly and reference-based taxonomic and functional profiling.
<br/>
<br/>
<div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
  <h3 style={{ fontWeight: 700, fontSize: '1.4rem', marginBottom: '1rem' }}>
    Access or download all data for OHMR Projects
  </h3>

<div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
  <h3 style={{ fontWeight: 700, fontSize: '1.4rem', marginBottom: '1rem' }}>
    Access or download all data for OHMR Sub-Projects
  </h3>

  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '0.75rem',
    }}
  >
    {[
      {
        label: 'OHMR_Alessandri',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Alessandri%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Allaway',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Allaway%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Ateba',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Ateba%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Deusch2014',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Deusch2014%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Deusch2015',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Deusch2015%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Hills_Cross_sectional_Study_1',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Hills_Cross_sectional_Study_1%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Hills_Cross_sectional_Study_2',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Hills_Cross_sectional_Study_2%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Hills_Cross_sectional_Study_3',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Hills_Cross_sectional_Study_3%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Hills_Diet_Intervention_Study_1',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Hills_Diet_Intervention_Study_1%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Hills_Diet_Intervention_Study_2',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Hills_Diet_Intervention_Study_2%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Hills_Diet_Intervention_Study_3',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Hills_Diet_Intervention_Study_3%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Hills_Diet_Intervention_Study_4',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Hills_Diet_Intervention_Study_4%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Hills_Diet_Intervention_Study_5',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Hills_Diet_Intervention_Study_5%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Liu',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Liu%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Ma',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Ma%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Maldonado_Contreras',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Maldonado_Contreras%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Tanprasertsuk',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Tanprasertsuk%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Wang',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Wang%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Xu',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Xu%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
      {
        label: 'OHMR_Young',
        url: 'https://biom-mass.org/repository?facetTab=cases&files_sort=%5B%7B%22field%22%3A%22file_size%22%2C%22order%22%3A%22desc%22%7D%5D&filters=%7B%22op%22%3A%22and%22%2C%22content%22%3A%5B%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.program.name%22%2C%22value%22%3A%5B%22OHMR%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22cases.project.project_id%22%2C%22value%22%3A%5B%22OHMR_Young%22%5D%7D%7D%2C%7B%22op%22%3A%22in%22%2C%22content%22%3A%7B%22field%22%3A%22files.data_merged%22%2C%22value%22%3A%5B%22yes%22%5D%7D%7D%5D%7D',
      },
    ].map((proj) => (
      <a
        key={proj.label}
        href={proj.url}
        target="_blank"
        style={{
          display: 'inline-block',
          backgroundColor: '#d32f2f',
          color: '#ffffff',
          padding: '10px 16px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '0.95rem',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#b71c1c')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#d32f2f')}
      >
        {proj.label}
      </a>
    ))}
  </div>
</div>


<br/>
<br/>
Reference:Tobyn Branck, Zhiji Hu, William A Nickols, Aaron M Walsh, Amrisha Bhosle, Meghan I Short, Jacob T Nearing, Francesco Asnicar, Lauren J McIver, Sagun Maharjan, Ali Rahnavard, Artemis S Louyakis, Dayakar V Badri, Christoph Brockel, Kelsey N Thompson, Curtis Huttenhower, Comprehensive profile of the companion animal gut microbiome integrating reference-based and reference-free methods, The ISME Journal, Volume 18, Issue 1, January 2024, wrae201, 
<br/>
https://doi.org/10.1093/ismejo/wrae201
<br/>
<br/>

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
