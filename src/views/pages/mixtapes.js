import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import Masonry from 'react-masonry-css';
import { Global, css as emotionCss } from '@emotion/core';
import { Box } from 'theme';

import ArticleCard from '../components/ArticleCard';
import { CTABanner } from '../subscribe';
import { Page } from '../layout';

const globalStyles = emotionCss`
  .masonry-container {
    display: flex;
    margin-left: -30px;
  }

  .masonry-column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`;

const StyledTitle = styled(Page.Title)(
  css({
    display: ['none', 'block']
  })
);

const StyledCTABanner = styled(CTABanner)(
  css({
    display: ['none', 'block']
  })
);

function Mixtapes({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page title="Mixtapes">
      <Global styles={globalStyles} />
      <StyledTitle>Mixtapes</StyledTitle>
      <Page.Content>
        <StyledCTABanner />
        <Box>
          <Masonry
            breakpointCols={{
              default: 3,
              768: 1
            }}
            className="masonry-container"
            columnClassName="masonry-column"
          >
            {posts.map(({ node: post }) => (
              <ArticleCard
                post={post}
                key={post.frontmatter.title}
                sx={{ mb: 4 }}
              />
            ))}
          </Masonry>
        </Box>
      </Page.Content>
    </Page>
  );
}

export default Mixtapes;

export const pageQuery = graphql`
  query MixtapesQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { id: { eq: "mixtape" } } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            author {
              id
              name
            }
            category {
              id
              label
              colour
            }
            date
            description
            soundCloudUrl
            image {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
