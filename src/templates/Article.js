import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// import Tracklist from '@/common/components/Tracklist';
import Waveform from '@/soundcloud/components/Waveform';
import { StreamableStatus, usePlayerStore } from '@/player';
import { useTrack } from '@/soundcloud';

function Article({ data, pause, play }) {
  const article = get(data, 'contentfulArticle');
  const soundCloudUrl = get(article, 'soundCloudUrl', null);
  
  // const { progress, status, streamUrl } = usePlayerState();
  const track = useTrack(soundCloudUrl);

  // const isSelected = track && streamUrl && (streamUrl.includes(track.stream_url));
  // const isPaused = isSelected && status === StreamableStatus.PAUSED;

  const onSeek = seekProgress => play(track?.stream_url, seekProgress);

  return (
    <main className="container">
      <Helmet title={article.title} />
      <div className="row">
        <div className="col-md-4">
          <Img className="card-img-top" alt={article.title} sizes={article.heroImage.sizes} />
          {article.soundCloudUrl && (
            <div className="pt-1">
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-sm btn-primary rounded my-3"
                  // onClick={() => isSelected && !isPaused
                  //   ? pause()
                  //   : play(track?.stream_url)
                  // }
                >
                  {/* {isSelected && !isPaused ? 'PAUSE' : 'PLAY'} */}
                </button>
                <p className="text-muted m-0 p-0">16 tracks, 59 min</p>
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
              // progress={isSelected ? progress : 0}
              waveformUrl={track?.waveform_url}
            />
          )}
          {/* <Tracklist /> */}
        </div>
      </div>
    </main>
  );
}


export default Article;

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
