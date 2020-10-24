// @flow

import React from 'react';
import { graphql } from 'react-relay';
import { compose, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import { parse } from 'query-string';
import Query from '@ncigdc/modern_components/Query';
import { parseFilterParam } from '@ncigdc/utils/uri';
import withRouter from '@ncigdc/utils/withRouter';

const entityType = 'RepositoryCases';
export default (Component: ReactClass<*>) =>
  compose(
    withRouter,
    withPropsOnChange(
      ['location'],
      ({ location: { search }, defaultFilters = null }) => {
        const q = parse(search);
        const filters = parseFilterParam(q.filters, defaultFilters);
        return {
          filters,
        };
      },
    ),
    connect((state, props) => ({
      userSelectedFacets: state.customFacets[entityType],
    })),
    withPropsOnChange(
      ['userSelectedFacets', 'filters'],
      ({ userSelectedFacets, filters }) => {
        return {
          variables: {
            filters,
            repoSampleCustomFacetFields: userSelectedFacets
              .map(({ field }) => field)
              .join(','),
          },
        };
      },
    ),
  )((props: Object) => {
    return (
      <Query
        parentProps={props}
        minHeight={578}
        variables={props.variables}
        Component={Component}
        query={graphql`
          query SampleAggregations_relayQuery(
            $filters: FiltersArgument
            $repoSampleCustomFacetFields: [String]!
          ) {
            viewer {
              repository {
                samples {
                  facets(facets: $repoSampleCustomFacetFields)
                  aggregations(
                    filters: $filters
                    aggregations_filter_themselves: false
                  ) {

                    metadataAggregations {
                      hits(first: 1000) {
                        edges {
                          node {
                            metadataKey
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

                    week {
                      buckets {
                        doc_count
                        key
                      }
                    }
                    time {
                      buckets {
                        doc_count
                        key
                      }
                    }
                    fat {
                      stats {
                        max
                        min
                      }
                    }
                    fiber {
                      stats {
                        max
                        min
                      }
                    }
                    iron {
                      stats {
                        max
                        min
                      }
                    }
                    alcohol {
                      stats {
                        max
                        min
                      }
                    }
                    b12 {
                      stats {
                        max
                        min
                      }
                    }
                    calories {
                      stats {
                        max
                        min
                      }
                    }
                    carbs {
                      stats {
                        max
                        min
                      }
                    }
                    choline {
                      stats {
                        max
                        min
                      }
                    }
                    folate {
                      stats {
                        max
                        min
                      }
                    }
                    protein {
                      stats {
                        max
                        min
                      }
                    }
                    weight {
                      stats {
                        max
                        min
                      }
                    }
                    met {
                      stats {
                        max
                        min
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
