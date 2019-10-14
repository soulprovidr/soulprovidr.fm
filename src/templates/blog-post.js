import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulArticle')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="container">
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className="">
          <Img className="card-img-top" alt={post.title} sizes={post.heroImage.sizes} />
          <div className="card-body">
            <div className="row pt-3">
              <div className="col-md-4">
                <button className="btn btn-primary">
                  Listen
                </button>
                <p className="h4">Tracklist</p>
                <ul className="list-group">
                  <li className="list-group-item">1. The Four Tops - Under The Boardwalk</li>
                  <li className="list-group-item">2. Smokey Robinson - Tears Of A Clown</li>
                  <li className="list-group-item">3. Diana Ross - Upside Down</li>
                  <li className="list-group-item">4. The Four Tops - Under The Boardwalk</li>
                  <li className="list-group-item">5. Smokey Robinson - Tears Of A Clown</li>
                  <li className="list-group-item">6. Diana Ross - Upside Down</li>
                  <li className="list-group-item">7. The Four Tops - Under The Boardwalk</li>
                  <li className="list-group-item">8. Smokey Robinson - Tears Of A Clown</li>
                  <li className="list-group-item">9. Diana Ross - Upside Down</li>
                </ul>
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
      publishDate(formatString: "MMMM Do, YYYY")
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
