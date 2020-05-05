import styled from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

export default styled('div', { shouldForwardProp })(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  },
  compose(
    background,
    border,
    color,
    flexbox,
    layout,
    position,
    space,
    typography
  )
);
