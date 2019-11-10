import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulArticle')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="container">
        <Helmet title={post.title} />
        <div className="">
          <Img className="card-img-top" alt={post.title} sizes={post.heroImage.sizes} />
          <div className="card-body">
            <div className="row pt-3">
              <div className="col-md-4">
              </div>
              <div className="col-md-8">
                <p className="h2 pb-3">{post.title}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
