import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Tracklist from '@/common/components/Tracklist';
import Waveform from '@/waveform/Waveform';
import { pause, play } from '@/player/actions';
import { PLAYER_STATUS } from '@/player/constants';
import { usePlayerState } from '@/player/hooks';
import { useTrack } from '@/soundcloud';

function Post({ data, pause, play }) {
  const post = get(data, 'contentfulArticle');

  const { progress, status, streamUrl } = usePlayerState();

  const soundCloudUrl = get(post, 'soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);

  const isSelected = track && streamUrl && (streamUrl.includes(track.stream_url));
  const isPaused = isSelected && status === PLAYER_STATUS.PAUSED;

  return (
    <div className="container">
      <Helmet title={post.title} />
      <div className="row">
        <div className="col-md-4">
          <Img className="card-img-top" alt={post.title} sizes={post.heroImage.sizes} />
          {post.soundCloudUrl && (
            <div className="pt-1">
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-sm btn-primary rounded my-3"
                  onClick={() => isSelected && !isPaused
                    ? pause()
                    : play(track?.stream_url)
                  }
                >
                  {isSelected && !isPaused ? 'PAUSE' : 'PLAY'}
                </button>
                <p className="text-muted m-0 p-0">16 tracks, 59 min</p>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-8">
          <p className="h2 font-weight-bold">{post.title}</p>
          <div
            className="pt-2 pb-4"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          {post.soundCloudUrl && (
            <Waveform
              duration={track?.duration}
              height={90}
              numSamples={120}
              progress={isSelected ? progress : 0}
              waveformUrl={track?.waveform_url}
            />
          )}
          <Tracklist />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = { pause, play };

export default connect(null, mapDispatchToProps)(Post);

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
