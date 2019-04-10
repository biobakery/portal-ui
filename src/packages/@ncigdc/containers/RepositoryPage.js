/* @flow */

import React from 'react';
import Relay from 'react-relay/classic';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import { Row } from '@ncigdc/uikit/Flex';
import SearchPage from '@ncigdc/components/SearchPage';
import TabbedLinks from '@ncigdc/components/TabbedLinks';
import NoResultsMessage from '@ncigdc/components/NoResultsMessage';
import RepoCasesTable from '@ncigdc/modern_components/RepoCasesTable';
import RepoSamplesTable from '@ncigdc/modern_components/RepoSamplesTable';
import CaseAggregations from '@ncigdc/modern_components/CaseAggregations';
import SampleAggregations from '@ncigdc/modern_components/SampleAggregations';
import FileAggregations from '@ncigdc/modern_components/FileAggregations';

import FilesTable from '@ncigdc/modern_components/FilesTable';
import { SaveIcon } from '@ncigdc/theme/icons';
import withFilters from '@ncigdc/utils/withFilters';
import formatFileSize from '@ncigdc/utils/formatFileSize';
import { RepoCasesPies, RepoSamplesPies } from '@ncigdc/components/TabPieCharts/RepoCasesPies';
import RepoFilesPies from '@ncigdc/components/TabPieCharts/RepoFilesPies';
import withRouter from '@ncigdc/utils/withRouter';
import ActionsRow from '@ncigdc/components/ActionsRow';

export type TProps = {
  push: Function,
  relay: Object,
  dispatch: Function,
  filters: any,
  cases_sort: any,
  viewer: {
    autocomplete_case: {
      hits: Array<Object>,
    },
    autocomplete_sample: {
      hits: Array<Object>,
    },
    autocomplete_file: {
      hits: Array<Object>,
    },
    cart_summary: {
      aggregations: {
        fs: {
          value: number,
        },
      },
    },
    repository: {
      customCaseFacets: {
        facets: {
          facets: string,
        },
      },
      customSampleFacets: {
        facets: {
          facets: string,
        },
      },
      customFileFacets: {
        facets: {
          facets: string,
        },
      },
      cases: {
        aggregations: {},
        pies: {},
        hits: {
          total: number,
        },
      },
      samples: {
        aggregations: {},
        pies: {},
        hits: {
          total: number,
        },
      },
      files: {
        aggregations: {},
        pies: {},
        hits: {
          total: number,
        },
      },
    },
  },
  showFacets: boolean,
  setShowFacets: Function,
};

const enhance = compose(
  setDisplayName('RepositoryPage'),
  connect(),
  withFilters(),
  withRouter,
);

