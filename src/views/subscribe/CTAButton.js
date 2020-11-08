import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Button } from 'theme';

const StyledButton = styled(Button)(
  css({
    mt: [3, null, 0],
    width: ['100%', null, '150px']
  })
);

export const CTAButton = (props) => (
  <StyledButton variant="primary" {...props} />
);
