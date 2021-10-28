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
import NoResultsMessage from '@ncigdc/components/NoResultsMessage';

import { TBucket } from '@ncigdc/components/Aggregations/types';

import { MAX_METADATA_SHOW_AGGREGATIONS } from '@ncigdc/utils/constants';

export type TProps = {
  caseIdCollapsed: boolean,
  setCaseIdCollapsed: Function,
  relay: Object,
  facets: { facets: string },
  parsedFacets: Object,
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

const styles = {
  link: {
    textDecoration: 'underline',
    color: '#2a72a5',
  },
};

const entityType = 'RepositoryCases';

export default compose(
  setDisplayName('RepoCaseAggregations'),
  withTheme,
  withState('caseIdCollapsed', 'setCaseIdCollapsed', false),
  withPropsOnChange(['viewer'], ({ viewer }) => ({
    parsedFacets: viewer.repository.cases.facets
      ? tryParseJSON(viewer.repository.cases.facets, {})
      : {},
  })),
)(
   (props: TProps) => {


   const AllMetadataKeys = (props.viewer.repository.cases.aggregations) ? props.viewer.repository.cases.aggregations.metadataAggregations.hits.edges.map( x => x.node.metadataKey): [];
   const AllMetadataTitles = (props.viewer.repository.cases.aggregations) ? props.viewer.repository.cases.aggregations.metadataAggregations.hits.edges.map( x => x.node.metadataTitle): [];

   const allpresetFacets = [];
   const max_list_items = (MAX_METADATA_SHOW_AGGREGATIONS > AllMetadataKeys.length) ? AllMetadataKeys.length : MAX_METADATA_SHOW_AGGREGATIONS;
   for (let ikey = 0; ikey < AllMetadataKeys.length; ikey++) {
       const facettype = (props.viewer.repository.cases.aggregations.metadataAggregations.hits.edges[ikey].node.metadataType === "bucket") ? 'terms': 'long';
       if (! AllMetadataKeys[ikey].includes("sample") ) {
         allpresetFacets.push(
          { 
            title: AllMetadataTitles[ikey].charAt(0).toUpperCase() + AllMetadataTitles[ikey].slice(1),
            field_index: ikey,
            field: AllMetadataKeys[ikey],
            full: 'cases.'+AllMetadataKeys[ikey],
            doc_type: 'cases',
            type: facettype,
          });
      }
    }

  const presetFacets = allpresetFacets.slice(0, MAX_METADATA_SHOW_AGGREGATIONS);
  const presetFacetFields = presetFacets.map(x => x.field);

  withFacetSelection({
    entityType,
    presetFacetFields,
    validFacetDocTypes: ['cases'],
  });

  return (
  <div className="test-case-aggregations">
    {presetFacets.length === 0 && ( <NoResultsMessage> No fields found using those filters. </NoResultsMessage> )}
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
          props.viewer.repository.cases.aggregations.metadataAggregations.hits.edges[facet.field_index].node.metadataValue
        }
        relay={props.relay}
        additionalProps={facet.additionalProps}
        style={{ borderBottom: `1px solid ${props.theme.greyScale5}` }}
      />
    ))}
  </div>
  );
 },
);

