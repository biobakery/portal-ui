// @flow

import exploreCases from '@ncigdc/modern_components/ExploreCasesTable/ExploreCasesTable.model';
import projects from '@ncigdc/modern_components/ProjectsTable/ProjectsTable.model';
import genes from '@ncigdc/modern_components/GenesTable/GenesTable.model';
import ssms from '@ncigdc/modern_components/SsmsTable/SsmsTable.model';
import files from '@ncigdc/modern_components/FilesTable/FilesTable.model';
import cases from '@ncigdc/modern_components/RepoCasesTable/RepoCasesTable.model';
import samples from '@ncigdc/modern_components/RepoSamplesTable/RepoSamplesTable.model';
import annotations from './annotationsTableModel';
import projectPrimarySites from '@ncigdc/modern_components/ProjectPrimarySitesTable/ProjectPrimarySitesTable.model';

export default {
  projects,
  cases,
  samples,
  files,
  exploreCases,
  annotations,
  genes,
  ssms,
  projectPrimarySites,
};
