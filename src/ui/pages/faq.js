import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';
import { Heading, Text } from 'theme';

import ArticleCard from '../components/ArticleCard';
import SubscribeWidget from '../components/SubscribeWidget';
import { Page } from '../templates';

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
        <Heading as="h3">What is Soul Provider?</Heading>
        <Text>
          Soul Provider is an online radio station based in Winnipeg, Canada.
        </Text>
        <Text>
          Its mission is simple: to heal the world through the power of funk,
          soul, and software.
        </Text>
        <Heading as="h3">What can The Mood® do for me?</Heading>
        <Text>
          <i>The Mood®</i> is a monthly mixtape series designed to unlock the
          power of the human mind.
        </Text>
        <Text>
          Feeling anxious? Depressed? Heartbroken?
          <i>The Mood®</i> can help.
        </Text>
        <Heading as="h3">How can I get in touch?</Heading>
        <Text>Soul Provider would love to hear from you.</Text>
        <Text>
          <a href="mailto:shola@soulprovidr.fm">shola@soulprovidr.fm</a>
        </Text>
      </Page.Content>
      <Page.Meta>
        <SubscribeWidget />
        <Heading as="h3" pb={4}>
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
