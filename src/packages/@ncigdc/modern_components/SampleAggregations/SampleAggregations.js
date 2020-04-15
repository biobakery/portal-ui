/* @flow */
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
import { Row } from '@ncigdc/uikit/Flex';
import FacetSelection from '@ncigdc/modern_components/FacetSelection';
import FacetWrapper from '@ncigdc/components/FacetWrapper';
import UploadSetButton from '@ncigdc/components/UploadSetButton';
import { withTheme } from '@ncigdc/theme';
import CaseIcon from '@ncigdc/theme/icons/Case';
import withFacetSelection from '@ncigdc/utils/withFacetSelection';
import escapeForRelay from '@ncigdc/utils/escapeForRelay';
import tryParseJSON from '@ncigdc/utils/tryParseJSON';
import FacetHeader from '@ncigdc/components/Aggregations/FacetHeader';
import { UploadCaseSet } from '@ncigdc/components/Modals/UploadSet';

import { TBucket } from '@ncigdc/components/Aggregations/types';

export type TProps = {
  caseIdCollapsed: boolean,
  setCaseIdCollapsed: Function,
  relay: Object,
  facets: { facets: string },
  parsedFacets: Object,
  aggregations: {
    week: { buckets: [TBucket] },
    time: { buckets: [TBucket] },
    fiber: { stats: { max: number, min: number } },
    fat: { stats: { max: number, min: number } },
    iron: { stats: { max: number, min: number } },
    alcohol: { stats: { max: number, min: number } },
    b12: { stats: { max: number, min: number } },
    calories: { stats: { max: number, min: number } },
    carbs: { stats: { max: number, min: number } },
    choline: { stats: { max: number, min: number } },
    folate: { stats: { max: number, min: number } },
    protein: { stats: { max: number, min: number } },
    weight: { stats: { max: number, min: number } },
    met: { stats: { max: number, min: number } }
  },
  setAutocomplete: Function,
  theme: Object,
  suggestions: Array<Object>,

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

const presetFacets = [
  {
    title: 'Week',
    field: 'week',
    full: 'samples.week',
    doc_type: 'samples',
    type: 'terms',
  },
  {
    title: 'Time',
    field: 'time',
    full: 'samples.time',
    doc_type: 'samples',
    type: 'terms',
  },
  {
    title: 'Fiber',
    field: 'fiber',
    full: 'samples.fiber',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Fat',
    field: 'fat',
    full: 'samples.fat',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Iron',
    field: 'iron',
    full: 'samples.iron',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Alcohol',
    field: 'alcohol',
    full: 'samples.alcohol',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'B12',
    field: 'b12',
    full: 'samples.b12',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Calories',
    field: 'calories',
    full: 'samples.calories',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Carbs',
    field: 'carbs',
    full: 'samples.carbs',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Choline',
    field: 'choline',
    full: 'samples.choline',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Folate',
    field: 'folate',
    full: 'samples.folate',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Protein',
    field: 'protein',
    full: 'samples.protein',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Weight (lbs)',
    field: 'iron',
    full: 'samples.weight',
    doc_type: 'samples',
    type: 'long',
  },
  {
    title: 'Activity (MET)',
    field: 'met',
    full: 'samples.met',
    doc_type: 'samples',
    type: 'long',
  },
];

const presetFacetFields = presetFacets.map(x => x.field);
const entityType = 'RepositoryCases';

const enhance = compose(
  setDisplayName('RepoSampleAggregations'),
  withFacetSelection({
    entityType,
    presetFacetFields,
    validFacetDocTypes: ['samples'],
  }),
  withTheme,
  withState('caseIdCollapsed', 'setCaseIdCollapsed', false),
  withPropsOnChange(['viewer'], ({ viewer }) => ({
    parsedFacets: viewer.repository.samples.facets
      ? tryParseJSON(viewer.repository.samples.facets, {})
      : {},
  })),
);

const styles = {
  link: {
    textDecoration: 'underline',
    color: '#2a72a5',
  },
};

const SampleAggregationsComponent = (props: TProps) => (
  <div className="test-case-aggregations">
    {props.userSelectedFacets.map(facet => (
      <FacetWrapper
        isRemovable
        relayVarName="repoSampleCustomFacetFields"
        key={facet.full}
        facet={facet}
        aggregation={props.parsedFacets[facet.field]}
        onRequestRemove={() => props.handleRequestRemoveFacet(facet)}
        style={{ borderBottom: `1px solid ${props.theme.greyScale5}` }}
      />
    ))}
    {_.reject(presetFacets, { full: 'samples.sample_id' }).map(facet => (
      <FacetWrapper
        key={facet.full}
        facet={facet}
        title={facet.title}
        aggregation={
          props.viewer.repository.samples.aggregations[
            escapeForRelay(facet.field)
          ]
        }
        relay={props.relay}
        additionalProps={facet.additionalProps}
        style={{ borderBottom: `1px solid ${props.theme.greyScale5}` }}
      />
    ))}
  </div>
);

export default enhance(SampleAggregationsComponent);
