// @flow

import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import styled from '@ncigdc/theme/styled';
import DoubleHelix from '@ncigdc/theme/icons/DoubleHelix';
import MutationIcon from '@ncigdc/theme/icons/Mutation';
import DatabaseIcon from '@ncigdc/theme/icons/Database';

import ProjectsLink from '@ncigdc/components/Links/ProjectsLink';
import { RepositoryFilesLink, RepositoryCasesLink, RepositorySamplesLink } from '@ncigdc/components/Links/RepositoryLink';

import { Row, Column } from '@ncigdc/uikit/Flex';

const linkStyle = {
  textDecoration: 'none !important',
  color: 'white !important',
};

const Programs = styled(ProjectsLink, linkStyle);
const Projects = styled(ProjectsLink, linkStyle);
const RepositoryFiles = styled(RepositoryFilesLink, linkStyle);
const RepositoryCases = styled(RepositoryCasesLink, linkStyle);
const RepositorySamples = styled(RepositorySamplesLink, linkStyle);

const CountBox = styled(Column, {
  padding: '1.5rem',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled(Row, {
  justifyContent: 'center',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
});

const PortalSummary = compose(
  branch(
    ({ viewer }) =>
      !viewer.count.rawFiles,
    renderComponent(() => <div>No data found.</div>),
  ),
  connect(state => ({
    dataRelease: state.versionInfo.dataRelease,
  })),
)(props => (
  <span>
    <Row style={{ padding: '2rem', alignItems: 'baseline' }}>
      <div style={{ fontSize: '2.3rem', color: 'rgb(70, 70, 70)' }}>
        Data Portal Summary
      </div>
      <div
        style={{
          fontSize: '1.3rem',
          color: 'rgb(37, 97, 122)',
          marginLeft: '2rem',
        }}
      >
        {props.dataRelease}
      </div>
    </Row>
    <Column>
      <Row>
        <CountBox>
          <Title className="test-projects-label">Programs</Title>
          <Row>
           <Programs>
              <i
                style={{ color: '#01b987', fontSize: '3rem' }}
                className="fa fa-folder-open-o"
              />
            </Programs>
            <span style={{ fontSize: '2.5rem', marginLeft: '0.5rem' }}>
              <span> {props.viewer.count.programs} </span>
            </span>
          </Row>
        </CountBox>
        <CountBox>
          <Title className="test-projects-label">Projects</Title>
          <Row>
           <Projects>
              <i
                style={{ color: '#01b987', fontSize: '3rem' }}
                className="icon-gdc-projects project-icon"
              />
            </Projects>
            <span style={{ fontSize: '2.5rem', marginLeft: '0.5rem' }}>
              <span> {props.viewer.count.projects} </span>
            </span>
          </Row>
        </CountBox>
        <CountBox>
          <Title className="test-primary-sites-label">Participants</Title>
          <Row>
            <RepositoryCases>
              <i
                style={{ color: '#01b987', fontSize: '3rem' }}
                className="fa fa-users data-icon"
              />
           </RepositoryCases>
            <span style={{ fontSize: '2.5rem', marginLeft: '0.5rem' }}>
              <span> {props.viewer.count.participants} </span>
            </span>
          </Row>
        </CountBox>
      </Row>
      <Row>
        <CountBox>
          <Title className="test-files-label">Data Formats</Title>
          <Row>
            <RepositoryFiles>
              <i
                style={{ color: '#01b987', fontSize: '3rem' }}
                className="fa fa-file-code-o data-icon"
              />
             </RepositoryFiles>
            <span style={{ fontSize: '2.5rem', marginLeft: '0.5rem' }}>
              <span> {props.viewer.count.dataFormats} </span>
            </span>
          </Row>
        </CountBox>
        <CountBox>
          <Title className="test-genes-label">Raw Files</Title>
          <Row>
            <RepositoryFiles>
              <DoubleHelix color="#01b987" width={20} height={35} />
            </RepositoryFiles>
            <span style={{ fontSize: '2.5rem', marginLeft: '0.5rem' }}>
              <span>{props.viewer.count.rawFiles}</span>
            </span>
          </Row>
        </CountBox>
        <CountBox>
          <Title className="test-mutations-label">Total Data</Title>
          <Row>
            <RepositoryFiles>
              <i 
                style={{ color:"#01b987", fontSize: '3rem'}}
                className="fa fa-database" 
              />
            </RepositoryFiles>
            <span style={{ fontSize: '2.5rem', marginLeft: '0.5rem' }}>
              <span>{props.viewer.count.totalData}</span>
            </span>
          </Row>
        </CountBox>
      </Row>
    </Column>
  </span>
));

export default PortalSummary;
