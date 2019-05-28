import React from 'react';

import { Column, Row } from '../layout';
import Player from '../components/player';

const defaultProps = {
  track: null
};

function getInitialProps() {
  // return { track: null };
  return {
    track: {
      artist: 'Michael Jackson',
      title: 'Lady In My Life',
      album: 'Thriller',
      year: 1998,
      image: 'https://img.discogs.com/ivwm2Jom7cdgEc5HXSV_OPEqV30=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg'
    }
  };
};

function Listen({ track }) {
  if (track) {
    return (
      <Row className="flex-grow-1">
        <Column columns={12}>
          <p className="h6 font-weight-bold d-none">
            NOW PLAYING:
          </p>
          <Player track={track} />
        </Column>
      </Row>
    );
  } else {
    return (
      <Row className="flex-grow-1">
        <Column columns={12}>
          <p className="h6 font-weight-bold">
            No track currently playing.
          </p>
        </Column>
      </Row>
    )
  }
}

Listen.defaultProps = defaultProps;
Listen.getInitialProps = getInitialProps;

export default Listen;