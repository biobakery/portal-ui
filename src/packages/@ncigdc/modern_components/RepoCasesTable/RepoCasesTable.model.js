// @flow
import React from 'react';
import _ from 'lodash';
import {
  RepositoryCasesLink,
  RepositoryFilesLink,
} from '@ncigdc/components/Links/RepositoryLink';
import AddCaseFilesToCartButton from '@ncigdc/components/AddCaseFilesToCartButton';
import ProjectLink from '@ncigdc/components/Links/ProjectLink';
import CaseLink from '@ncigdc/components/Links/CaseLink';
import { Th, Td, ThNum, TdNum } from '@ncigdc/uikit/Table';
import { makeFilter } from '@ncigdc/utils/filters';
import ageDisplay from '@ncigdc/utils/ageDisplay';
import withRouter from '@ncigdc/utils/withRouter';
import {
  createDataCategoryColumns,
  createSelectColumn,
} from '@ncigdc/tableModels/utils';
import { AnnotationCountLink } from '@ncigdc/components/Links/AnnotationCountLink';

import ImageViewerLink from '@ncigdc/components/Links/ImageViewerLink';
import { RepositorySlideCount } from '@ncigdc/modern_components/Counts';
import { MicroscopeIcon } from '@ncigdc/theme/icons';
import { DISPLAY_SLIDES } from '@ncigdc/utils/constants';
import { Tooltip } from '@ncigdc/uikit/Tooltip';
import { ForTsvExport } from '@ncigdc/components/DownloadTableToTsvButton';

import { PROJECTLINK } from '@ncigdc/utils/constants'

const youngestDiagnosis = (
  p: { age_at_diagnosis: number },
  c: { age_at_diagnosis: number },
): { age_at_diagnosis: number } =>
  c.age_at_diagnosis < p.age_at_diagnosis ? c : p;

const dataCategoryColumns = createDataCategoryColumns({
  title: 'Available Files per Data Category',
  countKey: 'file_count',
  Link: RepositoryFilesLink,
  getCellLinkFilters: node => [
    {
      field: 'cases.case_id',
      value: node.case_id,
    },
  ],
  getTotalLinkFilters: hits => [],
});

const FilesLink = ({ node, fields = [], children }) =>
  children === '0' ? (
    <span>0</span>
  ) : (
    <RepositoryFilesLink
      query={{
        filters: makeFilter([
          { field: 'cases.case_id', value: [node.case_id] },
          ...fields,
        ]),
      }}
    >
      {children}
    </RepositoryFilesLink>
  );

const getProjectIdFilter = projects =>
  makeFilter([
    {
      field: 'cases.project.project_id',
      value: projects.edges.map(({ node: p }) => p.project_id),
    },
  ]);

const casesTableModel = [
  {
    name: 'Participant UUID',
    id: 'case_id',
    id_source: 'case_id',
    hidden: false,
    downloadable: true,
    th: () => (
      <Th key="case_id" rowSpan="2">
        Participant UUID
      </Th>
    ),
    td: ({ node }) => <Td>{node.case_id}</Td>,
  },
  {
    name: 'Project',
    id: 'project.project_id',
    id_source: 'project.project_id',
    downloadable: true,
    sortable: true,
    th: () => (
      <Th key="project_id" rowSpan="2">
        Project
      </Th>
    ),
    td: ({ node, index }) => (
      <Td>
        <a href={PROJECTLINK + node.project.project_id}>
          {node.project.project_id}
        </a>
      </Td>
    ),
  },
  {
    name: 'Primary Site',
    id: 'primary_site',
    id_source: 'primary_site',
    sortable: true,
    downloadable: true,
    th: () => (
      <Th key="primary_site" rowSpan="2">
        Primary Site
      </Th>
    ),
    td: ({ node }) => <Td key="primary_site">{node.primary_site}</Td>,
  },
  {
    name: 'Metadata',
    id: 'Metadata',
    id_source: 'Metadata',
    sortable: false,
    downloadable: true,
    th: () => (
      <Th key="metadatacase_count" rowSpan="2">Metadata</Th>
    ),
    td: ({ node }) => <Td key="metdatacase_count">{node.metadataCase.metadata_count}</Td>,
  },
  {
    name: 'Files',
    id: 'summary.file_count',
    id_source: 'summary.file_count',
    sortable: true,
    downloadable: true,
    th: () => (
      <Th key="summary.file_count" rowSpan="2">
        Files
      </Th>
    ),
    td: ({ node }) => (
      <Td key="summary.file_count">
        {node.summary.file_count.toLocaleString()}
      </Td>
    ),
    total: withRouter(({ hits, query }) => (
      <Td>
        <RepositoryCasesLink
          query={{
            filters: query.filters ? getProjectIdFilter(hits) : null,
          }}
        >
          {hits.edges
            .reduce((acc, val) => acc + val.node.summary.case_count, 0)
            .toLocaleString()}
        </RepositoryCasesLink>
      </Td>
    )),
  },
];

export default casesTableModel;
