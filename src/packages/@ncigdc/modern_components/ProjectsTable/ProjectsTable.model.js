// @flow
import React from 'react';
import {
  RepositoryCasesLink,
  RepositoryFilesLink,
} from '@ncigdc/components/Links/RepositoryLink';
import { Th, Td, ThNum, TdNum } from '@ncigdc/uikit/Table';
import { makeFilter } from '@ncigdc/utils/filters';
import formatFileSize from '@ncigdc/utils/formatFileSize';
import withRouter from '@ncigdc/utils/withRouter';
import { createDataCategoryColumns } from '@ncigdc/tableModels/utils';
import CollapsibleList from '@ncigdc/uikit/CollapsibleList';

import { PROJECTLINK } from '@ncigdc/utils/constants'

type TLinkProps = { node: Object, fields?: Array<Object>, children?: mixed };
type TLink = (props: TLinkProps) => any;

const getProjectIdFilter = projects =>
  makeFilter([
    {
      field: 'cases.project.project_id',
      value: projects.edges.map(({ node: p }) => p.project_id),
    },
  ]);

const projectsTableModel = [
  {
    name: 'Project',
    id: 'project_id',
    sortable: true,
    downloadable: true,
    th: () => <Th rowSpan="2">Project</Th>,
    td: ({ node }) => (
      <Td>
        <a href={node.program.name.toLowerCase()}>
          {node.project_id}
        </a>
      </Td>
    ),
  },
  {
    name: 'Sample Site',
    id: 'primary_site',
    sortable: true,
    downloadable: true,
    th: () => <Th rowSpan="2">Sample Site</Th>,
    td: ({ node }) => (
      <Td
        key="primary_site"
        style={{
          maxWidth: '200px',
          padding: '3px 15px 3px 3px',
          whiteSpace: 'normal',
        }}
      >
        {node.primary_site.length > 1 && (
          <CollapsibleList
            liStyle={{ whiteSpace: 'normal', listStyleType: 'disc' }}
            toggleStyle={{ fontStyle: 'normal' }}
            data={node.primary_site.slice(0).sort()}
            limit={0}
            expandText={`${node.primary_site.length} Primary Sites`}
            collapseText="collapse"
          />
        )}
        {node.primary_site.length <= 1 && node.primary_site}
      </Td>
    ),
  },
  {
    name: 'Participants',
    id: 'summary.case_count',
    sortable: true,
    downloadable: true,
    th: () => <ThNum rowSpan="2">Total Participants</ThNum>,
    td: ({ node }) => (
      <TdNum>
        {node.summary.case_count.toLocaleString()}
      </TdNum>
    ),
    total: withRouter(({ hits, query }) => (
      <TdNum>
          {hits.edges
            .reduce((acc, val) => acc + val.node.summary.case_count, 0)
            .toLocaleString()}
      </TdNum>
    )),
  },
 {
    name: 'Files',
    id: 'summary.file_count',
    sortable: true,
    downloadable: true,
    th: () => <ThNum rowSpan="2">Total Files</ThNum>,
    td: ({ node }) => (
      <TdNum>
        {node.summary.file_count.toLocaleString()}
      </TdNum>
    ),
    total: withRouter(({ hits, query }) => (
      <TdNum>
        {hits.edges
          .reduce((acc, val) => acc + val.node.summary.file_count, 0)
          .toLocaleString()}
      </TdNum>
    )),
  },
];

export default projectsTableModel;
