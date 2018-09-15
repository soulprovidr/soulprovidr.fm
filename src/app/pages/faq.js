import React from 'react'

import Layout from '../components/layout';

const FAQPage = () => (
  <Layout>
    <div>
      <h1>FAQ</h1>
      <strong>
        What is Soul Provider FM?
      </strong>
      <p>
        Soul Provider FM is an online radio station based in Winnipeg, Canada. Its goal is simple: to heal the world through the power of funk, soul, disco, and jazz.
      </p>
      <strong>
        Where is the stream hosted?
      </strong>
      <p>
        The station is kindly hosted in Winnipeg by <a
          href="https://pegboardhosting.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >Pegboard Hosting</a>.
      </p>
      <strong>
        What are the specifications of the stream?
      </strong>
      <p>
        The stream is encoded as a 192kbps, 44kHz, stereo MP3.
      </p>

      <strong>
        How can I support the station?
      </strong>
      <p>
        Tell a friend, send me some music, or, better yet, <a
          href="https://www.buymeacoffee.com/ZPCo2GTd1"
          target="_blank"
          rel="noopener noreferrer"
        >
        buy me a cappuccino</a>.
      </p>
      <strong>
        How can I get in touch?
      </strong>
      <p>
        I'm available by email at <a href="mailto:shola@soulprovidr.fm">shola@soulprovidr.fm</a>.
      </p>
    </div>
  </Layout>
)

export default FAQPage
