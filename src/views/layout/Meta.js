import React from 'react';
import Helmet from 'react-helmet';

export const Meta = ({ description, title }) => (
  <Helmet
    title={title}
    meta={[
      {
        name: 'charset',
        content: 'utf-8'
      },
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      }
    ]}
  />
);
