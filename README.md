
# BIOM-Mass Portal UI


Portal UI design inspired by the [iHMP Data Portal](https://portal.hmpdacc.org/) and developed with the framework from the [NIH NCI GDC Data Portal](https://gdc.cancer.gov/).

Data sets and metadata hosted and access controlled by the [Broad Institute FireCloud](https://portal.firecloud.org/).

The GraphQL server used with this portal is the [BIOM-Mass FireCloud GraphQL server](https://github.com/biobakery/firecloud-graphql).

- [Technologies](#technologies)
- [Installation](#installation)
- [Run](#run)
- [Schema](#schema)

## Technologies

- [React](https://facebook.github.io/react/) - JavaScript library for building user interfaces
- [Relay](https://facebook.github.io/relay/) - JavaScript framework for building data-driven React applications
- [Redux](http://redux.js.org/) - Predictable state container for JavaScript apps
- [Recompose](https://github.com/acdlite/recompose) - React utility belt for function components and higher-order components
- [Flow](https://flow.org/) - Static type checker for JavaScript
- [Jest](https://facebook.github.io/jest/) - Delightful JavaScript testing
- [d3](https://d3js.org/) - Data-Driven Documents

## Installation

Install Watchman with Homebrew with the command `$ brew install watchman`.

Install the other required packages for this portal with `$ npm i` (use Node v8 (npm v5)).

## Run

### Development
Install the BIOM-Mass GraphQL server and start it running. 

Next start the portal ui with the command `$ npm start`.

## Production

1. Start the BIOM-Mass GraphQL server running. 
2. Build the source for the UI with `$ npm run-script build`. 
3. Build the docker image with `$ sudo docker build -f portal-ui .`.
4. Start the docker container (allowing access to host ports) `$ sudo docker run -d --network=host --name portal_ui portal_ui`.

## Schema

To generate a schema of the local GraphQL server run the command `$ node ./data/getSchema`.

