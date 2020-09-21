import React, { useRef } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import get from 'lodash.get';

import { useClickAction, useIsPlaying } from 'modules/player/hooks';
import { useTrack } from 'modules/soundcloud';
import { Card, Heading, Text } from 'theme';
import PauseIcon from 'ui/components/PauseIcon';
import PlayIcon from 'ui/components/PlayIcon';

const ArticleCard = ({ post, ...props }) => {
  const linkRef = useRef(null);

  const soundCloudUrl = get(post, 'frontmatter.soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);

  const isPlaying = useIsPlaying(track?.stream_url);
  const meta = track
    ? {
        artist: track.user.username,
        cover: post.frontmatter.image.childImageSharp.fluid.src,
        duration: track.duration,
        title: post.frontmatter.title
      }
    : null;
  const clickAction = useClickAction(track?.stream_url, meta);
  const onClick = (e) => {
    // Ignore clicks on card title.
    if (linkRef.current && e.target === linkRef.current) {
      return false;
    }
    clickAction();
  };

  const iconProps = { color: 'white', size: 40 };
  const overlayContent = isPlaying ? (
    <PauseIcon {...iconProps} />
  ) : (
    <PlayIcon {...iconProps} />
  );

  return (
    <Card.Container onClick={onClick}>
      <Card.Header>
        <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
      </Card.Header>
    </Card.Container>
  );
  // return (
  //   <Card.Old
  //     badgeColour={post.frontmatter.category.colour}
  //     badgeText={post.frontmatter.category.label}
  //     image={image}
  //     onClick={(e) => {
  //       // Ignore clicks on card title.
  //       if (linkRef.current && e.target === linkRef.current) {
  //         return false;
  //       }
  //       onClick();
  //     }}
  //     overlayContent={overlayContent}
  //     {...props}
  //   >
  //     <Heading as="h3" py={2}>
  //       <Link ref={linkRef} to={post.fields.slug}>
  //         {post.frontmatter.title}
  //       </Link>
  //     </Heading>
  //     <Text
  //       dangerouslySetInnerHTML={{
  //         __html: post.frontmatter.description
  //       }}
  //     />
  //   </Card.Old>
  // );
};

export default ArticleCard;
