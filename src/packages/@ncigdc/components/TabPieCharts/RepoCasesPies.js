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
    demographic__age: { buckets: [TBucket] },
    demographic__weight: { buckets: [TBucket] },
    demographic__met: { buckets: [TBucket] },
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
        <PieTitle>Age</PieTitle>
        <SelfFilteringPie
          buckets={_.get(aggregations, 'demographic__age.buckets')}
          fieldName="cases.demographic.age"
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
        <PieTitle>Weight</PieTitle>
        <SelfFilteringPie
          buckets={_.get(aggregations, 'demographic__weight.buckets')}
          fieldName="cases.demographic.weight"
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
      <ColumnCenter className="test-met">
        <PieTitle>Activity (MET)</PieTitle>
        <SelfFilteringPie
          buckets={_.get(aggregations, 'demographic__met.buckets')}
          fieldName="cases.demographic.met"
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
        demographic__age {
          buckets {
            doc_count
            key
          }
        }
        demographic__weight {
          buckets {
            doc_count
            key
          }
        }
        demographic__met {
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
