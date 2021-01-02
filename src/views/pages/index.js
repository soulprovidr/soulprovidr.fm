import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Box, Heading, Flex } from 'theme';

import RadioCard from '../components/RadioCard';
import ArticleCard from '../components/ArticleCard';
import LiveIcon from '../components/LiveIcon';
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

const Title = () => (
  <StyledPageTitle>
    <Flex alignItems="center">
      <LiveIcon size={12} color="red" />
      <Box as="span" ml={2}>
        Live
      </Box>
    </Flex>
  </StyledPageTitle>
);

function Home({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page title="Live">
      <Global styles={globalStyles} />
      <Title />
      <StyledPageContent>
        <RadioCard />
      </StyledPageContent>
      <Page.Meta>
        <CTABanner />
        <Heading as="h3" pb="24px">
          LATEST CONTENT
        </Heading>
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
      </Page.Meta>
    </Page>
  );
}

export default Home;

export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { id: { ne: "page" } } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
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
