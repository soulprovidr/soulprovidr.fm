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
        path: `${__dirname}/src/pages`,
        ignore: ['!*.js']
        // See pattern syntax recognized by micromatch
        // https://www.npmjs.com/package/micromatch#matching-features
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        appendScript: require.resolve('./src/service-worker.js')
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',

    // Source plugins.
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'entities',
        path: path.join(__dirname, 'src', 'content', 'entities')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'content', 'images')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.join(__dirname, 'src', 'content', 'posts')
      }
    }
  ],
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorsJson',
    'MarkdownRemark.frontmatter.category': 'CategoriesJson'
  }
};
