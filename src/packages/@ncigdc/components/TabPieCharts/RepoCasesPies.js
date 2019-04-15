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
  aggregations: {
    demographic__age: { buckets: [TBucket] },
    demographic__weight: { buckets: [TBucket] },
    demographic__met: { buckets: [TBucket] },
    primary_site: { buckets: [TBucket] },
    project__program__name: { buckets: [TBucket] },
    project__project_id: { buckets: [TBucket] },
    sample__time: { buckets: [TBucket] },
    sample__week: { buckets: [TBucket] },
    sample__fiber: { buckets: [TBucket] },
    sample__fat: { buckets: [TBucket] },
    sample__iron: { buckets: [TBucket] },
    sample__alcohol: { buckets: [TBucket] },
  },
  setShowingMore: Function,
  showingMore: boolean,
  size: { width: number },
};

const enhance = compose(
  withRouter,
  withState('showingMore', 'setShowingMore', false),
  withSize(),
);

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
        <PieTitle>Weight (lbs)</PieTitle>
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
  return (
    <div className="test-repo-samples-pies">
      <BottomBorderedBox>
        <WrappedRow style={{ maxWidth: `${width}px`, width: '100%' }}>
          <ColumnCenter
            style={{ minWidth: `${pieColMinWidth}px` }}
            className="test-week"
          >
          <PieTitle>Week</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations, 'sample__week.buckets')}
            fieldName="cases.samples.week"
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
          <ColumnCenter
            style={{ minWidth: `${pieColMinWidth}px` }}
            className="test-time"
          >
          <PieTitle>Time</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations, 'sample__time.buckets')}
            fieldName="cases.samples.time"
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
          <ColumnCenter
            style={{ minWidth: `${pieColMinWidth}px` }}
            className="test-fiber"
          >
          <PieTitle>Fiber</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations, 'sample__fiber.buckets')}
            fieldName="cases.samples.fiber"
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
          <ColumnCenter
            style={{ minWidth: `${pieColMinWidth}px` }}
            className="test-fat"
          >
          <PieTitle>Fat</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations, 'sample__fat.buckets')}
            fieldName="cases.samples.fat"
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
          <ColumnCenter
            style={{ minWidth: `${pieColMinWidth}px` }}
            className="test-iron"
          >
          <PieTitle>Iron</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations, 'sample__iron.buckets')}
            fieldName="cases.samples.iron"
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
        {showingMore && [ 
          <ColumnCenter
            style={{ minWidth: `${pieColMinWidth}px` }}
            className="test-alcohol"
          >
          <PieTitle>Alcohol</PieTitle>
          <SelfFilteringPie
            buckets={_.get(aggregations, 'sample__alcohol.buckets')}
            fieldName="cases.samples.alcohol"
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
        ]}
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
        sample__time {
          buckets {
            doc_count
            key
          }
        }
        sample__week {
          buckets {
            doc_count
            key
          }
        }
        sample__fiber {
          buckets {
            doc_count
            key
          }
        }
        sample__fat {
          buckets {
            doc_count
            key
          }
        }
        sample__iron {
          buckets {
            doc_count
            key
          }
        }
        sample__alcohol {
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

const RepoSamplesPies = Relay.createContainer(
  enhance(RepoSamplesPiesComponent),
  RepoCasesPiesQuery,
);

export { RepoCasesPies, RepoSamplesPies };
