import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Masonry from 'react-masonry-css';
import { Global, css as emotionCSS } from '@emotion/core';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, Flex, Heading, Text } from 'theme';
import LogoImage from 'static/images/logo.svg';
import ArticleCard from '../components/ArticleCard';
import { CTABanner } from '../subscribe';
import { Page } from '../layout';

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
    borderRadius: '50%',
    mb: [4, 0],
    mr: [0, 5],
    height: 'auto',
    width: ['100%', '40%']
  })
);

function FAQ({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page title="About">
      <Global styles={globalStyles} />
      <Page.Title>About</Page.Title>
      <StyledPageContent>
        <StyledPageImage src={LogoImage} />
        <div>
          <Page.Title>About</Page.Title>
          <Heading as="h3">What is Soul Provider?</Heading>
          <Text>
            Soul Provider is an online radio station based in Winnipeg, Canada.
          </Text>
          <Text>
            Its mission is simple: to heal the world through the power of funk,
            soul, and software.
          </Text>
          <Heading as="h3" pt={2}>
            What can The Mood® do for me?
          </Heading>
          <Text>
            Feeling lonely? Anxious? Depressed?
            <i>The Mood®</i> can help. Our patented{' '}
            <Link to="/mixtapes">mixtape technology</Link> has been shown to
            reduce the symptoms of heartache by up to 98%.
          </Text>
          <Text>
            That&apos;s more than twice the effectiveness of the next leading
            mixtape.
          </Text>
          <Heading as="h3" pt={2}>
            How can I get in touch?
          </Heading>
          <Text>
            Whether you're interested in collaborating, or just want to share
            some music you like, Soul Provider would love to hear from you.
          </Text>
          <Flex
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Box width={[1, 1 / 2]}>
              <Heading as="h4">By email:</Heading>
              <Text>
                <a href="mailto:shola@soulprovidr.fm">shola@soulprovidr.fm</a>
              </Text>
            </Box>
            <Box width={[1, 1 / 2]}>
              <Heading as="h4">By standard mail:</Heading>
              <Text>
                PO Box 73016 Bridgwater PO
                <br />
                Winnipeg, Canada
                <br />
                R3Y 0Y0
              </Text>
            </Box>
          </Flex>
        </div>
      </StyledPageContent>
      <Page.Meta>
        <CTABanner />
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
