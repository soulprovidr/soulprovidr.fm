const path = require('path');

module.exports = {
  siteMetadata: {
    description: 'For those who like to groove.',
    title: 'Soul Provider'
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'entities',
        path: `${__dirname}/src/content/entities`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content/posts`
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
    }
  ],
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorsJson',
    'MarkdownRemark.frontmatter.category': 'CategoriesJson'
  }
};
