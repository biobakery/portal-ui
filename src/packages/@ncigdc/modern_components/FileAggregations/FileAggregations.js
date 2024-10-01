/* @flow */
/* eslint jsx-a11y/no-static-element-interactions: 0, max-len: 1 */

import React from 'react';

import _ from 'lodash';
import {
  compose,
  withState,
  setDisplayName,
  withPropsOnChange,
} from 'recompose';

import Modal from '@ncigdc/uikit/Modal';
import SuggestionFacet from '@ncigdc/components/Aggregations/SuggestionFacet';
import FacetSelection from '@ncigdc/modern_components/FacetSelection';
import FacetWrapper from '@ncigdc/components/FacetWrapper';
import FacetHeader from '@ncigdc/components/Aggregations/FacetHeader';

import withFacetSelection from '@ncigdc/utils/withFacetSelection';
import escapeForRelay from '@ncigdc/utils/escapeForRelay';
import tryParseJSON from '@ncigdc/utils/tryParseJSON';

import { TBucket } from '@ncigdc/components/Aggregations/types';

import { withTheme } from '@ncigdc/theme';
import FileIcon from '@ncigdc/theme/icons/File';
import { Row } from '@ncigdc/uikit/Flex';

const presetFacets = [
  { field: 'data_category', full: 'files.data_category', type: 'keyword' },
  { field: 'data_version', full: 'files.data_version', type: 'keyword' },
  {
    field: 'experimental_strategy',
    full: 'files.experimental_strategy',
    type: 'keyword',
  },
  { field: 'data_format', full: 'files.data_format', type: 'keyword' },
  { field: 'platform', full: 'files.platform', type: 'keyword' },
  { field: 'access', full: 'files.access', type: 'keyword' },
  { title: "File Size (GB)", field: 'file_size', full: 'files.file_size', type: 'long' },
];

const presetFacetFields = presetFacets.map(x => x.field);
const entityType = 'Files';

const enhance = compose(
  setDisplayName('RepoFileAggregations'),
  withTheme,
  withFacetSelection({
    entityType,
    presetFacetFields,
    validFacetDocTypes: ['files'],
  }),
  withState('fileIdCollapsed', 'setFileIdCollapsed', false),
  withPropsOnChange(['viewer'], ({ viewer }) => ({
    parsedFacets: viewer.repository.files.facets
      ? tryParseJSON(viewer.repository.files.facets, {})
      : {},
  })),
);

const styles = {
  link: {
    textDecoration: 'underline',
    color: '#2a72a5',
  },
};

export type TProps = {
  relay: Object,
  fileIdCollapsed: boolean,
  setFileIdCollapsed: Function,
  facets: { facets: string },
  parsedFacets: Object,
  aggregations: {
    access: { buckets: [TBucket] },
    data_category: { buckets: [TBucket] },
    data_version: { buckets: [TBucket] },
    file_size: { buckets: [TBucket] },
    data_format: { buckets: [TBucket] },
    experimental_strategy: { buckets: [TBucket] },
    platform: { buckets: [TBucket] },
  },
  theme: Object,
  suggestions: Array<Object>,
  setAutocomplete: Function,

  userSelectedFacets: Array<{
    description: String,
    doc_type: String,
    field: String,
    full: String,
    type: 'id' | 'string' | 'long',
  }>,
  handleSelectFacet: Function,
  handleResetFacets: Function,
  handleRequestRemoveFacet: Function,
  presetFacetFields: Array<String>,
  shouldShowFacetSelection: Boolean,
  facetExclusionTest: Function,
  setShouldShowFacetSelection: Function,
};

const FileAggregations = (props: TProps) => (
  <div className="test-file-aggregations">
    {props.userSelectedFacets.map(facet => (
      <FacetWrapper
        isRemovable
        relayVarName="repoFileCustomFacetFields"
        key={facet.full}
        facet={facet}
        aggregation={props.parsedFacets[facet.field]}
        onRequestRemove={() => props.handleRequestRemoveFacet(facet)}
        style={{ borderBottom: `1px solid ${props.theme.greyScale5}` }}
      />
    ))}
    {_.reject(presetFacets, { full: 'files.file_id' }).map(facet => (
      <FacetWrapper
        key={facet.full}
        facet={facet}
        title={facet.title}
        aggregation={
          props.viewer.repository.files.aggregations[
            escapeForRelay(facet.field)
          ]
        }
        relay={props.relay}
        style={{ borderBottom: `1px solid ${props.theme.greyScale5}` }}
        additionalProps={facet.additionalProps}
      />
    ))}
  </div>
);

export default enhance(FileAggregations);
