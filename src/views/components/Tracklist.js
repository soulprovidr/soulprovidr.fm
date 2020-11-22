import React, { useState } from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Text } from 'theme';

const StyledTable = styled('table')(
  css({
    borderCollapse: 'collapse',
    color: 'text.primary',
    fontSize: 3,
    width: '100%'
  })
);

const StyledTr = styled('tr')(({ highlight }) =>
  css({
    bg: highlight ? 'accent' : 'initial',
    borderBottom: 'container',
    color: highlight ? 'white' : 'text.primary',
    '&:hover': {
      bg: highlight ? 'accent' : 'hover',
      color: highlight ? 'white' : 'text.primary',
      cursor: 'pointer'
    },
    '&:last-of-type': {
      borderBottom: 'none'
    }
  })
);

const StyledThead = styled('thead')(
  css({
    borderBottom: '1px solid #ddd',
    borderTop: '1px solid #ddd',
    color: 'text.secondary'
  })
);

const StyledTh = styled('th')(
  css({
    fontWeight: 'normal',
    minWidth: 25,
    textAlign: 'left',
    p: 3,
    '&:first-of-type': {
      textAlign: 'center'
    }
  })
);

const StyledTd = styled('td')(
  css({
    color: 'inherit',
    minWidth: 25,
    p: 2,
    '&:first-of-type': {
      textAlign: 'center'
    }
  })
);

const TableRow = ({ artist, highlight, index, onClick, title }) => (
  <StyledTr highlight={highlight} onClick={onClick}>
    <StyledTd>
      <Text color={highlight ? 'white' : 'text.secondary'} py={0}>
        {index + 1}
      </Text>
    </StyledTd>
    <StyledTd>{artist}</StyledTd>
    <StyledTd>{title}</StyledTd>
  </StyledTr>
);

export function Tracklist({
  isPlaying,
  onSeek,
  progress,
  tracklist,
  ...props
}) {
  if (!tracklist) {
    return null;
  }

  const addHighlightedProp = (currItem, index, arr) => {
    if (!isPlaying && progress === 0) {
      return { ...currItem, highlight: false };
    }
    const nextItem = index < arr.length - 1 ? arr[index + 1] : null;
    if (nextItem) {
      // Handle all items up to the last item.
      if (progress >= currItem.start && progress < nextItem.start) {
        return { ...currItem, highlight: true };
      }
    } else {
      // Handle the last item.
      if (progress >= currItem.start) {
        return { ...currItem, highlight: true };
      }
    }
    return { ...currItem, highlight: false };
  };

  const renderTableRows = () => {
    return tracklist
      .map(addHighlightedProp)
      .map((currItem, index) => (
        <TableRow
          key={index}
          index={index}
          onClick={() => onSeek(currItem.start)}
          {...currItem}
        />
      ));
  };
  return (
    <div {...props}>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>#</StyledTh>
            <StyledTh>Artist</StyledTh>
            <StyledTh>Title</StyledTh>
          </tr>
        </StyledThead>
        <tbody>{renderTableRows()}</tbody>
      </StyledTable>
    </div>
  );
}
