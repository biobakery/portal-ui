// @flow

import React from 'react';
import { graphql } from 'react-relay';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';
import { compose, withPropsOnChange } from 'recompose';
import Query from '@ncigdc/modern_components/Query';
import {
  parseIntParam,
  parseFilterParam,
  parseJSONParam,
} from '@ncigdc/utils/uri';

const DEFAULT_PROGRAM_SORT = [{ field: 'summary.case_count', order: 'desc' }];

export default (Component: ReactClass<*>) =>
  compose(
    withRouter,
    withPropsOnChange(['location'], ({ location: { search } }) => {
      const q = parse(search);

      return {
        variables: {
          offset: parseIntParam(q.offset, 0),
          size: 1000,
          filters: parseFilterParam(q.filters, null),
          programs_sort: parseJSONParam(q.programs_sort, DEFAULT_PROGRAM_SORT),
        },
      };
    }),
  )((props: Object) => {
    return (
      <Query
        parentProps={props}
        name="ProgramsCharts"
        minHeight={280}
        variables={props.variables}
        Component={Component}
        query={graphql`
          query ProgramsCharts_relayQuery(
            $size: Int
            $offset: Int
            $programs_sort: [Sort]
            $filters: FiltersArgument
          ) {
            programsViewer: viewer {
              programs {
                hits(
                  first: $size
                  offset: $offset
                  sort: $programs_sort
                  filters: $filters
                ) {
                  total
                  edges {
                    node {
                      id
                      name
                      summary {
                        case_count
                        file_count
                      }
                    }
                  }
                }
              }
            }
          }
        `}
      />
    );
  });
