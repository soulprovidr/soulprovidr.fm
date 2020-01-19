import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { useTrack } from '@/soundcloud';
import Tracklist from '@/common/components/Tracklist';
import Waveform from '@/common/components/Waveform';

function Post({ data }) {
  const post = get(data, 'contentfulArticle');
  const track = useTrack(post.soundCloudUrl || null);
  console.log(track);
  return (
    <div className="container">
      <Helmet title={post.title} />
      <div className="row">
        <div className="col-md-4">
          <Img className="card-img-top" alt={post.title} sizes={post.heroImage.sizes} />
          <div className="pt-1">
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-sm btn-primary rounded my-3">&#9654;&nbsp;&nbsp;PLAY</button>
              <p className="text-muted m-0 p-0">16 tracks, 59 min</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <p className="h2 font-weight-bold">{post.title}</p>
          <div
            className="pt-2 pb-4"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <Waveform
            height={75}
            numSamples={120}
            waveformUrl={track ? track.waveform_url : null}
          />
          <Tracklist />
        </div>
      </div>
    </div>
  );
}

export default Post;

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
