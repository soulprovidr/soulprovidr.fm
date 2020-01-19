const path = require('path');

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  try {
    const postComponent = path.resolve('./src/templates/Post.js');
    const result = await graphql(
      `
        {
          allContentfulArticle {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `
    );

    if (result.errors) {
      console.log(result.errors)
      throw result.errors;
    }

    const posts = result.data.allContentfulArticle.edges;
    posts.forEach((post, index) => {
      createPage({
        path: `/${post.node.slug}/`,
        component: postComponent,
        context: {
          slug: post.node.slug
        },
      });
    });

    return true;
  } catch (e) {
    throw e;
  }
}