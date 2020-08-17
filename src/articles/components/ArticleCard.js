import React, { useRef } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import get from 'lodash.get';

import { Card } from '@/ui';
import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';
import { useClickAction, useIsPlaying } from '@/player/hooks';
import { useTrack } from '@/soundcloud';
import { Box, Heading } from '@/ui';

const ArticleCard = ({ post, ...props }) => {
  const linkRef = useRef(null);

  const soundCloudUrl = get(post, 'soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);

  const isPlaying = useIsPlaying(track?.stream_url);
  const meta = track
    ? {
        artist: track.user.username,
        cover: post.heroImage.sizes.src,
        duration: track.duration,
        slug: post.slug,
        title: post.title
      }
    : null;
  const onClick = useClickAction(track?.stream_url, meta);

  const iconProps = { color: 'white', size: 40 };
  const overlayContent = isPlaying ? (
    <PauseIcon {...iconProps} />
  ) : (
    <PlayIcon {...iconProps} />
  );

  const image = post.frontmatter.image && (
    <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
  );

  return (
    <Card
      badgeColour={post.frontmatter.category.colour}
      badgeText={post.frontmatter.category.label}
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
          to={`/${post.name}`}
        >
          {post.frontmatter.title}
        </Link>
      </Heading>
      <div
        dangerouslySetInnerHTML={{
          __html: post.frontmatter.description
        }}
      />
    </Card>
  );
};

export default ArticleCard;
