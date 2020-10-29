// @flow
import React from 'react';
import Relay from 'react-relay/classic';
import _ from 'lodash';
import { compose, withState } from 'recompose';

import { TBucket } from '@ncigdc/components/Aggregations/types';
import withRouter from '@ncigdc/utils/withRouter';
import { parseFilterParam } from '@ncigdc/utils/uri';
import { ColumnCenter, RowCenter, PieTitle, SelfFilteringPie, BottomBorderedBox,  WrappedRow, ShowToggleBox } from './';

import withSize from '@ncigdc/utils/withSize';

export type TProps = {
  push: Function,
  query: Object,
  aggregations: { metadataAggregations: { } },
  setShowingMore: Function,
  showingMore: boolean,
  size: { width: number },
};

const enhance = compose(
  withRouter,
  withState('showingMore', 'setShowingMore', false),
  withSize(),
);

const RepoCasesPiesComponent = ({ 
  aggregations,
  query,
  push,
  showingMore,
  setShowingMore,
  size: { width },
 }: TProps) => {
  const currentFilters =
    (query && parseFilterParam((query || {}).filters, {}).content) || [];
  const currentFieldNames = currentFilters.map(f => f.content.field);
  const pieColMinWidth = width / 5;

  const AllMetadataKeys = aggregations.metadataAggregations.hits.edges.map( x => x.node.metadataKey);
  const AllMetadataTitles = aggregations.metadataAggregations.hits.edges.map( x => x.node.metadataTitle);

  const presetFacets = [];
  for (let ikey = 0; ikey < AllMetadataKeys.length; ikey++) {
      const facettype = (aggregations.metadataAggregations.hits.edges[ikey].node.metadataType === "bucket") ? 'terms': 'long';

      if (! AllMetadataKeys[ikey].includes('sample')) {
      presetFacets.push(
       {
         title: AllMetadataTitles[ikey].charAt(0).toUpperCase() + AllMetadataTitles[ikey].slice(1),
         field_index: ikey,
         field: 'cases.'+AllMetadataKeys[ikey].replace(/__/g, '.'),
         type: facettype,
       });
     }
   }

  return (
  <div className="test-repo-cases-pies">
   <BottomBorderedBox>
    <WrappedRow style={{ maxWidth: `${width}px`, width: '100%' }}>
    {presetFacets.slice(0,5).map(facet => (
        <ColumnCenter style={{ minWidth: `${pieColMinWidth}px` }} className={'test-'+facet.title}>
          <PieTitle>{facet.title}</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations.metadataAggregations.hits.edges[facet.field_index].node, 'metadataValue.buckets')}
            fieldName={facet.field}
            docTypeSingular="case"
            currentFieldNames={currentFieldNames}
            currentFilters={currentFilters}
            query={query}
            push={push}
            path="doc_count"
            height={125}
            width={125}
          />
        </ColumnCenter>
     ))}
    {presetFacets.slice(5).map(facet => (
       showingMore && [
        <ColumnCenter style={{ minWidth: `${pieColMinWidth}px` }} className={'test-'+facet.title}>
          <PieTitle>{facet.title}</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations.metadataAggregations.hits.edges[facet.field_index].node, 'metadataValue.buckets')}
            fieldName={facet.field}
            docTypeSingular="case"
            currentFieldNames={currentFieldNames}
            currentFilters={currentFilters}
            query={query}
            push={push}
            path="doc_count"
            height={125}
            width={125}
          />
        </ColumnCenter>
        ]
    ))}
     </WrappedRow>
     </BottomBorderedBox>
     <RowCenter style={{ marginTop: '-1.5rem' }}>
       <ShowToggleBox onClick={() => setShowingMore(!showingMore)}>
         Show {showingMore ? 'Less' : 'More'}
       </ShowToggleBox>
     </RowCenter>
   </div>
  );
};

const RepoSamplesPiesComponent = ({
  aggregations, 
  query, 
  push, 
  showingMore, 
  setShowingMore, 
  size: { width }, 
 }: TProps) => {
  const currentFilters =
    (query && parseFilterParam((query || {}).filters, {}).content) || [];
  const currentFieldNames = currentFilters.map(f => f.content.field);
  const pieColMinWidth = width / 5;

  const AllMetadataKeys = aggregations.metadataAggregations.hits.edges.map( x => x.node.metadataKey);
  const AllMetadataTitles = aggregations.metadataAggregations.hits.edges.map( x => x.node.metadataTitle);

  const presetFacets = [];
  for (let ikey = 0; ikey < AllMetadataKeys.length; ikey++) {
      const facettype = (aggregations.metadataAggregations.hits.edges[ikey].node.metadataType === "bucket") ? 'terms': 'long';

      if (AllMetadataKeys[ikey].includes('sample')) {
      presetFacets.push(
       { 
         title: AllMetadataTitles[ikey].charAt(0).toUpperCase() + AllMetadataTitles[ikey].slice(1),
         field_index: ikey,
         field: 'cases.samples'+AllMetadataKeys[ikey].replace(/sample__/g, '.'),
         type: facettype,
       });
     }
   }

  return (
  <div className="test-repo-samples-pies">
   <BottomBorderedBox>
    <WrappedRow style={{ maxWidth: `${width}px`, width: '100%' }}>
    {presetFacets.slice(0,5).map(facet => (
        <ColumnCenter style={{ minWidth: `${pieColMinWidth}px` }} className={'test-'+facet.title}>
          <PieTitle>{facet.title}</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations.metadataAggregations.hits.edges[facet.field_index].node, 'metadataValue.buckets')}
            fieldName={facet.field}
            docTypeSingular="sample"
            currentFieldNames={currentFieldNames}
            currentFilters={currentFilters}
            query={query}
            push={push}
            path="doc_count"
            height={125}
            width={125}
          />
        </ColumnCenter>
     ))}
    {presetFacets.slice(5).map(facet => (
       showingMore && [
        <ColumnCenter style={{ minWidth: `${pieColMinWidth}px` }} className={'test-'+facet.title}>
          <PieTitle>{facet.title}</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations.metadataAggregations.hits.edges[facet.field_index].node, 'metadataValue.buckets')}
            fieldName={facet.field}
            docTypeSingular="sample"
            currentFieldNames={currentFieldNames}
            currentFilters={currentFilters}
            query={query}
            push={push}
            path="doc_count"
            height={125}
            width={125}
          />
        </ColumnCenter>
        ]
    ))}
     </WrappedRow>
     </BottomBorderedBox>
     <RowCenter style={{ marginTop: '-1.5rem' }}>
       <ShowToggleBox onClick={() => setShowingMore(!showingMore)}>
         Show {showingMore ? 'Less' : 'More'}
       </ShowToggleBox>
     </RowCenter>
   </div>
  );
};

export const RepoCasesPiesQuery = {
  fragments: {
    aggregations: () => Relay.QL`
      fragment on CaseAggregations {

        metadataAggregations {
          hits(first: 1000) {
            edges {
              node {
                metadataKey
                metadataTitle
                metadataType
                metadataValue {
                  stats {
                    max
                    min
                  }
                  buckets {
                    doc_count
                    key
                  }
               }
             }
            }
           }
        }
      }
    `,
  },
};

const RepoCasesPies = Relay.createContainer(
  enhance(RepoCasesPiesComponent),
  RepoCasesPiesQuery,
);

const RepoSamplesPies = Relay.createContainer(
  enhance(RepoSamplesPiesComponent),
  RepoCasesPiesQuery,
);

export { RepoCasesPies, RepoSamplesPies };
