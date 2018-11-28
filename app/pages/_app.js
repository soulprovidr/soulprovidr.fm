import '@babel/polyfill';

import React from 'react'
import App, { Container } from 'next/app'

import { SOCKET_URL } from '../constants';

import Head from '../components/head';
import Layout from '../components/layout';
import Column from '../components/column';
import Player from '../components/player';
import Track from '../components/track';

import getTracks from '../api/getTracks';

export default class Raydio extends App {
  static async getInitialProps() {
    try {
      return { tracks: await getTracks() };
    } catch {
      return { tracks: [] };
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { currentTrack } = state;
    if (!currentTrack) {
      const { tracks } = props;
      return {
        currentTrack: tracks[0],
        previousTracks: tracks.slice(1)
      };
    }
    return null;
  };

  componentDidMount() {
    this.subscribeToTracks();
  }

  state = {
    currentTrack: null,
    previousTracks: []
  };

  onTrackCreate = (track) => {
    const { currentTrack, previousTracks } = this.state;
    console.log(track);
    this.setState({
      currentTrack: track,
      previousTracks: [currentTrack, ...previousTracks]
    });
  };

  subscribeToTracks = () => {
    const Ws = require('@adonisjs/websocket-client');
    const socket = Ws(SOCKET_URL);
    socket.connect();
    this.trackCreateSubscription = socket.subscribe('track');
    this.trackCreateSubscription.on('create', this.onTrackCreate);
  }

  render () {
    const { currentTrack, previousTracks } = this.state;
    console.log(currentTrack);
    return (
      <Container>
        <Head title="SOUL PROVIDER FM" />
        <Layout>
          <Column columns={6}>
            <p className="h6 text-uppercase font-weight-bold text-black-50">
              Now Playing
            </p>
            <Player track={currentTrack} />
          </Column>
          <Column columns={6}>
            <p className="h6 text-uppercase font-weight-bold text-black-50">
              Recently Played
            </p>
            {previousTracks.map(t => (
              <Track
                key={t.id}
                track={t}
              />
            ))}
          </Column>
        </Layout>
      </Container>
    );
  }
}
