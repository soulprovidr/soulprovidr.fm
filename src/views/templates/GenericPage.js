import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Text } from 'theme';
import { Page } from '../layout';

const GenericPageTitleContainer = styled.div`
  ${css({
    borderBottom: 'container',
    display: 'flex',
    pb: 3,
    mb: 4
  })}
`;

const StyledPageTitle = styled(Page.Title)(
  css({
    fontSize: [5, 6],
    lineHeight: 1.25,
    pb: 2,
    textTransform: 'none'
  })
);

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

const GenericPageTemplate = ({ data, ...props }) => {
  const post = get(data, 'markdownRemark', null);

  const { frontmatter, html } = post;
  const { description, title } = frontmatter;

  return (
    <Page description={description} title={title} {...props}>
      <Page.Content width={[1, 3 / 5]}>
        <GenericPageTitleContainer>
          <div>
            <StyledPageTitle>{title}</StyledPageTitle>
            <Text color="text.secondary" fontSize={4} p={0}>
              {description}
            </Text>
          </div>
        </GenericPageTitleContainer>
        {!!html.length && (
          <MixtapeText as="div" dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </Page.Content>
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
