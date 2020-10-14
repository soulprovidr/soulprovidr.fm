import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import Image from 'gatsby-image';
import { Box, Button, Heading, Text } from 'theme';
import { Page } from '../layout';
import Tracklist from '../components/Tracklist';

// import Tracklist from '../components/Tracklist';
// import Waveform from 'modules/soundcloud/components/Waveform';
// import { play, pause, stop } from 'modules/player/actions';
// import { PlayerStatus } from 'modules/player/constants';
// import msToTime from 'modules/player/helpers/msToTime';
// import { useTrack } from 'modules/soundcloud';

// const { BUFFERING, PLAYING } = PlayerStatus;

const MixtapeContainer = styled('div')(
  css({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: ['column', 'row']
  })
);

const MixtapeImage = styled(Image)(
  css({
    flexGrow: 1,
    height: 'auto'
  })
);

const MixtapeContent = styled(Box)(
  css({
    pl: [0, 4],
    pt: [3, 0],
    pb: 5
  })
);

const MixtapeTitle = styled(Page.Title)(
  css({
    fontSize: [5, 6],
    lineHeight: 1.25,
    pb: 0,
    textTransform: 'none'
  })
);

const MixtapeText = styled(Text)(
  css({
    // borderBottom: '1px dotted #ddd',
    pb: 2
  })
);

const MixtapeTemplate = ({ data, ...props }) => {
  const post = get(data, 'markdownRemark', null);
  const { frontmatter, html } = post;
  const { image, title } = frontmatter;
  return (
    <Page title={title} {...props}>
      <MixtapeContainer>
        <Box width={[1, 1 / 3]}>
          <MixtapeImage fluid={image.childImageSharp.fluid} />
        </Box>
        <MixtapeContent width={[1, 2 / 3]}>
          <MixtapeTitle>{title}</MixtapeTitle>
          <MixtapeText as="div" dangerouslySetInnerHTML={{ __html: html }} />
        </MixtapeContent>
      </MixtapeContainer>
    </Page>
  );
};

export default MixtapeTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        author {
          id
          name
        }
        category {
          id
          label
          colour
        }
        date
        description
        soundCloudUrl
        image {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

// function Article(props) {
//   const { data, play, pause, progress, src, status, stop } = props;

//   const article = get(data, 'contentfulArticle');
//   const soundCloudUrl = get(article, 'soundCloudUrl', null);
//   const track = useTrack(soundCloudUrl);

//   // Is the track associated with this card active?
//   const isTrackActive = track && src === track.stream_url;

//   const curriedPlay = (meta) => {
//     play(track.stream_url, {
//       artist: track.user.username,
//       cover: article.heroImage.sizes.src,
//       duration: track.duration,
//       slug: article.slug,
//       title: article.title,
//       ...meta
//     });
//   };

//   const onButtonClick = () => {
//     // Ignore clicks when track has not yet loaded.
//     if (!track) {
//       return false;
//     }

//     if (isTrackActive) {
//       switch (status) {
//         case BUFFERING:
//           stop();
//           break;
//         case PLAYING:
//           pause();
//           break;
//         default:
//           play();
//           break;
//       }
//     } else {
//       curriedPlay();
//     }
//   };
//   const onSeek = (progress) => curriedPlay({ progress });

//   const renderAction = () => (
//     <button
//       className="btn btn-sm btn-primary rounded my-3 d-flex align-items-center"
//       onClick={onButtonClick}
//     >
//       {isTrackActive && [BUFFERING, PLAYING].includes(status) ? (
//         <>
//           <PauseIcon className="mr-2" color="#FFFFFF" size={12} />
//           {' PAUSE'}
//         </>
//       ) : (
//         <>
//           <PlayIcon className="mr-2" color="#FFFFFF" size={12} />
//           {' PLAY'}
//         </>
//       )}
//     </button>
//   );

//   const renderControls = () =>
//     article.soundCloudUrl && (
//       <div className="pt-1">
//         <div className="d-flex justify-content-between align-items-center">
//           {renderAction()}
//           <p className="text-muted m-0 p-0">
//             {msToTime(isTrackActive ? progress : null)} /{' '}
//             {msToTime(track?.duration)}
//           </p>
//         </div>
//       </div>
//     );

//   return (
//     <main className="container">
//       <Helmet title={article.title} />
//       <div className="col-lg-8 col-md-10 col-sm-12 mx-auto mb-5 pb-5">
//         <Img
//           className={c(styles.image, 'card-img-top')}
//           alt={article.title}
//           sizes={article.heroImage.sizes}
//         />
//         <h3 className="mt-4 pt-2 font-weight-bold">{article.title}</h3>
//         <div
//           className="pt-2 pb-4"
//           dangerouslySetInnerHTML={{
//             __html: article.body.childMarkdownRemark.html
//           }}
//         />
//         {article.soundCloudUrl && (
//           <Waveform
//             duration={track?.duration}
//             height={90}
//             numSamples={120}
//             onSeek={onSeek}
//             progress={isTrackActive ? progress : 0}
//             waveformUrl={track?.waveform_url}
//           />
//         )}
//         {renderControls()}
//         {/* <Tracklist /> */}
//       </div>
//     </main>
//   );
// }

// const mapState = (state) => ({
//   progress: state.player.progress,
//   src: state.player.src,
//   status: state.player.status
// });

// const mapDispatch = { play, pause, stop };

// export default connect(mapState, mapDispatch)(Article);
