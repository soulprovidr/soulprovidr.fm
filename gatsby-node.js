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

const createCategoryQuery = (category) => `
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { id: { eq: "${category}" } } } }
      sort: { fields: frontmatter___date }
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
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i].id;
    const query = createCategoryQuery(category);
    const categoryResult = await graphql(query);

    if (categoryResult.errors) {
      console.log(categoryResult.errors);
      throw categoryResult.errors;
    }

    const postTemplate = path.resolve('./src/ui/templates/Article.js');
    const posts = categoryResult.data.allMarkdownRemark.edges;
    posts.forEach(({ node: post }) => {
      createPage({
        path: post.fields.slug,
        component: postTemplate
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
