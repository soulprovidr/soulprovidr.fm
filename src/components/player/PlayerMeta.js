import React from 'react';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { usePlayerMeta } from 'modules/player';
import { Text } from 'theme';
import DefaultCover from 'static/images/default.png';

const MetaContainer = styled('div')`
  cursor: pointer;
  display: flex;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  ${css({
    minWidth: [null, 300],
    ml: [0, 3],
    position: ['absolute', 'relative']
  })}
  & > * {
    user-select: none;
  }
`;

const MetaImage = styled('img')`
  height: 100%;
  ${css({
    mr: [2, 3]
  })}
`;

const MetaContent = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${css({
    pb: [1, 0]
  })}
`;

const MetaTitle = styled(Text)`
  font-weight: bold;
  white-space: nowrap;
  line-height: 1.25em;
  ${css({ p: 0 })}
`;

const MetaArtist = styled(Text)`
  white-space: nowrap;
  ${css({
    p: 0,
    fontSize: 2
  })}
`;

function PlayerMeta() {
  const { artist, cover, title, href = null } = usePlayerMeta();

  const onClick = () => {
    if (href) navigate(href);
  };

  return (
    <MetaContainer onClick={onClick}>
      <MetaImage src={cover || DefaultCover} />
      <MetaContent>
        <MetaTitle>{title}</MetaTitle>
        <MetaArtist>{artist}</MetaArtist>
      </MetaContent>
    </MetaContainer>
  );
}

export default PlayerMeta;
