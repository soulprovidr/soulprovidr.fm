import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Favicon from '@/static/images/favicon.png';

function Head({ description, lang, meta, title }) {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      defaultTitle={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: 'charset',
          content: 'utf-8'
        },
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ].concat(meta)}
    >
      <link rel="icon" href={Favicon} type="image/png" />
    </Helmet>
  )
}

Head.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default Head;