// @flow

import React from 'react';
import { uniq } from 'lodash';
import { Th, Td, TdNum, ThNum } from '@ncigdc/uikit/Table';
import { makeFilter } from '@ncigdc/utils/filters';
import FileSize from '@ncigdc/components/FileSize';

import { PROJECTLINK } from '@ncigdc/utils/constants'
import { STORAGELINK } from '@ncigdc/utils/constants'

const filesTableModel = [
  {
    name: 'File UUID',
    id: 'file_id',
    th: () => <Th>File UUID</Th>,
    td: ({ node }) => (
      <Td style={{ whiteSpace: 'pre-line', wordBreak: 'break-all' }}>
        {node.file_id}
      </Td>
    ),
    sortable: true,
    downloadable: true,
    hidden: true,
  },
  {
    name: 'Access',
    id: 'access',
    sortable: true,
    downloadable: true,
    th: () => <Th>Access</Th>,
    td: ({ node }) => (
      <Td>
        {node.access === 'open' && <i className="fa fa-unlock-alt" />}
        {node.access === 'controlled' && <i className="fa fa-lock" />}
        <span
          style={{
            marginLeft: '0.3rem',
          }}
        >
          {node.access}
        </span>
      </Td>
    ),
  },
  {
    name: 'File Name',
    id: 'file_name',
    file_id: 'file_id',
    sortable: true,
    downloadable: true,
    th: () => <Th>File Name</Th>,
    td: ({ node }) => (
      <Td style={{ whiteSpace: 'pre-line', wordBreak: 'break-all' }}>
         <a href={node.file_id.replace("gs://",STORAGELINK)}>
          {node.file_name}
        </a>
      </Td>
    ),
  },
  {
    name: 'Project',
    id: 'cases.project.project_id',
    th: () => <Th>Project</Th>,
    td: ({ node }) => (
      <Td>
        {uniq(
          node.cases.hits.edges.map(e => e.node.project.project_id),
        ).map(pId => (
          <a href={PROJECTLINK + pId}>
            {pId}
          </a>
        ))}
      </Td>
    ),
  },
  {
    name: 'Data Category',
    id: 'data_category',
    th: () => <Th>Data Category</Th>,
    td: ({ node }) => <Td>{node.data_category || '--'}</Td>,
    sortable: true,
    downloadable: true,
  },
  {
    name: 'Data Format',
    id: 'data_format',
    th: () => <Th>Data Format</Th>,
    td: ({ node }) => <Td>{node.data_format || '--'}</Td>,
    sortable: true,
    downloadable: true,
  },
  {
    name: 'Size',
    id: 'file_size',
    th: () => <ThNum>File Size</ThNum>,
    td: ({ node }) => (
      <TdNum>
        <FileSize bytes={node.file_size} />
      </TdNum>
    ),
    sortable: true,
    downloadable: true,
  },
  {
    name: 'Platform',
    id: 'platform',
    th: () => <Th>Platform</Th>,
    td: ({ node }) => <Td>{node.platform || '--'}</Td>,
    sortable: false,
    downloadable: true,
    hidden: true,
  },
];

export default filesTableModel;
