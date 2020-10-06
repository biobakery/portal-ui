/* @flow */

import React from 'react';
import { compose, setDisplayName, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import Pagination from '@ncigdc/components/Pagination';
import Showing from '@ncigdc/components/Pagination/Showing';
import { Row } from '@ncigdc/uikit/Flex';
import TableActions from '@ncigdc/components/TableActions';
import tableModels from '@ncigdc/tableModels';
import Table, { Tr, Th, Td } from '@ncigdc/uikit/Table';
import { theme } from '@ncigdc/theme';
import withSelectIds from '@ncigdc/utils/withSelectIds';
import timestamp from '@ncigdc/utils/timestamp';

import { MAX_METADATA_SHOW } from '@ncigdc/utils/constants'

export default compose(
  setDisplayName('RepoCasesTablePresentation'),
  connect(state => ({ tableColumns: state.tableColumns.cases.ids })),
  branch(
    ({ viewer }) =>
      !viewer.repository.cases.hits ||
      !viewer.repository.cases.hits.edges.length,
    renderComponent(() => <div>No results found</div>),
  ),
  withSelectIds,
)(
  ({
    viewer: { repository: { cases: { hits } } },
    entityType = 'cases',
    tableColumns,
    variables,
    selectedIds,
    setSelectedIds,
    score,
    sort,
  }) => {

    const addedTableInfo = [];

    const AllMetadataKeys = hits.edges[0].node.metadataCase.hits.edges.map( x => x.node.metadataKey);

    for (let ikey = 0; ikey < AllMetadataKeys.length; ikey++) {
        const ishidden = (ikey > MAX_METADATA_SHOW) ? true: false;
        const issource = (ishidden) ? 'Metadata.hidden': 'Metadata';
        addedTableInfo.push(
          {
            name: AllMetadataKeys[ikey],
            id: 'demographic.metadataCase.'+AllMetadataKeys[ikey].toLowerCase(),
            id_source: issource,
            sortable: false,
            downloadable: true,
            hidden: ishidden,
            th: () => <Th rowSpan="2">{AllMetadataKeys[ikey]}</Th>,
            td: ({ node }) => (
              <Td>{(node.metadataCase.hits.edges[ikey].node && node.metadataCase.hits.edges[ikey].node.metadataValue) || '--'}</Td>
            ),
         });
    }

    const tableInfo = tableModels[entityType].concat(addedTableInfo)
      .slice()
      .filter(x => tableColumns.includes(x.id_source));

    return (
      <div className="test-cases-table">
        <Row
          style={{
            backgroundColor: 'white',
            padding: '1rem',
            justifyContent: 'space-between',
          }}
        >
          <Showing
            docType="cases"
            prefix={entityType}
            params={variables}
            total={hits.total}
          />
          <TableActions
            type="case"
            scope="repository"
            arrangeColumnKey={entityType}
            total={hits.total}
            endpoint="cases"
            downloadFields={tableInfo
              .filter(x => x.downloadable)
              .map(x => x.field || x.id)}
            sortOptions={tableInfo.filter(x => x.sortable)}
            tsvSelector="#repository-cases-table"
            tsvFilename={`repository-cases-table.${timestamp()}.tsv`}
            score={variables.score}
            sort={variables.cases_sort}
            currentFilters={variables.filters}
            idField="cases.case_id"
            selectedIds={selectedIds}
          />
        </Row>
        <div style={{ overflowX: 'auto' }}>
          <Table
            id="repository-cases-table"
            headings={tableInfo
              .filter(x => !x.subHeading)
              .map(x => (
                <x.th
                  key={x.id}
                  nodes={hits.edges}
                  selectedIds={selectedIds}
                  setSelectedIds={setSelectedIds}
                />
              ))}
            subheadings={tableInfo
              .filter(x => x.subHeading)
              .map(x => <x.th key={x.id} />)}
            body={
              <tbody>
                {hits.edges.map((e, i) => (
                  <Tr
                    key={e.node.id}
                    index={i}
                    style={{
                      ...(selectedIds.includes(e.node.case_id) && {
                        backgroundColor: theme.tableHighlight,
                      }),
                    }}
                  >
                    {tableInfo
                      .filter(x => x.td)
                      .map(x => (
                        <x.td
                          key={x.id}
                          node={e.node}
                          index={i}
                          total={hits.total}
                          edges={hits.edges}
                          selectedIds={selectedIds}
                          setSelectedIds={setSelectedIds}
                        />
                      ))}
                  </Tr>
                ))}
              </tbody>
            }
          />
        </div>
        <Pagination prefix={entityType} params={variables} total={hits.total} />
      </div>
    );
  },
);
