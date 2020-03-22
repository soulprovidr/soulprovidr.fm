import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// import Tracklist from '@/common/components/Tracklist';
import Waveform from '@/soundcloud/components/Waveform';
import {
  PlayerStatus,
  load,
  play,
  pause,
  stop
} from '@/player';
import msToTime from '@/player/helpers/msToTime';
import { useTrack } from '@/soundcloud';

import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';

const { BUFFERING, PLAYING } = PlayerStatus;

function Article(props) {
  const {
    data,
    load,
    play,
    pause,
    progress,
    src,
    status,
    stop
  } = props;

  const article = get(data, 'contentfulArticle');
  const soundCloudUrl = get(article, 'soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);

  // Is the track associated with this card active?
  const isTrackActive = track && (src === track.stream_url);
  const isPlaying = isTrackActive && status === PLAYING;

  const loadTrack = meta => {
    load(track.stream_url, {
      artist: track.user.username,
      duration: track.duration,
      slug: article.slug,
      title: article.title,
      ...meta
    });
  };

  const onButtonClick = e => {
    // Ignore clicks when track has not yet loaded.
    if (!track) {
      return false;
    }

    if (isTrackActive) {
      switch (status) {
        case BUFFERING:
          stop();
          break;
        case PLAYING:
          pause();
          break;
        default:
          play();
          break;
      }
    } else {
      loadTrack();
    }
  };
  const onSeek = seekProgress => play(track?.stream_url, seekProgress);

  const renderAction = () => (
    <button
      className="btn btn-sm btn-primary rounded my-3 d-flex align-items-center"
      onClick={onButtonClick}
    >
      {isTrackActive && [BUFFERING, PLAYING].includes(status)
        ? (
          <>
            <PauseIcon
              className="mr-2"
              color="#FFFFFF"
              size={12}
            />{' PAUSE'}
          </>
        ) : (
          <>
            <PlayIcon
              className="mr-2"
              color="#FFFFFF"
              size={12}
            />{' PLAY'}
          </>
        )}
    </button>
  );

  return (
    <main className="container">
      <Helmet title={article.title} />
      <div className="row">
        <div className="col-md-4">
          <Img className="card-img-top" alt={article.title} sizes={article.heroImage.sizes} />
          {article.soundCloudUrl && (
            <div className="pt-1">
              <div className="d-flex justify-content-between align-items-center">
                {renderAction()}
                <p className="text-muted m-0 p-0">
                  {msToTime(track?.duration)}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-8">
          <p className="h2 font-weight-bold">{article.title}</p>
          <div
            className="pt-2 pb-4"
            dangerouslySetInnerHTML={{
              __html: article.body.childMarkdownRemark.html,
            }}
          />
          {article.soundCloudUrl && (
            <Waveform
              duration={track?.duration}
              height={90}
              numSamples={120}
              onSeek={onSeek}
              progress={isTrackActive ? progress : 0}
              waveformUrl={track?.waveform_url}
            />
          )}
          {/* <Tracklist /> */}
        </div>
      </div>
    </main>
  );
}

const mapState = state => ({
  progress: state.player.progress,
  src: state.player.src,
  status: state.player.status
});

const mapDispatch = { load, play, pause, stop };

export default connect(mapState, mapDispatch)(Article);

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      soundCloudUrl
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
