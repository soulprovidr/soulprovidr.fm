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
import { Waveform, useTrack } from 'modules/soundcloud';
import { Box, Button, Flex, Spinner, Text } from 'theme';
import { CoverImage } from '../components/CoverImage';
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
    position: 'relative',
    flexGrow: 1
  })
);

const MixtapeContent = styled(Box)(
  css({
    mb: 3,
    pl: [0, 5],
    pt: [3, 0],
    pb: 5,
    width: ['100%', '60%']
  })
);

const MixtapeTitle = styled(Page.Title)(
  css({
    fontSize: 6,
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
  const { category, image, soundCloudUrl, title } = frontmatter;
  const track = useTrack(soundCloudUrl);
  const mediaSrc = track?.stream_url ?? null;
  const isPlaying = useIsPlaying(track?.stream_url);
  const progress = usePlayerProgress();
  const mediaAction = useMediaAction(mediaSrc);
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
            forceOverlay={false}
            onClick={onClick}
            image={image}
            mediaSrc={mediaSrc}
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
                  <StyledPlayerIcon size={12} src={mediaSrc} />
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
