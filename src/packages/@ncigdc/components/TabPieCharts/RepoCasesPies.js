// @flow
import React from 'react';
import Relay from 'react-relay/classic';
import _ from 'lodash';
import { compose } from 'recompose';

import { TBucket } from '@ncigdc/components/Aggregations/types';
import withRouter from '@ncigdc/utils/withRouter';
import { parseFilterParam } from '@ncigdc/utils/uri';
import { ColumnCenter, RowCenter, PieTitle, SelfFilteringPie } from './';

export type TProps = {
  push: Function,
  query: Object,
  aggregations: {
    demographic__ethnicity: { buckets: [TBucket] },
    demographic__gender: { buckets: [TBucket] },
    demographic__race: { buckets: [TBucket] },
    metadata_participant__age_2012:  { buckets: [TBucket] },
    metadata_participant__totMETs1: { buckets: [TBucket] },
    metadata_participant__weight_lbs: { buckets: [TBucket] },
    primary_site: { buckets: [TBucket] },
    project__program__name: { buckets: [TBucket] },
    project__project_id: { buckets: [TBucket] },
  },
};

const enhance = compose(withRouter);

const RepoCasesPiesComponent = ({ aggregations, query, push }: TProps) => {
  const currentFilters =
    (query && parseFilterParam((query || {}).filters, {}).content) || [];
  const currentFieldNames = currentFilters.map(f => f.content.field);
  return (
    <RowCenter>
      <ColumnCenter className="test-primary-site">
        <PieTitle>Primary Site</PieTitle>
        <SelfFilteringPie
          buckets={_.get(aggregations, 'primary_site.buckets')}
          fieldName="cases.primary_site"
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
      <ColumnCenter className="test-project">
        <PieTitle>Project</PieTitle>
        <SelfFilteringPie
          buckets={_.get(aggregations, 'project__project_id.buckets')}
          fieldName="cases.project.project_id"
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
      <ColumnCenter className="test-age">
        <PieTitle>Age in 2012</PieTitle>
        <SelfFilteringPie
          buckets={_.get(aggregations, 'metadata_participant__age_2012.buckets')}
          fieldName="cases.metadata_participant.age_2012"
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
      <ColumnCenter className="test-weight">
        <PieTitle>Weight Lbs</PieTitle>
        <SelfFilteringPie
          buckets={_.get(aggregations, 'metadata_participant__weight_lbs.buckets')}
          fieldName="cases.metadata_participant.weight_lbs"
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
     <ColumnCenter className="test-totMETs1">
        <PieTitle>totMETs1</PieTitle>
        <SelfFilteringPie
          buckets={_.get(aggregations, 'metadata_participant__totMETs1.buckets')}
          fieldName="cases.metadata_participant.totMETs1"
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
    </RowCenter>
  );
};

export const RepoCasesPiesQuery = {
  fragments: {
    aggregations: () => Relay.QL`
      fragment on CaseAggregations {
        demographic__ethnicity {
          buckets {
            doc_count
            key
          }
        }
        demographic__gender {
          buckets {
            doc_count
            key
          }
        }
        demographic__race {
          buckets {
            doc_count
            key
          }
        }
        metadata_participant__age_2012 {
          buckets {
            doc_count
            key
          }
        }
        metadata_participant__totMETs1 {
          buckets {
            doc_count
            key
          }
        }
        metadata_participant__weight_lbs {
          buckets {
            doc_count
            key
          }
        }
        primary_site {
          buckets {
            doc_count
            key
          }
        }
        project__project_id {
          buckets {
            doc_count
            key
          }
        }
        project__program__name {
          buckets {
            doc_count
            key
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

export default RepoCasesPies;
