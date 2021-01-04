import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Button, Heading, Logo, Text } from 'theme';

const StyledContainer = styled('div')(
  css({
    display: 'flex',
    alignItems: ['flex-start', 'center']
  })
);

const StyledLogo = styled(Logo)(
  css({
    flexShrink: 0,
    mr: 3,
    mt: [2, 0]
  })
);

const StyledHeading = styled(Heading)(
  css({
    p: 0
  })
);

const StyledText = styled(Text)(
  css({
    p: 0
  })
);

const StyledButton = styled(Button)(
  css({
    mt: [3, null, 0],
    width: ['100%', null, '150px']
  })
);

const CTA = ({ children, text, title }) => (
  <>
    <StyledContainer>
      <StyledLogo />
      <div>
        <StyledHeading as="h3">{title}</StyledHeading>
        <StyledText>{text}</StyledText>
      </div>
    </StyledContainer>
    {children}
  </>
);

CTA.Button = (props) => <StyledButton variant="primary" {...props} />;

export { CTA };
