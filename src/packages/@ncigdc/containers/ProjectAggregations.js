/* @flow */

import React from 'react';
import Relay from 'react-relay/classic';
import { compose, withState } from 'recompose';

import SuggestionFacet from '@ncigdc/components/Aggregations/SuggestionFacet';
import FacetHeader from '@ncigdc/components/Aggregations/FacetHeader';
import FacetWrapper from '@ncigdc/components/FacetWrapper';
import escapeForRelay from '@ncigdc/utils/escapeForRelay';

import { TBucket } from '@ncigdc/components/Aggregations/types';

import { withTheme } from '@ncigdc/theme';
import { Row } from '@ncigdc/uikit/Flex';
import FolderIcon from '@ncigdc/theme/icons/Folder';

export type TProps = {
  suggestions: Array<Object>,
  aggregations: {
    disease_type: { buckets: [TBucket] },
    primary_site: { buckets: [TBucket] },
    program__name: { buckets: [TBucket] },
    project_id: { buckets: [TBucket] },
    summary__data_categories__data_category: { buckets: [TBucket] },
    summary__experimental_strategies__experimental_strategy: {
      buckets: [TBucket],
    },
  },
  setAutocomplete: Function,
  theme: Object,
};

const projectFacets = [
  {
    title: 'Sample Site',
    field: 'primary_site',
    full: 'projects.primary_site',
    doc_type: 'project',
    type: 'keyword',
  },
  {
    title: 'Data Category',
    field: 'summary.data_categories.data_category',
    full: 'projects.summary.data_categories.data_category',
    doc_type: 'project',
    type: 'keyword',
  },
  {
    title: 'Experimental Strategies',
    field: 'summary.experimental_strategies.experimental_strategy',
    full: 'projects.summary.experimental_strategies.experimental_strategy',
    doc_type: 'project',
    type: 'keyword',
  },
];

export const ProjectAggregationsComponent = compose(
  withState('projectIdCollapsed', 'setProjectIdCollapsed', false),
)((props: TProps) => (
  <div className="test-project-aggregations">
    {projectFacets.map(facet => (
      <FacetWrapper
        key={facet.full}
        facet={facet}
        title={facet.title}
        aggregation={props.aggregations[escapeForRelay(facet.field)]}
        relay={props.relay}
        additionalProps={facet.additionalProps}
        style={{ borderBottom: `1px solid ${props.theme.greyScale5}` }}
      />
    ))}
  </div>
));

export const ProjectAggregationsQuery = {
  fragments: {
    aggregations: () => Relay.QL`
      fragment on ProjectAggregations {
        primary_site {
          buckets {
            doc_count
            key
          }
        }
        program__name {
          buckets {
            doc_count
            key
          }
        }
        project_id {
          buckets {
            doc_count
            key
          }
        }
        summary__experimental_strategies__experimental_strategy {
          buckets {
            doc_count
            key
          }
        }
        summary__data_categories__data_category {
          buckets {
            doc_count
            key
          }
        }
      }
    `,
  },
};

const ProjectAggregations = Relay.createContainer(
  withTheme(ProjectAggregationsComponent),
  ProjectAggregationsQuery,
);

export default ProjectAggregations;
