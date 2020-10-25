import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

const StyledThead = styled('thead')(
  css({
    borderBottom: '1px solid #ddd',
    color: 'textSecondary'
  })
);

const StyledTd = styled('td')(
  css({
    p: 2
  })
);

export default function Tracklist() {
  return (
    <table>
      <StyledThead>
        <StyledTd>Artist</StyledTd>
        <StyledTd>Title</StyledTd>
        <StyledTd>Time</StyledTd>
      </StyledThead>
      <tbody>
        <tr>
          <StyledTd>Mariah Carey</StyledTd>
          <StyledTd>We Belong Together</StyledTd>
        </tr>
        <tr>
          <StyledTd>Mariah Carey</StyledTd>
          <StyledTd>We Belong Together</StyledTd>
        </tr>
        <tr>
          <StyledTd>Mariah Carey</StyledTd>
          <StyledTd>We Belong Together</StyledTd>
        </tr>
        <tr>
          <StyledTd>Mariah Carey</StyledTd>
          <StyledTd>We Belong Together</StyledTd>
        </tr>
        <tr>
          <StyledTd>Mariah Carey</StyledTd>
          <StyledTd>We Belong Together</StyledTd>
        </tr>
        <tr>
          <StyledTd>Mariah Carey</StyledTd>
          <StyledTd>We Belong Together</StyledTd>
        </tr>
      </tbody>
    </table>
  );
}
