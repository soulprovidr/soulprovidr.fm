import styled from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system';
import css from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

const sx = (props) => css(props.sx);

export default styled('div', { shouldForwardProp })(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  },
  sx,
  compose(
    background,
    border,
    color,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )
);
