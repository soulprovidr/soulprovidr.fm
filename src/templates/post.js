import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SoundCloud from '@/soundcloud';
import Waveform from '@/common/components/Waveform';

function Post({ data }) {
  const post = get(data, 'contentfulArticle');

  const [soundCloudData, setSoundCloudData] = useState(null);

  useEffect(() => {
    console.log(SoundCloud);
    async function getSoundCloudData() {
      if (post.soundCloudUrl) {
        const track = await SoundCloud.resolve(post.soundCloudUrl);
        setSoundCloudData(track);
      }
    }
    getSoundCloudData();
  }, []);

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
          <main
            className="pt-2 pb-4"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <Waveform
            height={75}
            numSamples={120}
            waveformUrl={soundCloudData ? soundCloudData.waveform_url : null}
          />
          <p className="h6 font-weight-bold text-uppercase pt-5 pb-2">Tracklist</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-action">
              <p className="m-0">Mariah Carey - We Belong Together</p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="m-0">Mariah Carey - Cruise Control</p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="m-0">Mariah Carey - Touch My Body</p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="m-0">Mariah Carey - Underneath The Stars</p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="m-0">Mariah Carey - We Belong Together</p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="m-0">Mariah Carey - Cruise Control</p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="m-0">Mariah Carey - Touch My Body</p>
            </li>
            <li className="list-group-item list-group-item-action">
              <p className="m-0">Mariah Carey - Underneath The Stars</p>
            </li>
          </ul>
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
