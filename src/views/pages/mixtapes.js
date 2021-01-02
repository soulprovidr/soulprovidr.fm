import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import ArticleCard from '../components/ArticleCard';
import { CTABanner } from '../subscribe';
import { Page } from '../layout';

const globalStyles = css`
  .masonry-container {
    display: flex;
    margin-left: -30px;
  }

  .masonry-column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`;

const StyledPageTitle = styled(Page.Title)`
  width: 100%;
`;

const StyledPageContent = styled(Page.Content)`
  width: 100%;
`;

function Mixtapes({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page title="Mixtapes" slug="/mixtapes">
      <Global styles={globalStyles} />
      <StyledPageTitle>Mixtapes</StyledPageTitle>
      <StyledPageContent>
        <CTABanner />
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
      </StyledPageContent>
    </Page>
  );
}

export default Mixtapes;

export const pageQuery = graphql`
  query MixtapesQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { id: { eq: "mixtape" } } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
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
