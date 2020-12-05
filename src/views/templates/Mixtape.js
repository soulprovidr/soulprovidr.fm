import React, { useMemo } from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {
  msToTime,
  useIsPlaying,
  useIsListening,
  useListen,
  usePlayerProgress
} from 'modules/player';
import { Waveform, useTrack } from 'modules/soundcloud';
import { MarqueeContainer as Marquee } from '@/packages/marquee';
import { Box, Breakpoints, Button, Spinner, Text, usePageWidth } from 'theme';
import { CoverImage } from '../components/CoverImage';
import { Tracklist } from '../components/Tracklist';
import { Page } from '../layout';
import { PlayerIcon } from '../player';

const MixtapeContainer = styled('div')(
  css({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: ['column', 'row']
  })
);

const MixtapeMeta = styled('div')(
  css({
    alignSelf: [null, 'flex-start'],
    mr: [0, 4],
    position: ['relative'],
    flexGrow: 1
  })
);

const MixtapeContent = styled(Box)(
  css({
    mb: 3,
    // pl: [0, 5],
    pt: [3, 0],
    pb: 5,
    width: ['100%', '60%']
  })
);

const MixtapeTitle = styled(Page.Title)(
  css({
    fontSize: [5, 6],
    lineHeight: 1.25,
    pb: 1,
    pt: [3, 0],
    textTransform: 'none'
  })
);

const MixtapeText = styled(Text)(
  css({
    mb: 3,
    pb: 2
  })
);

const WaveformControls = styled('div')(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pb: 4
  })
);

const StyledButton = styled(Button)(
  css({
    cursor: 'pointer',
    minWidth: 80
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

const MixtapeTemplate = ({ data, ...props }) => {
  const post = get(data, 'markdownRemark', null);

  const { frontmatter, html } = post;
  const {
    category,
    description,
    image,
    soundCloudUrl,
    title,
    tracklist = null
  } = frontmatter;

  const track = useTrack(soundCloudUrl);
  const tracklistJson = get(tracklist, 'childrenTracklistJson', null);
  const src = track?.stream_url ?? null;
  const meta = useMemo(
    () =>
      track
        ? {
            artist: track.user.username,
            cover: image.childImageSharp.fluid.src,
            duration: track.duration,
            title
          }
        : null,
    [track]
  );

  const isPlaying = useIsPlaying(src);
  const isListening = useIsListening(src);
  const progress = usePlayerProgress();
  const listenFunc = useListen(src, meta);
  const pageWidth = usePageWidth();

  const onClick = () => listenFunc();
  const onSeek = (progress) => listenFunc(progress);

  const memoizedTitle = useMemo(
    () => <MixtapeTitle key={title}>{title}</MixtapeTitle>,
    []
  );

  const isSmallScreen = pageWidth <= Breakpoints.SM;

  return (
    <Page description={description} title={title} {...props}>
      <MixtapeContainer>
        <MixtapeMeta>
          <CoverImage
            category={category}
            forceOverlay={isPlaying || isSmallScreen}
            onClick={onClick}
            image={image}
            mediaSrc={src}
          />
        </MixtapeMeta>
        <MixtapeContent width={[1, 3 / 5]}>
          <Marquee>{memoizedTitle}</Marquee>
          <MixtapeText as="div" dangerouslySetInnerHTML={{ __html: html }} />
          <Waveform
            duration={track?.duration}
            height={90}
            numSamples={120}
            onSeek={onSeek}
            progress={isListening ? progress : 0}
            waveformUrl={track?.waveform_url}
          />
          <WaveformControls>
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
            <Text color="text.secondary" pb={0}>
              {msToTime(isPlaying ? progress : null)} /{' '}
              {msToTime(track?.duration)}
            </Text>
          </WaveformControls>
          {/* {tracklistJson && !isSmallScreen && (
            <Tracklist
              isPlaying={isPlaying}
              onSeek={onSeek}
              progress={isListening ? progress : 0}
              tracklist={tracklistJson}
            />
          )} */}
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
        tracklist {
          childrenTracklistJson {
            artist
            start
            title
          }
        }
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
