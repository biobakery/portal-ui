/* @flow */

import { makeListLink } from './utils';

export const RepositoryFilesLink = makeListLink({
  pathname: '/repository',
  children: 'repository',
  query: { searchTableTab: 'files', facetTab: 'files' },
});

export const RepositoryCasesLink = makeListLink({
  pathname: '/repository',
  children: 'repository',
  query: { searchTableTab: 'cases', facetTab: 'cases' },
});

export const RepositorySamplesLink = makeListLink({
  pathname: '/repository',
  children: 'repository',
  query: { searchTableTab: 'samples', facetTab: 'samples' },
});

export const RepositoryFilesCasesLink = makeListLink({
  pathname: '/repository',
  children: 'repository',
  query: { searchTableTab: 'files', facetTab: 'cases' },
});

export default makeListLink({
  pathname: '/repository',
  children: 'repository',
});
