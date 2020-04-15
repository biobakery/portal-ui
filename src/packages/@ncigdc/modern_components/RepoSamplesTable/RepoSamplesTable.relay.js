/* @flow */
/* eslint fp/no-class:0 */

import React from 'react';
import { graphql } from 'react-relay';
import { compose, withPropsOnChange } from 'recompose';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';
import {
  parseIntParam,
  parseFilterParam,
  parseJSONParam,
} from '@ncigdc/utils/uri';
import Query from '@ncigdc/modern_components/Query';

export default (Component: React.Class<*>) =>
  compose(
    withRouter,
    withPropsOnChange(
      ['location', 'defaultFilters'],
      ({ location, defaultFilters = null, defaultSize = 10 }) => {
        const q = parse(location.search);
        return {
          variables: {
            samples_offset: parseIntParam(q.samples_offset, 0),
            samples_size: parseIntParam(q.samples_size, 20),
            samples_sort: parseJSONParam(q.samples_sort, null),
            filters: parseFilterParam(q.filters, defaultFilters),
            score: 'annotations.annotation_id',
          },
        };
      },
    ),
  )((props: Object) => {
    return (
      <Query
        parentProps={props}
        name="RepoSamplesTable"
        minHeight={387}
        variables={props.variables}
        Component={Component}
        query={graphql`
          query RepoSamplesTable_relayQuery(
            $samples_size: Int
            $samples_offset: Int
            $samples_sort: [Sort]
            $filters: FiltersArgument
            $score: String
          ) {
            viewer {
              repository {
                samples {
                  hits(
                    score: $score
                    first: $samples_size
                    offset: $samples_offset
                    sort: $samples_sort
                    filters: $filters
                  ) {
                    total
                    edges {
                      node {
                        id
                        sample_id
                        primary_site
                        submitter_id
                        project {
                          project_id
                          program {
                            name
                          }
                        }
                        annotations {
                          hits(first: 1) {
                            total
                            edges {
                              node {
                                annotation_id
                              }
                            }
                          }
                        }
                        demographic {
                          age
                          weight
                          met
                        }
                        time
                        week
                        fiber
                        fat
                        iron
                        alcohol
                        b12
                        calories
                        carbs
                        choline
                        folate
                        protein
                        weight
                        met
                        non_ribosomal_proteins
                        ribosomal_proteins
                        summary {
                          data_categories {
                            file_count
                            data_category
                          }
                          file_count
                        }
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
