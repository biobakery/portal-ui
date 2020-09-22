
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

Install brew and other dependencies (Ubuntu 16.04).

```
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install -y nodejs
sudo npm i -g npm@6.4.1

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
export PATH=$PATH:/home/linuxbrew/.linuxbrew/bin # add this to the end of the $HOME/.bashrc file too

```

Install Watchman with Homebrew with the command `$ brew install watchman`.

Install the other required packages for this portal with `$ npm i` (use Node v8.[16|17] (npm v6.4.1)).

## Run

### Development
Install the BIOM-Mass GraphQL server and start it running. 

Next start the portal ui with the command `$ npm start`.

## Production

1. Start the BIOM-Mass GraphQL server running. 
2. Build the source for the UI with `$ npm run-script build`. 
3. Build the docker image with `$ sudo docker build -t portal-ui .`.
4. Start the docker container (allowing access to host ports) `$ sudo docker run -d --network=host --name portal-ui portal-ui`.

These steps are included in the `build.bash` script.

## Schema

To generate a schema of the local GraphQL server run the command `$ node ./data/getSchema`.

