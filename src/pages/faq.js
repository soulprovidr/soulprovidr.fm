import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import ArticleCard from './common/ArticleCard';
import SubscribeWidget from './common/SubscribeWidget';
import { Page } from './templates';
import { Box } from '@/theme';
import { Heading, Text } from '@/theme';

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

function FAQ({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page.Container title="FAQ">
      <Global styles={globalStyles} />
      <Page.Title>FAQ</Page.Title>
      <Page.Content>
        <Text fontWeight="bold">What is Soul Provider?</Text>
        <Text>
          Soul Provider is an online radio station based in Winnipeg, Canada.
        </Text>
        <Text>
          Its mission is simple: to heal the world through the power of funk,
          soul, and software.
        </Text>
        <Text fontWeight="bold">What is The Mood®?</Text>
        <Text>
          <i>The Mood®</i> is a{' '}
          <Link to="/mixtapes">monthly mixtape series</Link> designed to unlock
          the power of the human mind. Thanks to our patented mixtape
          technology,
          <i>The Mood®</i> has been found to be up to 50% more effective than
          the next leading brand.
        </Text>
        <Text fontWeight="bold">How can I get in touch?</Text>
        <Text>
          Soul Provider would love to hear from you. Feel free to get in touch
          via email:{' '}
          <a href="mailto:shola@soulprovidr.fm">shola@soulprovidr.fm</a>
        </Text>
      </Page.Content>
      <Page.Meta>
        <Box pb={5}>
          <SubscribeWidget />
        </Box>
        <Heading as="h5" pb={4}>
          OTHER STUFF YOU MIGHT LIKE:
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
    </Page.Container>
  );
}

export default FAQ;

export const pageQuery = graphql`
  query FAQQuery {
    allMarkdownRemark(
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
