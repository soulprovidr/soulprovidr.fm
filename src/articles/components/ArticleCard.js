import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash.get';

import { useClickAction, useIsPlaying } from '@/player/hooks';
import { useTrack } from '@/soundcloud';

import { ContentCard } from '@/cards';

import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';
import { Box, Heading } from '@/ui';

const ArticleCard = (props) => {
  const { article } = props;
  console.log(article);

  const linkRef = useRef(null);
  const soundCloudUrl = get(article, 'soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);
  const isPlaying = useIsPlaying(track?.stream_url ?? null);

  const meta = track
    ? {
        artist: track.user.username,
        cover: article.heroImage.sizes.src,
        duration: track.duration,
        slug: article.slug,
        title: article.title
      }
    : null;

  const onClick = useClickAction(track?.stream_url ?? null, meta);
  const onClickHandler = (e) => {
    // Ignore clicks on card title.
    if (linkRef.current && e.target === linkRef.current) {
      return false;
    }
    onClick();
  };

  const iconProps = { color: 'white', size: 60 };
  const overlayContent = isPlaying ? (
    <PauseIcon {...iconProps} />
  ) : (
    <PlayIcon {...iconProps} />
  );

  const image = <Box as={Img} width={1} sizes={article.heroImage.sizes} />;

  return (
    <ContentCard
      badgeColour={article.category.colour}
      badgeContent={article.category.label}
      image={image}
      onClick={onClickHandler}
      overlayContent={overlayContent}
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

const mapState = (state) => ({
  src: state.player.src,
  status: state.player.status
});

export default connect(mapState)(ArticleCard);
