import React, { useRef } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash.get';

import { ContentCard } from '@/ui/cards';
import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';
import { useClickAction, useIsPlaying } from '@/player/hooks';
import { useTrack } from '@/soundcloud';
import { Box, Heading } from '@/ui';

const ArticleCard = ({ article, ...props }) => {
  const linkRef = useRef(null);

  const soundCloudUrl = get(article, 'soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);

  const isPlaying = useIsPlaying(track?.stream_url);
  const meta = track
    ? {
        artist: track.user.username,
        cover: article.heroImage.sizes.src,
        duration: track.duration,
        slug: article.slug,
        title: article.title
      }
    : null;
  const onClick = useClickAction(track?.stream_url, meta);

  const iconProps = { color: 'white', size: 40 };
  const overlayContent = isPlaying ? (
    <PauseIcon {...iconProps} />
  ) : (
    <PlayIcon {...iconProps} />
  );

  const image = (
    <Box as={Img} width={1} borderRadius={0} sizes={article.heroImage.sizes} />
  );

  return (
    <ContentCard
      badgeColour={article.category.colour}
      badgeText={article.category.label}
      image={image}
      onClick={(e) => {
        // Ignore clicks on card title.
        if (linkRef.current && e.target === linkRef.current) {
          return false;
        }
        onClick();
      }}
      overlayContent={overlayContent}
      {...props}
    >
      <Heading as="h5" my={2}>
        <Link
          className="text-dark font-weight-bold"
          ref={linkRef}
          to={`/${article.slug}`}
        >
          {article.title}
        </Link>
      </Heading>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html
        }}
      />
    </ContentCard>
  );
};

export default ArticleCard;
