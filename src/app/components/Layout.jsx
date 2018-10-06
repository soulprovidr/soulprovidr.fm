import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';

const Layout = ({ children, data }) => (
  <Header />
  <div class="content container">
    <div class="row">
      <div class="col-md-7">
        <div class="bg-white">
          <div class="item p-3 d-flex">
            <img
              class="mr-2"
              height="100%"
              src="/images/best-hugs.jpg"
            >
            <div class="item__content">
              <p class="item__title font-weight-bold m-0">
                DRAM - Best Hugs
              </p>
              <p class="item__date">
                Played 20 minutes ago
              </p>
            </div>
          </div>
          <div class="item p-3 d-flex">
            <img
              class="mr-2"
              height="100%"
              src="/images/lady-lady.jpg"
            >
            <div class="item__content">
              <p class="item__title font-weight-bold m-0">
                Masego - Lavish Lullaby
              </p>
              <p class="item__date">
                Played 4 hours ago
              </p>
            </div>
          </div>
          <div class="item p-3 d-flex">
            <img
              class="mr-2"
              height="100%"
              src="/images/myron.jpg"
            >
            <div class="item__content">
              <p class="item__title font-weight-bold m-0">
                Myron & E - They Don't Know
              </p>
              <p class="item__date">
                Played 3 days ago
              </p>
            </div>
          </div>
          <div class="item p-3 d-flex">
              <img
                class="mr-2"
                height="100%"
                src="/images/best-hugs.jpg"
              >
              <div class="item__content">
                <p class="item__title font-weight-bold m-0">
                  DRAM - Best Hugs
                </p>
                <p class="item__date">
                  Played 20 minutes ago
                </p>
              </div>
            </div>
            <div class="item p-3 d-flex">
              <img
                class="mr-2"
                height="100%"
                src="/images/lady-lady.jpg"
              >
              <div class="item__content">
                <p class="item__title font-weight-bold m-0">
                  Masego - Lavish Lullaby
                </p>
                <p class="item__date">
                  Played 4 hours ago
                </p>
              </div>
            </div>
            <div class="item p-3 d-flex">
              <img
                class="mr-2"
                height="100%"
                src="/images/myron.jpg"
              >
              <div class="item__content">
                <p class="item__title font-weight-bold m-0">
                  Myron & E - They Don't Know
                </p>
                <p class="item__date">
                  Played 3 days ago
                </p>
              </div>
            </div>
            <div class="item p-3 d-flex">
            <img
              class="mr-2"
              height="100%"
              src="/images/best-hugs.jpg"
            >
            <div class="item__content">
              <p class="item__title font-weight-bold m-0">
                DRAM - Best Hugs
              </p>
              <p class="item__date">
                Played 20 minutes ago
              </p>
            </div>
          </div>
          <div class="item p-3 d-flex">
            <img
              class="mr-2"
              height="100%"
              src="/images/lady-lady.jpg"
            >
            <div class="item__content">
              <p class="item__title font-weight-bold m-0">
                Masego - Lavish Lullaby
              </p>
              <p class="item__date">
                Played 4 hours ago
              </p>
            </div>
          </div>
          <div class="item p-3 d-flex">
            <img
              class="mr-2"
              height="100%"
              src="/images/myron.jpg"
            >
            <div class="item__content">
              <p class="item__title font-weight-bold m-0">
                Myron & E - They Don't Know
              </p>
              <p class="item__date">
                Played 3 days ago
              </p>
            </div>
          </div>
          <div class="item p-3 d-flex">
            <img
              class="mr-2"
              height="100%"
              src="/images/best-hugs.jpg"
            >
            <div class="item__content">
              <p class="item__title font-weight-bold m-0">
                DRAM - Best Hugs
              </p>
              <p class="item__date">
                Played 20 minutes ago
              </p>
            </div>
          </div>
          <div class="item p-3 d-flex">
            <img
              class="mr-2"
              height="100%"
              src="/images/lady-lady.jpg"
            >
            <div class="item__content">
              <p class="item__title font-weight-bold m-0">
                Masego - Lavish Lullaby
              </p>
              <p class="item__date">
                Played 4 hours ago
              </p>
            </div>
          </div>
          <div class="item p-3 d-flex">
            <img
              class="mr-2"
              height="100%"
              src="/images/myron.jpg"
            >
            <div class="item__content">
              <p class="item__title font-weight-bold m-0">
                Myron & E - They Don't Know
              </p>
              <p class="item__date">
                Played 3 days ago
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <div class="player text-center p-3 bg-white position-sticky d-flex flex-column align-items-center">
          <img
            class="player__artwork"
            src="images/best-hugs.jpg"
            width="100%"
          />
          <p class="player__title font-weight-bold m-0 mt-3">
            Masego - Lavish Lullaby
          </p>
          <input
            class="player__volume mt-3"
            type="range"
          >
          <button class="player__play mt-4 rounded-circle">
            <img
              src="/images/play.png"
              width="75%"
            >
          </button>
        </div>
      </div>
    </div>
  </div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords
            },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${Favicon}`
            }
          ]}
        />
        <Header
          description={data.site.siteMetadata.description}
          title={data.site.siteMetadata.title}
        />
        <div className="content">
          {children}
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
