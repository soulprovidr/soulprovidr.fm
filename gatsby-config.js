const path = require('path');

module.exports = {
  siteMetadata: {
    description: 'For those who like to groove.',
    title: 'Soul Provider'
  },
  plugins: [
    // Transformer plugins.
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',

    // General plugins.
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/views/pages`,
        ignore: ['!*.js']
        // See pattern syntax recognized by micromatch
        // https://www.npmjs.com/package/micromatch#matching-features
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          common: path.resolve(__dirname, 'src', 'common'),
          modules: path.resolve(__dirname, 'src', 'modules'),
          static: path.resolve(__dirname, 'src', 'static'),
          theme: path.resolve(__dirname, 'src', 'theme'),
          views: path.resolve(__dirname, 'src', 'views')
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',

    // Source plugins.
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'entities',
        path: path.join(__dirname, 'data', 'entities')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'data', 'images')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.join(__dirname, 'data', 'posts')
      }
    }
  ],
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorsJson',
    'MarkdownRemark.frontmatter.category': 'CategoriesJson'
  }
};
