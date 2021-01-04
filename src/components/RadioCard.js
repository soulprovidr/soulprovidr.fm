import React, { useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { MarqueeContainer as Marquee } from 'modules/common/marquee';
import { useIsMouseOver } from 'modules/common/hooks/useIsMouseOver';
import { useIsRadioPlaying, usePlayRadio, useRadioMeta } from 'modules/radio';
import { Breakpoints, Card, Text, usePageWidth } from 'theme';
import PauseIcon from 'components/PauseIcon';
import PlayIcon from 'components/PlayIcon';
import DefaultCover from 'static/images/default.png';

const RadioCardContainer = styled(Card.Container)(
  css({
    display: 'flex',
    flexDirection: ['column', 'row']
  })
);

const RadioCardHeader = styled(Card.Header)(
  css({
    mr: [0, 5],
    width: ['100%', '33%']
  })
);

const RadioCardImage = styled('img')(
  css({
    borderRadius: 1,
    verticalAlign: 'bottom',
    width: '100%'
  })
);

const RadioCardContent = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    mt: 3,
    width: ['100%', '66%']
  })
);

const RadioCardTitle = styled(Text)(
  css({
    fontSize: [5, 6],
    fontWeight: 600,
    lineHeight: 1.25,
    pb: 0,
    pt: 1
  })
);

const RadioCardArtist = styled(Text)(
  css({
    fontSize: 4
  })
);

const RadioCard = () => {
  const containerRef = useRef(null);

  const meta = useRadioMeta();
  const isMouseOver = useIsMouseOver(containerRef);
  const isPlaying = useIsRadioPlaying();
  const listenFn = usePlayRadio();
  const pageWidth = usePageWidth();

  const overlay = useMemo(() => {
    const IconComponent = isPlaying ? PauseIcon : PlayIcon;
    return <IconComponent color="white" size={50} />;
  }, [isPlaying]);

  const title = useMemo(
    () => (
      <RadioCardTitle key={meta?.title}>
        {meta?.title ?? 'Loading...'}
      </RadioCardTitle>
    ),
    [meta?.title]
  );

  const artist = useMemo(
    () => (
      <RadioCardArtist key={meta?.artist}>{meta?.artist ?? ''}</RadioCardArtist>
    ),
    [meta?.artist]
  );

  const imageAlt = meta ? `${meta.artist} - ${meta.title}` : 'Loading...';
  return (
    <RadioCardContainer onClick={() => listenFn()} ref={containerRef}>
      <RadioCardHeader>
        <RadioCardImage src={meta?.cover ?? DefaultCover} alt={imageAlt} />
        <Card.Overlay
          force={isPlaying || isMouseOver || pageWidth <= Breakpoints.SM}
        >
          {overlay}
        </Card.Overlay>
      </RadioCardHeader>
      <RadioCardContent>
        <Marquee>{title}</Marquee>
        <Marquee>{artist}</Marquee>
      </RadioCardContent>
    </RadioCardContainer>
  );
};

export default RadioCard;
