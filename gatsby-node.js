const path = require('path');

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
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
    console.log(result.errors);
    throw result.errors;
  }

  const articleComponent = path.resolve('./src/articles/components/Article.js');
  const articles = result.data.allContentfulArticle.edges;
  articles.forEach((article) => {
    createPage({
      path: `/${article.node.slug}/`,
      component: articleComponent,
      context: {
        slug: article.node.slug,
      },
    });
  });

  return true;
};
