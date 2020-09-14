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
        <Text fontWeight="bold">What can The Mood® do for me?</Text>
        <Text>
          <i>The Mood®</i> is a monthly mixtape series designed to unlock the
          power of the human mind.
        </Text>
        <Text>
          Feeling anxious? Depressed? Heartbroken? Thanks to{' '}
          <Link to="/mixtapes">our patented mixtape technology</Link>,{' '}
          <i>The Mood®</i> may be the right choice for you*.
        </Text>
        <Text fontWeight="bold">How can I get in touch?</Text>
        <Text>Soul Provider would love to hear from you.</Text>
        <Text>
          <a href="mailto:shola@soulprovidr.fm">shola@soulprovidr.fm</a>
        </Text>
      </Page.Content>
      <Page.Meta>
        <SubscribeWidget />
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
