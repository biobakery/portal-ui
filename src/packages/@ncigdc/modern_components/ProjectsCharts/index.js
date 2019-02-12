import Component from './ProjectsCharts';
import withProjects from './ProjectsCharts.relay';
import withGenesAndCases from './GenesAndCases.relay';
export default withProjects(withGenesAndCases(Component));
