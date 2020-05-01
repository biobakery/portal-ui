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
    demographic__age: { buckets: [TBucket] },
    demographic__weight: { buckets: [TBucket] },
    demographic__caffiene: { buckets: [TBucket] },
    demographic__bmi: { buckets: [TBucket] },
    demographic__alcohol: { buckets: [TBucket] },
    demographic__diagnosis: { buckets: [TBucket] },
    demographic__smoking: { buckets: [TBucket] },
    demographic__met: { buckets: [TBucket] },
    primary_site: { buckets: [TBucket] },
    project__program__name: { buckets: [TBucket] },
    project__project_id: { buckets: [TBucket] },
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
    title: 'Sample Site',
    field: 'primary_site',
    full: 'cases.primary_site',
    doc_type: 'cases',
    type: 'keyword',
  },
  {
    title: 'Project',
    field: 'project.project_id',
    full: 'cases.project.project_id',
    doc_type: 'cases',
    type: 'terms',
  },
  {
    title: 'Age',
    field: 'demographic.age',
    full: 'cases.demographic.age',
    doc_type: 'cases',
    type: 'terms',
  },
  {
    title: 'Weight (lbs)',
    field: 'demographic.weight',
    full: 'cases.demographic.weight',
    doc_type: 'cases',
    type: 'terms',
  },
  {
    title: 'Caffiene',
    field: 'demographic.caffiene',
    full: 'cases.demographic.caffiene',
    doc_type: 'cases',
    type: 'terms',
  },
  {
    title: 'BMI',
    field: 'demographic.bmi',
    full: 'cases.demographic.bmi',
    doc_type: 'cases',
    type: 'terms',
  },
  {
    title: 'Alcohol',
    field: 'demographic.alcohol',
    full: 'cases.demographic.alcohol',
    doc_type: 'cases',
    type: 'terms',
  },
  {
    title: 'Diagnosis',
    field: 'demographic.diagnosis',
    full: 'cases.demographic.diagnosis',
    doc_type: 'cases',
    type: 'terms',
  },
  {
    title: 'Smoking (pack years)',
    field: 'demographic.smoking',
    full: 'cases.demographic.smoking',
    doc_type: 'cases',
    type: 'terms',
  },
  {
    title: 'Activity (MET)',
    field: 'demographic.met',
    full: 'cases.demographic.met',
    doc_type: 'cases',
    type: 'terms',
  },
];

const presetFacetFields = presetFacets.map(x => x.field);
const entityType = 'RepositoryCases';

const enhance = compose(
  setDisplayName('RepoCaseAggregations'),
  withFacetSelection({
    entityType,
    presetFacetFields,
    validFacetDocTypes: ['cases'],
  }),
  withTheme,
  withState('caseIdCollapsed', 'setCaseIdCollapsed', false),
  withPropsOnChange(['viewer'], ({ viewer }) => ({
    parsedFacets: viewer.repository.cases.facets
      ? tryParseJSON(viewer.repository.cases.facets, {})
      : {},
  })),
);

const styles = {
  link: {
    textDecoration: 'underline',
    color: '#2a72a5',
  },
};

const CaseAggregationsComponent = (props: TProps) => (
  <div className="test-case-aggregations">
    {props.userSelectedFacets.map(facet => (
      <FacetWrapper
        isRemovable
        relayVarName="repoCaseCustomFacetFields"
        key={facet.full}
        facet={facet}
        aggregation={props.parsedFacets[facet.field]}
        onRequestRemove={() => props.handleRequestRemoveFacet(facet)}
        style={{ borderBottom: `1px solid ${props.theme.greyScale5}` }}
      />
    ))}
    {_.reject(presetFacets, { full: 'cases.case_id' }).map(facet => (
      <FacetWrapper
        key={facet.full}
        facet={facet}
        title={facet.title}
        aggregation={
          props.viewer.repository.cases.aggregations[
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

export default enhance(CaseAggregationsComponent);
