import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Masonry from 'react-masonry-css';
import { Global, css as emotionCSS } from '@emotion/core';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Heading, Text } from 'theme';

import ArticleCard from '../components/ArticleCard';
import Subscribe from '../components/Subscribe';
import { Page } from '../templates';

const globalStyles = emotionCSS`
  .masonry-container {
    display: flex;
    margin-left: -30px;
  }

  .masonry-column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`;

const StyledPageContent = styled(Page.Content)(
  css({
    alignItems: 'flex-start',
    display: ['block', 'flex']
  })
);

const StyledPageImage = styled('img')(
  css({
    pb: [4, 0],
    pr: [0, 4],
    height: 'auto',
    width: ['100%', '33%']
  })
);

function FAQ({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page title="FAQ">
      <Global styles={globalStyles} />
      <Page.Title>FAQ</Page.Title>
      <StyledPageContent>
        <StyledPageImage src="https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog839690/ray_parker_jr.jpg" />
        <div>
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
            <i>The Mood®</i> can help. Our{' '}
            <Link to="/mixtapes">patented mixtape technology</Link> has been
            shown to reduce the symptoms of heartache by up to 57%.
          </Text>
          <Text>
            (That&apos;s more than twice the effectiveness of the next leading
            mixtape.)
          </Text>
          <Heading as="h3">How can I get in touch?</Heading>
          <Text>Soul Provider would love to hear from you.</Text>
          <Text>
            <a href="mailto:shola@soulprovidr.fm">shola@soulprovidr.fm</a>
          </Text>
        </div>
      </StyledPageContent>
      <Page.Meta>
        <Subscribe />
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
    </Page>
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
