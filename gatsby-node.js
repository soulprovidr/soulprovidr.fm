const path = require('path');

const postsQuery = `
  query AllPosts {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
      edges {
        node {
          id
          html
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

  const postComponent = path.resolve('./src/articles/components/Article.js');
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node: post }) => {
    createPage({
      path: `/${post.name}/`,
      component: postComponent,
      context: {
        slug: post.name
      }
    });
  });

  return true;
};

exports.onCreateNode = ({ node, getNode, actions }) => {};
