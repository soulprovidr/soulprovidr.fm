import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import Image from 'gatsby-image';
import {
  msToTime,
  useIsPlaying,
  useMediaAction,
  usePlayerProgress
} from 'modules/player';
import { useTrack } from 'modules/soundcloud';
import { Box, Button, Flex, Heading, Spinner, Text } from 'theme';
import { CoverImage } from '../components/CoverImage';
import Tracklist from '../components/Tracklist';
import { Page } from '../layout';
import { PlayerIcon } from '../player';

// import Tracklist from '../components/Tracklist';
import Waveform from 'modules/soundcloud/components/Waveform';
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

const MixtapeMeta = styled('div')(
  css({
    position: 'relative',
    flexGrow: 1
    // width: ['100%', '30%']
    // width: '100%'
  })
);

const StyledButton = styled(Button)(
  css({
    cursor: 'pointer',
    minWidth: 80
    // mt: 3
  })
);

const StyledPlayerIcon = styled(PlayerIcon)(
  css({
    height: 18,
    mr: 1,
    width: 15,
    svg: {
      verticalAlign: 'middle'
    }
  })
);

const MixtapeContent = styled(Box)(
  css({
    pl: [0, 5],
    pt: [3, 0],
    pb: 5
  })
);

const MixtapeTitle = styled(Page.Title)(
  css({
    fontSize: [5, 6],
    lineHeight: 1.25,
    pb: 3,
    textTransform: 'none'
  })
);

const MixtapeText = styled(Text)(
  css({
    mb: 3,
    pb: 2
  })
);

const MixtapeTemplate = ({ data, ...props }) => {
  const post = get(data, 'markdownRemark', null);
  const { frontmatter, html } = post;
  const { category, image, soundCloudUrl, title } = frontmatter;
  const track = useTrack(soundCloudUrl);
  const src = track?.stream_url ?? null;
  const isPlaying = useIsPlaying(track?.stream_url);
  const progress = usePlayerProgress();
  const mediaAction = useMediaAction(src);
  const onClick = () =>
    track
      ? mediaAction({
          artist: track.user.username,
          cover: image.childImageSharp.fluid.src,
          duration: track.duration,
          title
        })
      : null;
  return (
    <Page title={title} {...props}>
      <MixtapeContainer>
        <MixtapeMeta>
          <CoverImage
            category={category}
            onClick={onClick}
            image={image}
            src={src}
          />
        </MixtapeMeta>
        <MixtapeContent width={[1, 3 / 5]}>
          <MixtapeTitle>{title}</MixtapeTitle>
          <MixtapeText as="div" dangerouslySetInnerHTML={{ __html: html }} />
          <Waveform
            duration={track?.duration}
            height={90}
            numSamples={120}
            // onSeek={onSeek}
            progress={isPlaying ? progress : 0}
            waveformUrl={track?.waveform_url}
          />
          <Flex justifyContent="space-between" alignItems="center" pb={4}>
            <StyledButton variant="primary" size="sm" onClick={onClick}>
              {track ? (
                <>
                  <StyledPlayerIcon size={12} src={src} />
                  {isPlaying ? 'Pause' : 'Listen'}
                </>
              ) : (
                <Spinner color="white" size={12} />
              )}
            </StyledButton>
            <Text color="textSecondary" pb={0}>
              {msToTime(isPlaying ? progress : null)} /{' '}
              {msToTime(track?.duration)}
            </Text>
          </Flex>
          {/* <Heading as="h2">Tracklist</Heading> */}
          {/* <Tracklist /> */}
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
