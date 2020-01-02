import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
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
        <div className="col-md-8 mx-auto">
          <Img className="card-img-top" alt={post.title} sizes={post.heroImage.sizes} />
          <div className="pt-3">
              <p className="h2 pb-3">{post.title}</p>
              <Waveform waveformUrl={soundCloudData ? soundCloudData.waveform_url : null} />
              <div
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        <button className="button-muted">Play</button>
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
