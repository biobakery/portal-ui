/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { compose, setDisplayName, mapProps } from 'recompose';
import { Row } from '@ncigdc/uikit/Flex';
import TableActions from '@ncigdc/components/TableActions';
import tableModels from '@ncigdc/tableModels';
import timestamp from '@ncigdc/utils/timestamp';

import Table, { Tr, Td } from '@ncigdc/uikit/Table';

export default compose(
  setDisplayName('ProgramsTablePresentation'),
  connect(state => ({ tableColumns: state.tableColumns.programs.ids })),
  mapProps(props => ({
    ...props,
    hits: props.viewer.programs.hits,
  })),
)(
  ({
    downloadable,
    hits,
    params,
    entityType = 'programs',
    tableHeader,
    tableColumns,
  }) => {
    const tableInfo = tableModels[entityType]
      .slice()
      .filter(x => tableColumns.includes(x.id));
    return (
      <div className="test-programs-table">
        <Row
          style={{
            backgroundColor: 'white',
            padding: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {tableHeader && <h3 className="panel-title">{tableHeader}</h3>}
          <div>
            <b>{hits.total}</b> Programs
          </div>
          <TableActions
            type="program"
            scope="repository"
            arrangeColumnKey={entityType}
            total={hits.total}
            endpoint={entityType}
            downloadable={downloadable}
            downloadFields={tableInfo
              .filter(x => x.downloadable)
              .map(x => x.field || x.id)}
            sortOptions={tableInfo.filter(x => x.sortable)}
            tsvSelector="#programs-table"
            tsvFilename={`programs-table.${timestamp()}.tsv`}
          />
        </Row>
        <div style={{ overflowX: 'auto' }}>
          <Table
            id="programs-table"
            headings={tableInfo
              .filter(x => !x.subHeading)
              .map(x => <x.th key={x.id} />)}
            subheadings={tableInfo
              .filter(x => x.subHeading)
              .map(x => <x.th key={x.id} />)}
            body={
              <tbody>
                {hits.edges.map((e, i) => (
                  <Tr key={e.node.id} index={i}>
                    {tableInfo
                      .filter(x => x.td)
                      .map(x => <x.td key={x.id} node={e.node} />)}
                  </Tr>
                ))}
                <Tr>
                  {hits.total > 1 &&
                    tableInfo
                      .filter(x => x.td)
                      .map(
                        x =>
                          x.total ? (
                            <x.total key={x.id} hits={hits} />
                          ) : (
                            <Td key={x.id} />
                          ),
                      )}
                </Tr>
              </tbody>
            }
          />
        </div>
      </div>
    );
  },
);
