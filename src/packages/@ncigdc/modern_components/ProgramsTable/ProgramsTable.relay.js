import React from 'react';
import { graphql } from 'react-relay';
import { compose, withPropsOnChange } from 'recompose';
import {
  parseIntParam,
  parseFilterParam,
  parseJSONParam,
} from '@ncigdc/utils/uri';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';
import Query from '@ncigdc/modern_components/Query';

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
  )((props: mixed) => {
    return (
      <Query
        parentProps={props}
        name="ProgramsTable"
        minHeight={600}
        variables={props.variables}
        Component={Component}
        query={graphql`
          query ProgramsTable_relayQuery(
            $size: Int
            $offset: Int
            $programs_sort: [Sort]
            $filters: FiltersArgument
          ) {
            viewer {
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
                      primary_site
                      summary {
                        case_count
                        data_categories {
                          case_count
                          data_category
                        }
                        file_count
                        file_size
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
