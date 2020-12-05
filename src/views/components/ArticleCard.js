import React, { useMemo, useRef } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import { useIsMouseOver } from 'common/hooks/useIsMouseOver';
import { useListen, useIsPlaying } from 'modules/player/hooks';
import { useTrack } from 'modules/soundcloud';
import { Badge, Breakpoints, Card, Text, usePageWidth } from 'theme';
import PauseIcon from 'views/components/PauseIcon';
import PlayIcon from 'views/components/PlayIcon';

const ArticleCardContainer = styled(Card.Container)(
  css({
    mb: 4
  })
);

const ArticleCardContent = styled('div')(
  css({
    pt: 3
  })
);

const ArticleCardTitle = styled(Text)(
  css({
    fontSize: [4, 3],
    fontWeight: 600,
    lineHeight: 1.25,
    pb: [2, 1],
    'a, a:active, a:visited': {
      color: 'text.primary'
    }
  })
);

const StyledBadge = styled(Badge)(
  css({
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1
  })
);

const ArticleCard = ({ post, ...props }) => {
  const cardRef = useRef(null);
  const linkRef = useRef(null);

  const { frontmatter } = post;
  const {
    category,
    description,
    image,
    soundCloudUrl = null,
    title
  } = frontmatter;

  const track = useTrack(soundCloudUrl);
  const isMouseOver = useIsMouseOver(cardRef);
  const isPlaying = useIsPlaying(track?.stream_url);
  const pageWidth = usePageWidth();

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
  const listenFn = useListen(track?.stream_url, meta);
  const onClick = (e) => {
    // Ignore clicks on card title.
    if (linkRef.current && e.target === linkRef.current) {
      e.preventDefault();
      return false;
    }
    listenFn();
  };

  const iconProps = { color: 'white', size: 40 };
  const overlayContent = isPlaying ? (
    <PauseIcon {...iconProps} />
  ) : (
    <PlayIcon {...iconProps} />
  );

  return (
    <ArticleCardContainer ref={cardRef} onClick={onClick} {...props}>
      <Card.Header>
        <StyledBadge bg={category.colour} colour="white">
          {category.label}
        </StyledBadge>
        <Image fluid={image.childImageSharp.fluid} />
        <Card.Overlay
          force={isPlaying || isMouseOver || pageWidth <= Breakpoints.SM}
        >
          {overlayContent}
        </Card.Overlay>
      </Card.Header>
      <ArticleCardContent>
        <ArticleCardTitle>
          <Link ref={linkRef} to={post.fields.slug}>
            {title}
          </Link>
        </ArticleCardTitle>
        <Text dangerouslySetInnerHTML={{ __html: description }} />
      </ArticleCardContent>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
