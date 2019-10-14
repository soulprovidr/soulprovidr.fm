import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ article }) => (
  <div className="pb-4">
    <div className="card">
      <Img className="card-img-top" alt="" sizes={article.heroImage.sizes} />
      <div className="card-body">
        <h5 className="card-title">
          <Link
            className="text-black font-weight-bold"
            to={`/${article.slug}`}
          >
            {article.title}
          </Link>
        </h5>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  </div>
)
