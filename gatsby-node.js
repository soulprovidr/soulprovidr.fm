const path = require('path');

const categories = require('./data/entities/categories.json');

const createCategoryPostsQuery = (category) => `
  query CategoryQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { id: { eq: "${category}" } } } }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category {
              id
            }
          }
        }
      }
    }
  }
`;

const getPostSlugPrefix = (node) => {
  switch (node.frontmatter.category) {
    case 'mixtape':
      return 'mixtapes/';
    case 'blog':
      return 'posts/';
    default:
      return '';
  }
};

const getPostSlug = (node) =>
  `/${getPostSlugPrefix(node)}${
    node.fileAbsolutePath.split('/').pop().split('.')[0]
  }`;

const getPostTemplate = (categoryId) => {
  switch (categoryId) {
    case 'blog':
      return path.resolve('./src/components/templates/Post.js');
    case 'mixtape':
      return path.resolve('./src/components/templates/Mixtape.js');
    default:
      return path.resolve('./src/components/templates/GenericPage.js');
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  for (let i = 0; i < categories.length; i++) {
    const categoryId = categories[i].id;
    const categoryPostsQuery = createCategoryPostsQuery(categoryId);
    const categoryPostsResults = await graphql(categoryPostsQuery);
    if (categoryPostsResults.errors) {
      console.log(categoryPostsResults.errors);
      throw categoryPostsResults.errors;
    }

    const posts = categoryPostsResults.data.allMarkdownRemark.edges;
    posts.forEach(({ node: post }) => {
      const {
        frontmatter: {
          category: { id: categoryId }
        }
      } = post;
      const { slug } = post.fields;
      const component = getPostTemplate(categoryId);
      createPage({
        path: slug,
        component,
        context: { slug }
      });
    });
  }
  return true;
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: getPostSlug(node)
    });
  }
};
