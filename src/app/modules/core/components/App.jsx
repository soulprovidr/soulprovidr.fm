import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-enroute';

import Layout from './Layout';
import Player from '@/player/components/Player';

import NotFound from './NotFound';
import Playlist from '@/playlist/components/Playlist';

class App extends Component {
  state = {
    location: window.location.pathname
  };

  componentDidMount() {
    window.addEventListener('popstate', () => {
      this.setState({ location: window.location.pathname });
    });
  }

  render() {
    return (
      <Layout>
        <>
          <Router {...this.state}>
            <Route path="/" component={Playlist} />
            <Route path="*" component={NotFound} />
          </Router>
          <Player />
        </>
      </Layout>
    );
  }
}

export default App;