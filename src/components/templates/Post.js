import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, Text } from 'theme';
import { Page } from '../layout';

const PostTitleContainer = styled.div`
  width: 100%;
  ${css({
    borderBottom: 'container',
    display: 'flex',
    pb: 3
  })}
`;

const PostTitle = styled(Page.Title)`
  text-transform: none;
  ${css({ pt: 4 })}
`;

const PostContent = styled(Text)(
  css({
    mb: 3,
    pb: 2,
    'a, a:active, a:visited': {
      color: 'accent'
    }
  }),
  {
    img: {
      margin: '0 auto'
    },
    p: {
      textAlign: 'justify'
    }
  }
);

const GenericPageTemplate = ({ data }) => {
  const post = get(data, 'markdownRemark', null);

  const { fields, frontmatter, html } = post;
  const { description, image, title } = frontmatter;
  const imageFluid = get(image, 'childImageSharp.fluid', null);
  return (
    <Page
      description={description}
      title={title}
      slug={fields.slug}
      type="article"
    >
      <Box width={[1, 3 / 5]}>
        {imageFluid && <Image fluid={imageFluid} />}
        <PostTitleContainer>
          <div>
            <PostTitle>{title}</PostTitle>
            <Text color="text.secondary" fontSize={4} p={0}>
              {description}
            </Text>
          </div>
        </PostTitleContainer>
        <Page.Content>
          {!!html.length && (
            <PostContent as="div" dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </Page.Content>
      </Box>
    </Page>
  );
};

export default GenericPageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
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
`;
