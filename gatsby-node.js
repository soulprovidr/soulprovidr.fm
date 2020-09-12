const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

const postsQuery = `
  query AllPosts {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
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
            date
            category {
              id
              label
              colour
            }
          }
        }
      }
    }
  }
`;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(postsQuery);

  if (result.errors) {
    console.log(result.errors);
    throw result.errors;
  }

  const postComponent = path.resolve('./src/pages/templates/Article.js');
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node: post }) => {
    createPage({
      path: `/${post.fields.slug}/`,
      component: postComponent
    });
  });

  return true;
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};
