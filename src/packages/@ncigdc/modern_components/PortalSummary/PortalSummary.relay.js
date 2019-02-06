// @flow

import React from 'react';
import { graphql } from 'react-relay';
import Query from '@ncigdc/modern_components/Query';

export default (Component: ReactClass<*>) => (props: Object) => {
  return (
    <Query
      parentProps={props}
      minHeight={259}
      variables={props.variables}
      Component={Component}
      query={graphql`
        query PortalSummary_relayQuery {
          viewer {
            count {
               projects
               participants
               samples
               dataFormats
               rawFiles
               processedFiles
            }
          }
        }
      `}
    />
  );
};
