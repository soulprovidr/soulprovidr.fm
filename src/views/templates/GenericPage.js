import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, Text } from 'theme';
import { Page } from '../layout';

const GenericPageTitleContainer = styled.div`
  width: 100%;
  ${css({
    borderBottom: 'container',
    display: 'flex',
    pb: 3
  })}
`;

const MixtapeText = styled(Text)(
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
  const { description, title } = frontmatter;

  return (
    <Page description={description} title={title} slug={fields.slug}>
      <Box width={[1, 3 / 5]}>
        <GenericPageTitleContainer>
          <div>
            <Page.Title>{title}</Page.Title>
            <Text color="text.secondary" fontSize={4} p={0}>
              {description}
            </Text>
          </div>
        </GenericPageTitleContainer>
        <Page.Content>
          {!!html.length && (
            <MixtapeText as="div" dangerouslySetInnerHTML={{ __html: html }} />
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
