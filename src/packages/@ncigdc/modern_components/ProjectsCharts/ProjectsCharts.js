import React from 'react';
import QuestionIcon from 'react-icons/lib/fa/question-circle';
import * as d3 from 'd3';
import { compose, withState, withProps } from 'recompose';
import JSURL from 'jsurl';
import { sortBy } from 'lodash';
import Column from '@ncigdc/uikit/Flex/Column';
import Row from '@ncigdc/uikit/Flex/Row';
import { Tooltip } from '@ncigdc/uikit/Tooltip';
import withRouter from '@ncigdc/utils/withRouter';
import { WithSize } from '@ncigdc/utils/withSize';
import { setFilter, mergeQuery, removeFilter } from '@ncigdc/utils/filters';
import removeEmptyKeys from '@ncigdc/utils/removeEmptyKeys';
import StackedBarChart from '@ncigdc/components/Charts/StackedBarChart';
import styled from '@ncigdc/theme/styled';
import { withTheme } from '@ncigdc/theme';
import { TGroupContent, IGroupFilter } from '@ncigdc/utils/filters/types';
import PieChart from '@ncigdc/components/Charts/PieChart';

const color = d3.scaleOrdinal([
  ...d3.schemeCategory20,
  '#CE6DBD',
  '#AD494A',
  '#8C6D31',
  '#B5CF6B',
]);

type yAxisUnit = 'percent' | 'number';

type TProps = {
  projectIds: Array<string>,
  caseCountFilters: TGroupContent,
  fmgChartFilters: IGroupFilter,
  numUniqueCases: number,
  projectsIsFetching: boolean,
  genesIsFetching: boolean,
  topGenesSource: Array<{
    gene_id: string,
    symbol: string,
  }>,
  yAxisUnit?: yAxisUnit,
  setYAxisUnit?: Function,
  projectsViewer: { projects: { hits: { edges: Array<Object> } } },
  theme: Object,
  query: Object,
  pathname: string,
  push: Function,
  viewer: {
    explore: {
      cases: {
        hits: {
          total: number,
        },
      },
      genes: {
        hits: {
          edges: Array<{
            node: {
              gene_id: string,
              symbol: string,
            },
          }>,
        },
      },
    },
  },
};

const Container = styled(Row, {
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '4px',
  height: '300px',
});

export default compose(
  withState('yAxisUnit', 'setYAxisUnit', 'percent'),
  withRouter,
  withProps(props => {
    const numUniqueCases = props.viewer.explore.cases.hits.total;

    return {
      numUniqueCases,
    };
  }),
  withTheme,
)(
  ({
    numUniqueCases,
    projectsIsFetching,
    genesIsFetching,
    topGenesSource,
    yAxisUnit,
    setYAxisUnit,
    projectsViewer,
    viewer,
    theme,
    query,
    pathname,
    push,
    caseCountFilters,
    fmgChartFilters,
  }: TProps) => {
    const projects = projectsViewer.projects.hits.edges.map(x => x.node);

    const pieChartData = projects.map(project => {
      const count = project.summary.case_count;

      return {
        id: project.project_id,
        count,
        clickHandler: () => {
          const newQuery = mergeQuery(
            {
              filters: setFilter({
                field: 'projects.project_id',
                value: [].concat(project.project_id || []),
              }),
            },
            query,
            'toggle',
          );

          const q = removeEmptyKeys({
            ...newQuery,
            filters: newQuery.filters && JSURL.stringify(newQuery.filters),
          });

          push({ pathname, query: q });
        },
        tooltip: (
          <span>
            <b>
              {project.project_id}: {project.name}
            </b>
            <br />
            {count.toLocaleString()} case{count > 1 ? 's' : ''}
          </span>
        ),
      };
    });

    const totalCases = projects.reduce(
      (sum, p) => sum + p.summary.case_count,
      0,
    );


    return (
      <Container className="test-projects-charts">
        <Column
          style={{ minWidth: '200px', flexGrow: '1', flexBasis: '33%' }}
          className="test-case-distribution-per-project"
        >
          <div
            style={{
              alignSelf: 'center',
              color: theme.greyScale7,
              padding: '1.5rem 0 0.5rem',
              fontWeight: 'bold',
            }}
          >
            Case Distribution per Project
          </div>
          {[
            <div
              style={{
                alignSelf: 'center',
                fontSize: '1.2rem',
                marginBottom: '2rem',
              }}
              key="pie-subtitle"
            >
              {totalCases.toLocaleString()}
              {` Case${totalCases === 0 || totalCases > 1 ? 's' : ''}
              across ${projects.length.toLocaleString()} Project${projects.length ===
                0 || projects.length > 1
                ? 's'
                : ''}`}
            </div>,
            <PieChart
              key="pie-chart"
              path="count"
              data={pieChartData}
              height={150}
              width={150}
              marginTop={25}
            />,
          ]}
        </Column>
      </Container>
    );
  },
);
