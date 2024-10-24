import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Head from '@ncigdc/components/Head';
import NotFound from '@ncigdc/components/NotFound';
import LoadableWithLoading from '@ncigdc/components/LoadableWithLoading';
import ProjectRoute from '@ncigdc/routes/ProjectRoute';
import ProgramRoute from '@ncigdc/routes/ProgramRoute';
import FileRoute from '@ncigdc/routes/FileRoute';
import CaseRoute from '@ncigdc/routes/CaseRoute';
import AnnotationRoute from '@ncigdc/routes/AnnotationRoute';
import ComponentsRoute from '@ncigdc/routes/ComponentsRoute';
import GeneRoute from '@ncigdc/routes/GeneRoute';
import SSMRoute from '@ncigdc/routes/SSMRoute';
import SmartSearchRoute from '@ncigdc/routes/SmartSearchRoute';
import ImageViewerRoute from '@ncigdc/routes/ImageViewerRoute';

const HomeRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/HomeRoute'),
});

const ProtocolRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/ProtocolRoute'),
});

const HelpRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/HelpRoute'),
});

const AuthRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/AuthRoute'),
});

const ContactRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/ContactRoute'),
});

const HPFSRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/HPFSRoute'),
});

const KidneyRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/KidneyRoute'),
});

const PDGMRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/PDGMRoute'),
});

const MBSRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/MBSRoute'),
});

const MLSCRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/MLSCRoute'),
});

const OHMRRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/OHMRRoute'),
});

const PrivacyRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/PrivacyRoute'),
});

const CartRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/CartRoute'),
});

const RepositoryRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/RepositoryRoute'),
});

const ProjectsRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/ProjectsRoute'),
});

const ProgramsRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/ProgramsRoute'),
});

const AnnotationsRoute = LoadableWithLoading({
  loader: () => import('@ncigdc/routes/AnnotationsRoute'),
});

export default () => (
  <span>
    <Route children={p => <Head title={p.location.pathname.split('/')[1]} />} />
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/auth" component={AuthRoute} />
      <Route exact path="/hpfs" component={HPFSRoute} />
      <Route exact path="/kidney" component={KidneyRoute} />
      <Route exact path="/pdgm" component={PDGMRoute} />
      <Route exact path="/mbs" component={MBSRoute} />
      <Route exact path="/mlsc" component={MLSCRoute} />
      <Route exact path="/ohmr" component={OHMRRoute} />
      <Route exact path="/contact" component={ContactRoute} />
      <Route exact path="/privacy" component={PrivacyRoute} />
      <Route exact path="/protocol" component={ProtocolRoute} />
      <Route exact path="/help" component={HelpRoute} />
      <Route exact path="/repository" component={RepositoryRoute} />
      <Route exact path="/projects" component={ProjectsRoute} />
      <Route exact path="/programs" component={ProgramsRoute} />
      {ProjectRoute}
      {ProgramRoute}
      {CaseRoute}
      <Route component={NotFound} />
    </Switch>
  </span>
);