export const RepositoryPageComponent = (props: TProps) => {
  const setAutocompleteCases = (value, onReadyStateChange) =>
    props.relay.setVariables(
      {
        idAutocompleteCase: value,
        runAutocompleteCase: !!value,
      },
      onReadyStateChange,
    );
  const setAutocompleteSamples = (value, onReadyStateChange) =>
    props.relay.setVariables(
      {
        idAutocompleteSample: value,
        runAutocompleteSample: !!value,
      },
      onReadyStateChange,
    );

  const setAutocompleteFiles = (value, onReadyStateChange) =>
    props.relay.setVariables(
      {
        idAutocompleteFile: value,
        runAutocompleteFile: !!value,
      },
      onReadyStateChange,
    );

  const fileCount = props.viewer.repository.files.hits.total;
  const caseCount = props.viewer.repository.cases.hits.total;
  const sampleCount = props.viewer.repository.samples.hits.total;
  const fileSize = props.viewer.cart_summary.aggregations.fs.value;
  return (
    <div className="test-repository-page">
      <SearchPage
        facetTabs={[
          {
            id: 'files',
            text: 'Files',
            component: (
              <FileAggregations
                suggestions={
                  (props.viewer.autocomplete_file || { hits: [] }).hits
                }
                setAutocomplete={setAutocompleteFiles}
                relay={props.relay}
              />
            ),
          },
          {
            id: 'cases',
            text: 'Participants',
            component: (
              <CaseAggregations
                suggestions={
                  (props.viewer.autocomplete_case || { hits: [] }).hits
                }
                setAutocomplete={setAutocompleteCases}
                relay={props.relay}
              />
            ),
          },
          {
            id: 'samples',
            text: 'Samples',
            component: (
              <SampleAggregations
                suggestions={
                  (props.viewer.autocomplete_sample || { hits: [] }).hits
                }
                setAutocomplete={setAutocompleteSamples}
                relay={props.relay}
              />
            ),
          },
        ]}
        results={
          <span>
            <ActionsRow
              totalCases={caseCount}
              totalFiles={fileCount}
              totalSamples={sampleCount}
              filters={props.filters}
            />
            <TabbedLinks
              queryParam="searchTableTab"
              defaultIndex={0}
              tabToolbar={
                <Row spacing="2rem" style={{ alignItems: 'center' }}>
                  <span style={{ flex: 'none' }}>
                    <SaveIcon style={{ marginRight: 5 }} />{' '}
                    <strong>{formatFileSize(fileSize)}</strong>
                  </span>
                </Row>
              }
              links={[
                {
                  id: 'files',
                  text: `Files (${fileCount.toLocaleString()})`,
                  component: !!props.viewer.repository.files.hits.total ? (
                    <div>
                      <RepoFilesPies
                        aggregations={props.viewer.repository.files.pies}
                      />
                      <FilesTable />
                    </div>
                  ) : (
                    <NoResultsMessage>
                      No results found using those filters.
                    </NoResultsMessage>
                  ),
                },
                {
                  id: 'cases',
                  text: `Participants (${caseCount.toLocaleString()})`,
                  component: !!props.viewer.repository.cases.hits.total ? (
                    <div>
                      <RepoCasesPies
                        aggregations={props.viewer.repository.cases.pies}
                      />
                      <RepoCasesTable />
                    </div>
                  ) : (
                    <NoResultsMessage>
                      No results found using those filters.
                    </NoResultsMessage>
                  ),
                },
                {
                  id: 'samples',
                  text: `Samples (${sampleCount.toLocaleString()})`,
                  component: !!props.viewer.repository.samples.hits.total ? (
                    <div>
                      <RepoSamplesPies
                        aggregations={props.viewer.repository.cases.pies}
                      />
                      <RepoSamplesTable />
                    </div>
                  ) : (
                    <NoResultsMessage>
                      No results found using those filters.
                    </NoResultsMessage>
                  ),
                },
              ]}
            />
          </span>
        }
      />
    </div>
  );
};

export const RepositoryPageQuery = {
  initialVariables: {
    cases_offset: null,
    cases_size: null,
    cases_sort: null,
    samples_offset: null,
    samples_size: null,
    samples_sort: null,
    files_offset: null,
    files_size: null,
    files_sort: null,
    filters: null,
    idAutocompleteCase: null,
    idAutocompleteSample: null,
    idAutocompleteFile: null,
    runAutocompleteCase: false,
    runAutocompleteSample: false,
    runAutocompleteFile: false,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Root {
        autocomplete_case: query (query: $idAutocompleteCase types: ["case"]) @include(if: $runAutocompleteCase) {
          hits {
            id
            ...on Case {
              case_id
              project {
                project_id
              }
              submitter_id
            }
          }
        }
        autocomplete_sample: query (query: $idAutocompleteSample types: ["sample"]) @include(if: $runAutocompleteSample) {
          hits {
            id
            ...on Sample {
              sample_id
              project {
                project_id
              }
              submitter_id
            }
          }
        }
        autocomplete_file: query (query: $idAutocompleteFile types: ["file"]) @include(if: $runAutocompleteFile) {
          hits {
            id
            ... on File {
              file_id
              file_name
              submitter_id
            }
          }
        }
        cart_summary {
          aggregations(filters: $filters) {
            fs {
              value
            }
          }
        }
        repository {

          cases {
            pies: aggregations(filters: $filters aggregations_filter_themselves: true) {
              ${RepoCasesPies.getFragment('aggregations')}
            }
            hits(score: "annotations.annotation_id" first: $cases_size offset: $cases_offset, filters: $filters, sort: $cases_sort) {
              total
            }
          }
          samples {
            hits(score: "annotations.annotation_id" first: $samples_size offset: $samples_offset, filters: $filters, sort: $samples_sort) {
              total
            }
          }
          files {

            pies: aggregations(filters: $filters aggregations_filter_themselves: true) {
              ${RepoFilesPies.getFragment('aggregations')}
            }
            hits(first: $files_size offset: $files_offset, filters: $filters, sort: $files_sort) {
              total
            }
          }
        }
      }
    `,
  },
};

const RepositoryPage = Relay.createContainer(
  enhance(RepositoryPageComponent),
  RepositoryPageQuery,
);

export default RepositoryPage;
