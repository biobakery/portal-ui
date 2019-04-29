// @flow
import React from 'react';
import Color from 'color';

import styled from '@ncigdc/theme/styled';
import { Row } from '@ncigdc/uikit/Flex';
import { AnalysisIcon } from '@ncigdc/theme/icons';
import { Tooltip } from '@ncigdc/uikit/Tooltip';

import ProjectsLink from './Links/ProjectsLink';
import ProtocolLink from './Links/ProtocolLink';
import RepositoryLink from './Links/RepositoryLink';

const linkStyle = {
  textDecoration: 'none !important',
  color: 'white !important',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  padding: '0.5rem 1rem 0.5rem 0.5rem',
  textAlign: 'left',
  fontSize: '1.5rem',
  minWidth: '13.5rem',
  margin: 0,
  height: '4rem',
  borderRadius: '6px',
  transition: '0.25s ease all',
  backgroundColor: props => props.backgroundColor || props.theme.primary,
  ':hover': {
    backgroundColor: props =>
      Color(props.backgroundColor || props.theme.primary)
        .lighten(0.2)
        .rgbString(),
  },
};

const Projects = styled(ProjectsLink, linkStyle);
const Repository = styled(RepositoryLink, linkStyle);
const Protocol = styled(ProtocolLink, linkStyle);

const Background = styled.span({
  backgroundColor: 'rgba(255, 255, 255, 0.35)',
  borderRadius: '0.5rem',
  width: '3.6rem',
  height: '3.1rem',
  verticalAlign: 'middle',
  fontSize: '1.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ExploringLinks = () => (
  <Row spacing="2rem" className="test-explore-links">
    <Tooltip Component="View project data">
      <Projects backgroundColor="#1c7960">
        <Background>
          <i className="icon-gdc-projects" />
        </Background>
        &nbsp; <span style={{ verticalAlign: 'middle' }}>Projects</span>
      </Projects>
    </Tooltip>
    <Tooltip Component="Browse and download data">
      <Repository backgroundColor="rgb(3, 111, 173)">
        <Background>
          <i className="fa fa-database" />
        </Background>
        &nbsp; <span style={{ verticalAlign: 'middle' }}>Repository</span>
      </Repository>
    </Tooltip>
    <Tooltip Component="Review protocols">
      <Protocol backgroundColor="#6668c3">
        <Background>
          <i className="fa fa-file" />
        </Background>
        &nbsp; <span style={{ verticalAlign: 'middle' }}>Protocols</span>
      </Protocol>
    </Tooltip>
  </Row>
);

export default ExploringLinks;
