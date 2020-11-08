const path = require('path');

const categories = require('./data/entities/categories.json');

const getPostSlugPrefix = (node) => {
  switch (node.frontmatter.category) {
    case 'mixtape':
      return 'mixtapes/';
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
    case 'mixtape':
      return path.resolve('./src/views/templates/Mixtape.js');
    default:
      return null;
  }
};

const createCategoryQuery = (category) => `
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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i].id;
    const query = createCategoryQuery(category);
    const categoryResult = await graphql(query);

    if (categoryResult.errors) {
      console.log(categoryResult.errors);
      throw categoryResult.errors;
    }

    const posts = categoryResult.data.allMarkdownRemark.edges;
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
