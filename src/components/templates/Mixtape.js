import React, { useMemo } from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { formatDistanceToNowStrict } from 'date-fns';
import {
  msToTime,
  useIsPlaying,
  useIsListening,
  useListen,
  usePlayerProgress
} from 'modules/player';
import { Waveform, useTrack } from 'modules/soundcloud';
import { MarqueeContainer as Marquee } from 'modules/common/marquee';
import {
  Box,
  Breakpoints,
  Button,
  Logo,
  Spinner,
  Text,
  usePageWidth
} from 'theme';
import { CoverImage } from '../CoverImage';
import { Tracklist } from '../Tracklist';
import { Page } from '../layout';
import PlayerIcon from '../player/PlayerIcon';

const MixtapeImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const MixtapeTitleContainer = styled.div`
  ${css({
    borderBottom: 'container',
    pt: 4,
    pb: 3,
    mb: 4
  })}
`;

const StyledPageTitle = styled(Page.Title)(
  css({
    fontSize: [5, 6],
    lineHeight: 1.25,
    pb: 2,
    textTransform: 'none'
  })
);

const StyledLogo = styled(Logo)`
  display: inline-block;
  margin-right: 7px;
  vertical-align: middle;
`;

const StyledMarquee = styled(Marquee)`
  ${css({ pb: 0 })}
`;

const StyledText = styled(Text)(
  css({
    mb: 3,
    pb: 2,
    'a, a:active, a:visited': {
      color: 'accent'
    }
  })
);

const WaveformControls = styled('div')(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '26px'
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

const MixtapeTemplate = ({ data }) => {
  const post = get(data, 'markdownRemark', null);

  const { fields, frontmatter, html } = post;
  const { slug: href } = fields;
  const {
    category,
    date,
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
            href,
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

  const memoizedDate = useMemo(
    () => formatDistanceToNowStrict(new Date(date)),
    []
  );
  const memoizedDuration = useMemo(() => msToTime(track?.duration), [
    track?.duration
  ]);
  const memoizedTitle = useMemo(
    () => <StyledPageTitle key={title}>{title}</StyledPageTitle>,
    []
  );

  const isSmallScreen = pageWidth <= Breakpoints.SM;
  const imageSrc = get(image, 'childImageSharp.fluid.src', null);
  return (
    <Page
      description={description}
      title={title}
      image={imageSrc}
      slug={href}
      type="article"
    >
      <Box width={[1, 1, 3 / 5]}>
        <MixtapeImageContainer>
          <CoverImage
            category={category}
            forceOverlay={isPlaying || isSmallScreen}
            onClick={onClick}
            image={image}
            mediaSrc={src}
          />
        </MixtapeImageContainer>
        <Page.Content>
          <MixtapeTitleContainer>
            <StyledMarquee>{memoizedTitle}</StyledMarquee>
            <Text color="text.secondary" fontSize={4} p={0}>
              {description}
            </Text>
            <Text as="div" fontSize={2} pt="24px">
              <StyledLogo size={25} />
              Soul Provider ·{' '}
              <Text as="span" color="text.secondary">
                {memoizedDate} ago
              </Text>
            </Text>
          </MixtapeTitleContainer>
          {!!html.length && (
            <StyledText as="div" dangerouslySetInnerHTML={{ __html: html }} />
          )}
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
              {msToTime(isPlaying ? progress : null)} / {memoizedDuration}
            </Text>
          </WaveformControls>
          {tracklistJson && !isSmallScreen && (
            <>
              <Tracklist
                isPlaying={isPlaying}
                onSeek={onSeek}
                progress={isListening ? progress : 0}
                tracklist={tracklistJson}
              />
            </>
          )}
        </Page.Content>
      </Box>
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
